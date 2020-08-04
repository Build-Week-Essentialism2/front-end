import React, { useState } from "react";
import { connect } from "react-redux";

import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import * as yup from "yup";
import { submitEditGoal } from "../../state/actions";

// import axios from 'axios';

const formSchema = yup.object().shape({
  title: yup.string().required("Title is a required field"),
  date: yup.string().required("A goal date is a required field"),
});

const EditGoalForm = (props) => {
  let history = useHistory();
  let params = useParams();
  const paramsid = params.id;
  // const classes = useStyles();

  const [formState, setFormState] = useState({
    title: props.editGoal.title,
    date: props.editGoal.date,
    id: Date.now(),
  });

  console.log("GOAL UPDATED", formState);

  const [errorState, setErrorState] = useState({
    title: "",
    date: "",
    id: Date.now(),
  });

  const inputChange = (e) => {
    e.persist();
    validate(e);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log("errors", err.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const submitButton = () => {
    return history.goBack();
  };

  const cancelButton = (e) => {
    return history.goBack();
  };

  console.log("ParamsID in EditGoalForm", paramsid);

  const submitForm = (e) => {
    e.preventDefault();
    props.submitEditGoal(props.goals.id, formState);
    console.log("submitEditGoals action Submit");
    setFormState({ title: "", date: "", id: Date.now() });
    submitButton();
    // axios
    //     .post("https://vr-direct1.herokuapp.com/api/backer/login", formState)
    //     .then(response => {
    //       const decoded = jwt.decode(response.data.token);
    //       console.log("Axios response from Backer Login submit", response, decoded);
    //       console.log("Axios response from Backer Login userID", decoded.userId);
    //       localStorage.setItem("token", response.data.token);
    //       setTimeout(()=>{history.push(`/backer-dashboard/${decoded.userId}`)},1000);
    //       {props.BackerDisplayName.BackerDisplayName(response, decoded)};
    //       ;})
    //     .catch(err => {console.log("Axios error", err)});
    // cancelButton()
  };

  return (
    <div style={{ paddingTop: "4%" }}>
      <br />
      <form onSubmit={submitForm}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Goal: </InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            name="title"
            value={formState.value}
            onChange={inputChange}
          />
        </InputGroup>

        <div className="formInput">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Date: </InputGroupText>
            </InputGroupAddon>
            <Input
              type="date"
              name="date"
              value={formState.description}
              onChange={inputChange}
            />
          </InputGroup>
        </div>

        <Button type="submit" color="primary">
          Submit
        </Button>
        <Button onClick={cancelButton} size="small">
          Cancel
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("Edit Goals State", state.essentialismReducer.goals);

  return {
    editGoal: state.essentialismReducer.editGoal,
  };
};

export default connect(mapStateToProps, { submitEditGoal })(EditGoalForm);
