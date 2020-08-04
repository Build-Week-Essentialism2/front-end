import React, { useEffect } from "react";
// import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGoals, removeGoal, editGoal } from "../../state/actions";
import Goal from "./Goal";
// import EditGoalForm from "./EditGoalForm";
const Goals = (props) => {
  console.log(props);
  useEffect(() => {
    console.log("fetching");
    fetchGoals();
  }, []);

  // console.log(props);
  // useEffect(() => {
  //   console.log("fetching");
  //   props.fetchGoals();
  // }, [props.updated]);

  // if (props.updated) {
  //   props.fetchGoals();
  // }

  const handleDelete = (id) => {
    console.log(id);
    props.removeGoal(id);
  };

  const handleEdit = (id) => {
    console.log("handleEdit log", id);
    props.editGoal(id);
    // history.push(`/edit-goal`);
  };

  return (
    <>
      <div>
        {props.goals.map((item) => (
          <div>
            {/* <div key={item.id}> */}
            {/* {item.editing ? (
              <EditGoalForm item={item} key={item.id} />
            ) : ( */}
            <Goal
              id={item.id}
              {...item}
              handleDelete={handleDelete}
              handleEdit={editGoal}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("goals mapStateToProps", state);
  return {
    goals: state.essentialismReducer.goals,
    isFetching: state.essentialismReducer.isFetching,
    error: state.essentialismReducer.error,
    updated: state.essentialismReducer.updated,
    editing: state.essentialismReducer.editing,
  };
};

export default connect(mapStateToProps, { fetchGoals, removeGoal, editGoal })(
  Goals
);
