import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Stylesheets/cartItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';

function CartItem(props) {
  const { product, handleQntBtn, handleRmv } = props;

  return (
    <Container className='mb-4 p-3 border rounded'>
      <Row>
        <Col xs={12} md={3}>
          <img src={product.thumbnail} alt={product.title} className='img-fluid' />
        </Col>
        <Col xs={12} md={6} className='mt-3 mt-md-0'>
          <div className='cart-product-title mb-2'>{product.title}</div>
          <div className='mb-2'>{product.description}</div>
          <div className='mb-2'>
            <span className='text-decoration-line-through'>
              ₹{product.price}
            </span>
            <span className='ml-2'>
              {"   " + Math.ceil(
                product.price -
                product.price * (product.discountPercentage / 100)
              )}
            </span>
          </div>
          <div className='mb-2'>{product.discountPercentage}% Offer</div>
          <div>
            <span className='cart-product-rating'>{product.rating}/</span>
            <span>5</span>
          </div>
        </Col>
        <Col xs={12} md={3} className='mt-3 mt-md-0'>
          <div className='mb-3'>
            <label htmlFor={`prdQuantity_${product.id}`}>Quantity</label>
            <input
              type='number'
              id={`prdQuantity_${product.id}`}
              className='prdQuantityInp form-control'
              placeholder='1'
              min={0}
              onChange={(event) => handleQntBtn(event, product)}
            />
          </div>
          <div>
            <Button variant="danger" onClick={() => handleRmv(product)}>
              <FontAwesomeIcon icon={faTrashArrowUp} />{"   "}Remove
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CartItem;
