import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

function PriceCard(props) {
  const { netprice, subtotal, saved, shippingcost } = props;

  return (
    <Card className="mt-3">
      <Card.Header as='h5' className="bg-primary text-white">Payment Details</Card.Header>
      <Card.Body>
        <Card.Text className="mb-2">Sub Total: {subtotal}</Card.Text>
        <Card.Text className="mb-2">Shipping: {shippingcost === 0 ? "Free" : shippingcost}</Card.Text>
        <Card.Text className="mb-2">Saved: {saved}</Card.Text>
        <hr className="my-3"></hr>
        <Card.Text className="mb-2">Total: {netprice}</Card.Text>
        <Button variant='primary' className="mt-3 btn-block">Proceed to Payment</Button>
      </Card.Body>
    </Card>
  );
}

export default PriceCard;
