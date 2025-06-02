import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

const ProductList = () => {
  const { products, onAddToCart } = useOutletContext();
  return (
    <Container className="mt-4">
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4} className="mb-4">
            <ProductCard
              products={product}
              onAddToCart={onAddToCart}
            ></ProductCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ProductList;
