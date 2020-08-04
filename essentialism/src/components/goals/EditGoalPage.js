import React from "react";
import EditGoalForm from "./EditGoalForm";
import { Spring } from "react-spring/renderprops";

const EditGoalsPage = () => {
  return (
    <Spring
      config={{ delay: 100, duration: 575 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {() => (
        <div>
          <div>
            <EditGoalForm />
          </div>
        </div>
      )}
    </Spring>
  );
};

export default EditGoalsPage;
