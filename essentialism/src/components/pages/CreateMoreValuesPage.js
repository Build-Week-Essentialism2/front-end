import React from "react";
// import { useHistory } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import CreateMoreValuesForm from "../forms/CreateMoreValuesForm";
import { Spring } from 'react-spring/renderprops';

const CreateMoreValuesPage = () => {

  return (
    <Spring
    config={{delay: 100, duration: 575}}
    from={{ opacity: 0}}
    to={{ opacity: 1}}
    >
        {props=>(
            <div style={props}>
    <div className="createValuesPage">
      <CreateMoreValuesForm />
    </div>
    
           </div>
           )}
           </Spring>
  );
};

export default CreateMoreValuesPage;
