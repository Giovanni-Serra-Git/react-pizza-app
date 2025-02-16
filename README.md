# Pizza App
An app to order pizzas quickly and easily!
Based on the **Fast React Pizza Co.** API, it allows users to **fake login**, **order pizzas** and **remove them from the cart**.

# Live Demo
(https://react-pizza-app.netlify.app)

# 🛠 Technologies

- React.js ⚛️
- React Router
- Tailwind CSS
- Redux Toolkit
- API Fast React Pizza Co.

# Installation

git clone https://github.com/Giovanni-Serra-Git/react-pizza-app.git

cd react-pizza-app

npm install

npm run dev

# Brief API Description → What is it for? What data does it provide?

The Fast React Pizza Co. API is used to manage the pizza ordering system in the app.
It provides data related to:

**Available pizzas →**  Name, ingredients, price, and image.
**Orders →** List of placed orders with status (pending, delivered, etc.).
**Users →** A simple fake login system to simulate authentication.

# Sample Data received

{  
  **pizzaId(pin):** 1  
  **name(pin):** "Margherita"  
  **quantity(pin):** 1  
  **unitPrice(pin):** 12  
  **totalPrice(pin):** 12  
}  

# Endpoints:

**GET - Get List of Menu** https://react-fast-pizza-api.onrender.com/api/menu  
**GET - Get specific Order** https://react-fast-pizza-api.onrender.com/api/orderd/id  

**POST - Create Order** https://react-fast-pizza-api.onrender.com/api/order  

**PATCH - Update Order** https://react-fast-pizza-api.onrender.com/api/order/id  

# Features of the App

✔️ Fake login to access the app  
✔️ Viewing the pizza menu  
✔️ Adding and removing pizzas from the cart  
✔️ Increasing or decreasing pizza quantities in the cart  
✔️ Filling out a form for personal information  
✔️ Setting an order with or without priority  
✔️ Checkout with order confirmation  

❌ **The app may encounter issues (CORS) with Chrome when setting the order priority (PATCH Request).**


# Author
Giovanni Serra







