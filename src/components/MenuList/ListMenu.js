import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./ListMenu.css";
import "./index.css";
import { Link } from "react-router-dom";

const allCategories = ["Seasonal Items", "Appetizers", "Main Courses", "Side Dishes", "Wines", "Cocktails"];

const ListMenu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [orderItems, setOrderItems] = useState([]);

  const filterItems = (category) => {
    setActiveCategory(category);
    setMenuItems(category === "all" ? items : items.filter((item) => item.category === category));
  };

  const addToOrder = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    const existingItem = orderItems.find((item) => item.id === itemId);

    if (existingItem) {
      const updatedOrderItems = orderItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setOrderItems(updatedOrderItems);
    } else {
      setOrderItems([...orderItems, { ...selectedItem, quantity: 1 }]);
    }
  };

  const totalPrice = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2 className="header">Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
        <Menu items={menuItems} addToOrder={addToOrder} />
      </section>

      <section className="order section">
        <div className="title">
          <h2 className="headtext__cormorant">Order Summary</h2>
          <div className="underline"></div>
        </div>
        <ul className="order-list">
          {orderItems.map((item) => (
            <li key={item.id}>
              <div className="order-item-container">
                <img src={item.img} alt={item.title} className="order-item-img" />
                <div className="order-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="total">Total: ${totalPrice.toFixed(2)}</div>
        <div className="confirm-order">
    <Link to='/notify'>
      <a className="custom__button">Confirm Order</a>
    </Link></div>
      </section>
    </main>
  );
};

export default ListMenu;