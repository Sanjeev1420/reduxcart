import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./cartItem";
import PriceCard from "./priceCard";
import { updateQuantity, removeProduct, updatePrice } from "../redux/cartSlice"; 

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const cartProducts = cartData.products;
  const netTotal = cartData.netTotal;
  const subTotal = cartData.subTotal;
  const saved = cartData.saved;
  const shippingPrice= cartData.shippingPrice;
 
  const dispatch = useDispatch();

  const handleQuantityBtn = (e, prd) => {
    dispatch(updateQuantity({ productId: prd.id, quantity: e.target.value }));
    dispatch(updatePrice());
  };

  const handleRemove = (prd) => {
    dispatch(removeProduct({ productId: prd.id }));
    dispatch(updatePrice());
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={9}>
          {cartProducts.map((prd) => (
            <CartItem
              key={prd.id}
              product={prd}
              handleQntBtn={handleQuantityBtn}
              handleRmv={handleRemove}
            />
          ))}
        </Col>
        <Col xs={12} md={3}>
          <PriceCard
            netprice={netTotal}
            subtotal={subTotal}
            saved={saved}
            shippingcost={shippingPrice}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
