import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Goals from "../goals/Goals";
import GoalForm from "../goals/GoalForm";
import { Jumbotron, Container } from "reactstrap";
import { logoutNavName } from "../../state/actions";

// import goalsApi from "../forms/goalsApi";
// import isOverdue from "../forms/isOverdue";
// import Header from "../forms/Header";
// import List from "../forms/List";
const DashboardPage = (props) => {
  //   const history = useHistory();

  //   const addValues = () => {
  //     history.push("/dashboard/values");
  //   };
  //   const submit = () => {
  //     history.push("/");
  //   };

  // const defaultFilter = { overdueOnly: false, includeComplete: false };

  // const [items, setItems] = React.useState([]);
  // const [filter, setFilter] = React.useState(defaultFilter);
  // const [loading, setLoading] = React.useState(true);

  // const loadItems = async () => {
  //   setLoading(true);
  //   const todoItems = await goalsApi.get();
  //   setItems(todoItems);
  //   setLoading(false);
  // };

  // React.useEffect(() => {
  //   loadItems();
  // }, []);

  // const complete = async (id) => {
  //   const updatedItems = await goalsApi.complete(id);
  //   setItems(updatedItems);
  // };

  // const add = async (item) => {
  //   const updatedItems = await goalsApi.add(item);
  //   setItems(updatedItems);
  // };

  // const filteredItems = items.filter(
  //   (item) =>
  //     (filter.includeComplete || !item.complete) &&
  //     (!filter.overdueOnly || isOverdue(item))
  // );

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
                <Button color="white" style={{ color: "white" }}>
                  {item.value}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="container text-center">
          <h1 style={{ color: "lightgray" }}>Current Goals</h1>
          <Goals />
        </div>
      </div>
      <div className="container text-center" style={{ marginBottom: "8%" }}>
        <h1 style={{ color: "lightgray" }}>Add New Goals</h1>
        <GoalForm />
      </div>
      {/* <div className="fluid-container app-container">
        <Header addItem={add} filter={filter} setFilter={setFilter} />
        {!loading && (
          <div className="list">
            <List items={filteredItems} completeItem={complete} />
          </div>
        )}
        {loading && (
          <div className="alert alert-info" role="alert">
            Loading please wait...
          </div>
        )}
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.essentialismReducer.values,
  };
};

export default connect(mapStateToProps, { logoutNavName })(DashboardPage);
