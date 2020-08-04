import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Values from '../lists/Values';
import { Spring } from 'react-spring/renderprops';


const InitialAddValuesPage = () => {

    const history = useHistory();

    const submit = () => {
        history.push('/feedback')
    }

    const chooseChange = () => {
        history.push('/choose-change')
    }

    return(
        <Spring
        config={{delay: 600, duration: 1350}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
            {props=>(
                <div style={props}>
        <div className="dashboardValues">
            <Spring
        config={{delay: 3000, duration: 750}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
            {props=>(
                <div style={props}>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", marginBottom: "4%", marginTop: "2%"}}>
                <h3 style={{color: "white", marginRight: "2%"}}>Select at least three values</h3>
                <Button onClick={chooseChange} style={{color: "black", backgroundColor: "white"}} color="primary">Create More Values</Button>
                <Button onClick={submit} style={{color: "black", backgroundColor: "white"}} color="primary">Done</Button>
                
            </div>
               <Values />
               </div>
               )}
               </Spring>
            </div>
            </div>
            )}
            </Spring>
            
    )
}

export default InitialAddValuesPage;