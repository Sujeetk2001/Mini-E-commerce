🛒 Mini E-Commerce App | React JS

A mini e-commerce web application built with React JS showcasing modern frontend development practices such as client-side routing, global state management, API integration, and CRUD operations using a mock backend.

The project uses JSON Server to create a custom REST API, allowing products to be added dynamically via a form and stored in a JSON database.

🔥 Live Features

📦 Dynamic product listing

➕ Add new products (Form → JSON Database)

🔁 Client-side routing with React Router DOM

🌐 API handling using Axios

🧠 Global state management with Context API

🗄️ Custom REST API using JSON Server

⚡ Clean and modular React architecture

🧰 Tech Stack

Category	Technology
Frontend	React JS
Routing	React Router DOM
State Management	Context API
API Calls	Axios
Mock Backend	JSON Server
Styling	CSS / Tailwind CSS


⚙️ Installation & Running Locally

1️⃣ Clone the Repository
git clone https://github.com/your-username/mini-ecommerce-react.git
cd mini-ecommerce-react

2️⃣ Install Dependencies
npm install

3️⃣ Start JSON Server (Mock API)
npx json-server --watch db.json --port 3001


API will be available at:

http://localhost:3001/products

4️⃣ Start the React App
npm run dev


or

npm start

📄 Sample db.json
{
  "products": [
    {
      "id": 1,
      "title": "Wireless Headphones",
      "price": 1999,
      "category": "Electronics",
      "image": "https://example.com/image.jpg",
      "description": "High quality wireless headphones"
    }
  ]
}

🔄 How It Works

Products are fetched from JSON Server using Axios
Data is stored globally using Context API
Navigation is handled via React Router DOM
New products are added using a controlled form
POST request updates the JSON database
UI updates automatically without page reload

🎯 Key Learnings

Structuring scalable React applications
Using Context API for shared state
Integrating REST APIs in React
Implementing CRUD functionality
Working with mock backends
Managing routes and navigation
🚧 Future Enhancements

🔐 Authentication (Login / Signup)
🛒 Cart & Checkout functionality
🔍 Search & Filter products
🧾 Order history
📊 Admin dashboard
🌍 Real backend with Node.js & MongoDB
🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss improvements.

👨‍💻 Author

Sujeet Kumar
Frontend Developer | React JS Enthusiast

📫 Feel free to connect on LinkedIn or explore more projects on GitHub.

⭐ If you like this project, don’t forget to star the repository!
