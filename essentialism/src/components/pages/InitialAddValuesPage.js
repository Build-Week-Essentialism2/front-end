import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Values from '../lists/Values'


const InitialAddValuesPage = () => {

    const history = useHistory();

    const submit = () => {
        history.push('/dashboard')
    }

    return(
        <div className="dashboardValues">
            <div style={{display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", marginBottom: "4%", marginTop: "2%"}}>
        <h3 style={{color: "white", marginRight: "2%"}}>Select at least three values</h3>
      <Button style={{color: "black", backgroundColor: "white"}} color="primary">Done</Button>
      </div>
            <Values />
        </div>
    )
}

export default InitialAddValuesPage;