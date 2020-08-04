import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Values from '../lists/Values';
import { Spring } from 'react-spring/renderprops';


const DashboardValues = () => {

    const history = useHistory();

    const submit = () => {
        history.push('/dashboard')
    }

    const chooseChange = () => {
        history.push('/choose-change')
    }

    return(
        <Spring
        config={{delay: 50, duration: 750}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
            {props=>(
                <div style={props}>
                    <div style={{display: "flex", flexDirection: "row-reverse", marginRight: "4%"}}>
                    <Button onClick={chooseChange} style={{color: "black", backgroundColor: "white"}} color="primary">Create More Values</Button>
                    </div>
        <div className="dashboardValues">
            <Spring
        config={{delay: 800, duration: 775}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
            {props=>(
                <div style={props}>
            <div style={{display: "flex", justifyContent: "center"}}>
            <Button style={{color: "black", backgroundColor: "white", marginTop: "2%"}} onClick={submit} variant='outlined'>Done</Button>
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

export default DashboardValues;