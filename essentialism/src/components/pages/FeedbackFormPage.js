import React from 'react';
import { Spring } from 'react-spring/renderprops';
import FeedbackForm from '../forms/FeedbackForm';

const FeedbackFormPage = () => {
    return(
        <Spring
        config={{delay: 125, duration: 750}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
            {props=>(
                <div style={props} className="feedbackFormPage">
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "92vh",}}>
        <div style={{backgroundColor: "white", padding: "2%", opacity: "0.95"}}>
           
            <FeedbackForm />
            
            </div>
            </div>
            </div>
            )}
            </Spring>
    )
}

export default FeedbackFormPage;