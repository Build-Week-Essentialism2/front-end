import React from "react";
import { useHistory } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import Button from '@material-ui/core/Button'

const FeedbackPage = () => {
    const history = useHistory();

    // const skip = () => {
    //   history.push("/dashboard");
    // };
    const feedback = () => {
        history.push("/feedback-form");
      };

  return (
    <Spring
    config={{delay: 100, duration: 575}}
    from={{ opacity: 0}}
    to={{ opacity: 1}}
    >
        {props=>(
            <div style={props}>
    <div className="feedbackPage">
        <div style={{display: "flex", flexDirection: "row-reverse", width: "92%"}}>
            <div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "84vh"}}>
      <h3 style={{color: "white"}}>Why did you pick these values?</h3>
      <Button variant="outlined" color="primary" onClick={feedback} style={{color: "white"}}>Feedback Form</Button>
      {/* <Button onClick={skip} style={{color: "white"}}>Skip</Button> */}
      </div>
      </div>
      </div>
    </div>
    </div>
            )}
            </Spring>
  );
};

export default FeedbackPage;
