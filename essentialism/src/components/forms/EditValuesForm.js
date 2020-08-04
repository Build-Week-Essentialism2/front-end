import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
// import jwt from 'jsonwebtoken';
import { useHistory, useParams } from "react-router-dom";
import * as yup from "yup";
// import { updateNavName } from '../../state/actions'
import { submitEditValue } from "../../state/actions";
// import axios from 'axios';

const formSchema = yup.object().shape({
  value: yup.string().required("Title is a required field"),
  description: yup.string().required("A description is a required field"),
  date: yup.string().required("A goal date is a required field"),
  img: yup.string().required("An Image HTML Link is required"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 300,
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const EditValuesForm = (props) => {
  let history = useHistory();
  let params = useParams();
  const paramsid = params.id;
  const classes = useStyles();

  const [formState, setFormState] = useState({
    value: props.editValues.value,
    description: props.editValues.description,
    img: props.editValues.img,
    id: Date.now(),
    isSelected: false,
  });

  console.log("Logging updated formState in EditValuesForm", formState);

  const [errorState, setErrorState] = useState({
    value: "",
    description: "",
    img: "",
  });

  const inputChange = (e) => {
    e.persist();
    validate(e);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log("errors", err.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const submitButton = () => {
    return history.goBack();
  };

  const cancelButton = (e) => {
    return history.goBack();
  };

  console.log("ParamsID in EditValuesForm", paramsid);

  const submitForm = (e) => {
    e.preventDefault();
    props.submitEditValue(props.editValues.id, formState);
    console.log("submitEditValues action Submit");
    setFormState({ value: "", description: "", img: "" });
    submitButton();
    // axios
    //     .post("https://vr-direct1.herokuapp.com/api/backer/login", formState)
    //     .then(response => {
    //       const decoded = jwt.decode(response.data.token);
    //       console.log("Axios response from Backer Login submit", response, decoded);
    //       console.log("Axios response from Backer Login userID", decoded.userId);
    //       localStorage.setItem("token", response.data.token);
    //       setTimeout(()=>{history.push(`/backer-dashboard/${decoded.userId}`)},1000);
    //       {props.BackerDisplayName.BackerDisplayName(response, decoded)};
    //       ;})
    //     .catch(err => {console.log("Axios error", err)});
    // cancelButton()
  };

  return (
    <div style={{ paddingTop: "4%" }}>
      <Card
        className={classes.root}
        style={{ opacity: "0.9", marginLeft: "10%" }}
      >
        <CardContent>
          <Typography style={{ marginLeft: "4%" }} variant="h5" component="h2">
            Edit Your Value
          </Typography>
          <br />
          <form
            onSubmit={submitForm}
            className={classes.form}
            autoComplete="off"
          >
            <FormControl required>
              <TextField
                autoFocus
                id="value"
                name="value"
                label="Value"
                value={formState.value}
                onChange={inputChange}
                variant="filled"
                isRequired="true"
              />
              <Typography style={{ color: "red", fontSize: "10px" }}>
                {errorState.value}
              </Typography>
            </FormControl>
            <FormControl required>
              <TextField
                id="description"
                name="description"
                label="Description"
                value={formState.description}
                onChange={inputChange}
                variant="filled"
                type="text"
                required={true}
                isRequired="true"
              />
              <Typography style={{ color: "red", fontSize: "10px" }}>
                {errorState.description}
              </Typography>
            </FormControl>
            <FormControl required>
              <TextField
                id="img"
                name="img"
                label="Image (HTML LINK)"
                value={formState.img}
                onChange={inputChange}
                variant="filled"
                type="text"
                required={true}
                isRequired="true"
              />
              <Typography style={{ color: "red", fontSize: "10px" }}>
                {errorState.img}
              </Typography>
            </FormControl>
            <CardActions>
              <Button type="submit" size="small">
                Submit
              </Button>
              <Button onClick={cancelButton} size="small">
                Cancel
              </Button>
              <a
                style={{ marginBottom: "2%", marginLeft: "6%", font: "1.8rem" }}
                href="https://www.pexels.com"
                target="_blank"
              >
                Pexels
              </a>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("Edit Values State", state.essentialismReducer.editValues);

  return {
    editValues: state.essentialismReducer.editValues,
  };
};

export default connect(mapStateToProps, { submitEditValue })(EditValuesForm);
