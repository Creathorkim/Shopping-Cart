import React, { useState } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";

function ProductCard({ products, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity((q) => q + 1);
  };

  const decrement = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    setQuantity(val < 1 ? 1 : val);
  };

  const addToCart = () => {
    onAddToCart(products, quantity);
    setQuantity(1);
  };

  return (
    <Card className="p-3 h-100 ">
      <Card.Img
        variant="top"
        src={products.image}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{products.title}</Card.Title>
        <Card.Text className="flex-grow-1 text-truncate">
          {products.description}
        </Card.Text>
        <h5 className="mt-auto">${products.price.toFixed(2)}</h5>
        <InputGroup className="d-flex my-2 g-2">
          <Form.Control
            type="number"
            value={quantity}
            onChange={handleChange}
            style={{ width: "60px", textAlign: "center" }}
          ></Form.Control>
          <Button onClick={increment} variant="dark">
            +
          </Button>
          <Button onClick={decrement} variant="secondary">
            -
          </Button>
        </InputGroup>
        <Button
          onClick={addToCart}
          style={{ backgroundColor: "rgb(112, 53, 236)", color: "white" }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
