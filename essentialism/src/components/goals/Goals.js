import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGoals, removeGoal, editGoal } from "../../state/actions";
import Goal from "./Goal";
import EditGoal from "./EditGoal";
const Goals = (props) => {
  console.log(props);
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
      <div>
        {props.goals.map((item) => (
          <div key={item.id}>
            {item.editing ? (
              <EditGoal item={item} key={item.id} />
            ) : (
              <Goal id={item.id} {...item} handleDelete={handleDelete} />
            )}
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
    isFetching: state.isFetching,
    error: state.error,
    updated: state.updated,
    editing: state.editing,
  };
};

export default connect(mapStateToProps, { fetchGoals, removeGoal })(Goals);
