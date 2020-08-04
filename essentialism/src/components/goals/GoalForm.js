import React, { useState } from "react";
import { connect } from "react-redux";
import { addGoal } from "../../state/actions";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";
const GoalForm = (props) => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState("");

  const handleChangesTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleChangesDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, date);
    console.log("Submitted form!!!");
    props.addGoal(title, date);
    setTitle("");
    setDate("");
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="formInput">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Goal: </InputGroupText>
            </InputGroupAddon>
            <Input
              
              type="text"
              name="title"
              value={title}
              onChange={handleChangesTitle}
            />
          </InputGroup>
        </div>
        <br />
        <div className="formInput">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Date: </InputGroupText>
            </InputGroupAddon>
            <Input
            
              type="date"
              name="date"
              value={date}
              onChange={handleChangesDate}
            />
          </InputGroup>
        </div>
        <br />

        <Button type="submit" color="primary">
          Add New Goal
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { addGoal })(GoalForm);
