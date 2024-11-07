from bs4 import BeautifulSoup
import requests
import re
from datetime import datetime

# Define dining hall mapping for user-friendly input
dining_halls = {
    "JCL Dining": "12(a)",
    "Kins Dining": "03",
    "J2 Dining": "12",
}

def get_user_input():
    # Get dining hall choice
    print("Available dining halls:", ", ".join(dining_halls.keys()))
    dining_hall = input("Enter the dining hall (e.g., 'JCL Dining', 'Kins Dining', or 'J2 Dining'): ").strip()
    
    # Validate dining hall
    if dining_hall not in dining_halls:
        print("Invalid dining hall. Please try again.")
        return None, None, None
    
    # Get meal choice
    meal = input("Enter the meal (Breakfast, Lunch, or Dinner): ").strip().title()
    if meal not in ["Breakfast", "Lunch", "Dinner"]:
        print("Invalid meal type. Please try again.")
        return None, None, None

    # Get date (defaults to today if left empty)
    date_input = input("Enter the date (MM/DD/YYYY) or leave blank for today: ").strip()
    if date_input:
        try:
            date = datetime.strptime(date_input, "%m/%d/%Y").strftime("%m/%d/%Y")
        except ValueError:
            print("Invalid date format. Please try again.")
            return None, None, None
    else:
        date = datetime.today().strftime("%m/%d/%Y")

    return dining_hall, meal, date

def scrape_menu(dining_hall, meal, date):
    base_url = "https://hf-foodpro.austin.utexas.edu/foodpro/"
    location_num = dining_halls[dining_hall]
    url = (f"{base_url}longmenu.aspx?sName=University+Housing+and+Dining"
           f"&locationNum={location_num}&locationName={dining_hall.replace(' ', '+')}"
           f"&naFlag=1&WeeksMenus=This+Week%27s+Menus&dtdate={date}&mealName={meal}")
    
    # Send a GET request to fetch the main webpage content (menu list)
    response = requests.get(url)
    response.raise_for_status()
    
    # Parse the main HTML content with BeautifulSoup
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find all menu item divs with class 'longmenucoldispname'
    menu_items = soup.find_all('div', {'class': 'longmenucoldispname'})
    
    # Iterate over each menu item to extract the name and the detail page link
    for item in menu_items:
        item_link_tag = item.find('a')
        
        # Check if item has a link before accessing
        if item_link_tag:
            item_name = item_link_tag.get_text(strip=True)
            item_link = item_link_tag.get('href')
            
            print(f"Item: {item_name}")
            print("Fetching Nutrition Facts...")

            # Scrape the nutrition details for the menu item
            scrape_nutrition_facts(base_url + item_link)
        else:
            print("Item link not found. Skipping nutrition data.")
        print("=" * 40)

def scrape_nutrition_facts(item_url):
    # Send a GET request to fetch the item's detail page content
    response = requests.get(item_url)
    response.raise_for_status()
    
    # Parse the item detail page with BeautifulSoup
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find the table containing the nutrition facts
    nutrition_table = soup.find('table', {'border': '1'})

    # If the table exists, process it
    if nutrition_table:
        rows = nutrition_table.find_all('tr')
        
        # Set to track displayed nutrients and avoid duplicates
        displayed_nutrients = set()
        
        # Iterate over the rows to extract the nutrient and its value
        for row in rows:
            # Find the nutrient name within a span with class 'nutfactstopnutrient'
            nutrient_label = row.find('span', {'class': 'nutfactstopnutrient'})
            if nutrient_label:
                nutrient_text = nutrient_label.get_text(strip=True)

                # Extract the nutrient value directly following the name
                value_cell = row.find('td', {'align': 'right'})
                
                # Proceed only if both nutrient and value are available
                if nutrient_text and value_cell:
                    nutrient_value_text = value_cell.get_text(strip=True)
                    combined_text = nutrient_text + " " + nutrient_value_text
                    
                    # Use regex to parse combined text into name, value, and unit
                    match = re.match(r"([a-zA-Z\s]+?)(\d+\.?\d*)([a-zA-Z]*)", combined_text)
                    
                    if match:
                        nutrient_name = match.group(1).strip()
                        nutrient_value = match.group(2).strip()
                        nutrient_unit = match.group(3).strip()
                        
                        # Print nutrient in the correct format
                        print(f"{nutrient_name}: {nutrient_value}{nutrient_unit}")
        print("-" * 40)
    else:
        print("No nutrition facts available for this item.")

if __name__ == "__main__":
    dining_hall, meal, date = get_user_input()
    if dining_hall and meal and date:
        scrape_menu(dining_hall, meal, date)
