import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGoals, removeGoal } from "../actions";
import Goal from "./Goal";

const Goals = (props) => {
  // console.log(props);
  useEffect(() => {
    console.log("fetching");
    fetchGoals();
  }, []);

  if (props.updated) {
    props.fetchGoals();
  }

  const handleDelete = (id) => {
    console.log(id);
    props.removeGoal(id);
  };

  return (
    <>
      {props.goals.map((item) => (
        <Goal id={item.id} {...item} handleDelete={handleDelete} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("goals mapStateToProps", state);
  return {
    goals: state.reducer.goals,
    isFetching: state.isFetching,
    error: state.error,
    updated: state.updated,
  };
};

export default connect(mapStateToProps, { fetchGoals, removeGoal })(Goals);
