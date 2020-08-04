import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
// import goalsApi from "../forms/goalsApi";
// import isOverdue from "../forms/isOverdue";
// import Header from "../forms/Header";
// import List from "../forms/List";
import { Spring } from "react-spring/renderprops";
import { logoutNavName } from "../../state/actions";
import { Jumbotron, Button, Container } from "reactstrap";
import Goals from "../goals/Goals";
import GoalForm from "../goals/GoalForm";

const Dashboard = (props) => {
  const history = useHistory();

  const addValues = () => {
    history.push("/dashboard/values");
  };
  const submit = () => {
    props.logoutNavName();
    history.push("/");
  };

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

  return (
    <div className="dashboard">
      <Button onClick={submit} variant="outlined">
        User Logs Out
      </Button>
      <Button onClick={addValues} variant="outlined">
        User Chooses Yes to Add Values
      </Button>
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
        <div className="container">
          <h1>Current Goals</h1>
          <Goals />
        </div>
      </div>
      <div className="container">
        <h1>Add New Goals</h1>
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
        )} */}
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
    </div>
            
  );</Spring>
};



export default connect(null, { logoutNavName })(Dashboard);
