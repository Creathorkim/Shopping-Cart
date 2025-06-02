import React, { useState, useEffect } from "react";
import NavigationBar from "./components/Navbar";
import { Outlet } from "react-router";

const App = () => {
  const [cartItemCount, setCartItemCount] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  const onAddToCart = (products, quantity) => {
    setCartItemCount((prev) => {
      const existingItem = prev.find((item) => item.id === products.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === products.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...products, quantity }];
      }
    });
  };

  const totalCount = () => {
    return cartItemCount.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <>
      <NavigationBar cartItemCount={totalCount()} />
      <Outlet context={{ products, onAddToCart }} />
    </>
  );
};

export default App;
