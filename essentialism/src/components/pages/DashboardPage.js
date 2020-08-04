import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Goals from "../goals/Goals";
import GoalForm from "../goals/GoalForm";
import { Jumbotron, Container } from "reactstrap";
import { logoutNavName } from "../../state/actions";

const DashboardPage = (props) => {
  const history = useHistory();

  const addValues = () => {
    history.push("/dashboard/values");
  };
  const submit = () => {
    props.logoutNavName();
    history.push("/");
  };

  return (
    <div className="dashboard">
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button
          style={{ color: "white", backgroundColor: "black" }}
          onClick={submit}
          variant="outlined"
        >
          Log Out
        </Button>
        <Button
          style={{ color: "white", backgroundColor: "black" }}
          onClick={addValues}
          variant="outlined"
        >
          Change Values
        </Button>
        <Button
          style={{ color: "white", backgroundColor: "black" }}
          variant="outlined"
        >
          Help
        </Button>
      </div>
      <div>
        <Jumbotron fluid style={{ padding: "5px" }}>
          <Container className="container" fluid>
            <h1 className="display-3">Ready for your new challenges?</h1>
            <p className="lead">
              In order to become an essentialist you must create your goals
              based on the values you selected.
            </p>
          </Container>
        </Jumbotron>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "20%",
        }}
      >
        <h1 style={{ color: "lightgray" }}>Your Current Values:</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {props.data.map((item) => {
            return (
              item.isSelected && (
                <Button color="white" style={{ color: "white" }}>
                  {item.value}
                </Button>
              )
            );
          })}
        </div>
      </div>
      <div className="container text-center">
        <h1 style={{ color: "lightgray" }}>Current Goals</h1>
        <Goals />
      </div>

      <div className="container text-center" style={{ marginBottom: "8%" }}>
        <h1 style={{ color: "lightgray" }}>Add New Goals</h1>
        <GoalForm />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.essentialismReducer.values,
  };
};

export default connect(mapStateToProps, { logoutNavName })(DashboardPage);
