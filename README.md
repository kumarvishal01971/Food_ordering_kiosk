# 🍽️ Food Ordering Kiosk

<p>
A fast and responsive web-based ordering platform developed with Go, HTML5, and CSS3. Enables customers to explore menu items, customize orders, and receive detailed invoices with tax calculations.
</p>
---

## 🚀 Features

- Browse a list of Indian food & beverages
- Place multiple item orders with quantity
- Dynamic order summary and total calculation
- Bill generation with 5% GST
- Thread-safe order handling using `sync.Mutex`
- Clean and responsive frontend using HTML & CSS

---

## 🛠️ Built With

- Go (Golang)
- Semantic HTML5
- CSS3 with Flexbox
- Native Go templates
---

## 📁 Project Structure


```
restaurants_food_ordering/
├── main.go
├── templates/
│   ├── index.html
│   ├── menu.html
│   ├── order_summary.html
│   ├── bill.html
│   ├── contact.html
│   └── offers.html
└── static/
    ├── style.css
    ├── script.js
    └── images/
        ├── food.jpg
        └── hero_img.jpg
```
## 🧑‍🍳 How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/restaurants_food_ordering.git
   cd restaurants_food_ordering

2 **Run the application**

go run main.go

3 **Open in browser**

http://localhost:8080


# 🌐 Routes
/ → Home page (index.html)

/menu → Menu display (menu.html)
/order → Order submission (POST) → order_summary.html

/offers → Special deals (offers.html)
/contact → Contact form (contact.html)

/view-order → Order summary (order_summary.html)
/bill → Final bill (bill.html)
