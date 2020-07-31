import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const Goal = (props) => {
  const onDelete = (e) => {
    props.handleDelete(props.id);
  };

  return (
    <>
      <div className="container">
        <Card body className="text-center">
          <CardTitle>
            <h2>Title: {props.title}</h2>
          </CardTitle>
          <CardText>
            <p>Date: {props.date}</p>
          </CardText>
          <Button onClick={onDelete}>Delete</Button>
        </Card>
        <hr></hr>
      </div>
    </>
  );
};

export default Goal;
