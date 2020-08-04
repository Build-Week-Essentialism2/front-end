import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
const Goal = (props) => {
  const onDelete = (e) => {
    props.handleDelete(props.id);
  };
  const history = useHistory();
  // const onEdit = () => {
  //   props.handleEdit(props.id);
  // };

  const onEdit = (id) => {
    console.log("handleEdit log", id);
    props.editGoal(id);
    history.push("/edit-goal");
  };

  return (
    <>
      <div className="container">
        <ListGroup>
          <ListGroupItem
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "2px",
            }}
          >
            <h4 style={{ margin: "10px" }}>Goal: {props.title}</h4>
            <p style={{ margin: "10px" }}>Date: {props.date}</p>
            <Button onClick={onDelete}>Delete</Button>{" "}
            <Button onClick={onEdit}>Edit</Button>
          </ListGroupItem>
        </ListGroup>

        {/* <Card body className="text-center">
          <CardTitle>
            <h2>Goal: {props.title}</h2>
          </CardTitle>
          <CardText>
            <p>Date: {props.date}</p>
          </CardText>
          
        </Card> */}
        <hr></hr>
      </div>
    </>
  );
};

export default Goal;
