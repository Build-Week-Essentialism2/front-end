import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { toggleValue, deleteValue, editValue } from "../../state/actions/";

// import { axiosWithAuth } from '../utils/axiosWithAuth'

const useStyles = makeStyles({
  root: {
    minWidth: 225,
    maxWidth: 245,
  },
});

const Values = (props) => {
  const classes = useStyles();
  console.log("Values imported action", toggleValue(1));

  // useEffect(() => {
  //     axiosWithAuth()
  //         .get('')
  //         .then(res => setValue(res.data))
  //         .catch(err => console.log(err))
  // }, [])

  const history = useHistory();
  // let params = useParams();
  // const editId = params.id;

  const handleDelete = (id) => {
    console.log(id);
    props.deleteValue(id);
  };

  const handleEdit = (id) => {
    console.log("handleEdit log", id);
    props.editValue(id);
    history.push(`/edit-values/${id}`)
    
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          paddingTop: "2%",
        }}
      >
        <div
          style={{
            marginTop: "3%",
            paddingBottom: "2%",
            paddingRight: "2%",
            paddingLeft: "2%",
            width: "50%",
          }}
        >
          <h3
            style={{
              color: "white",
              paddingBottom: "5%",
              paddingTop: "2%",
              textAlign: "center",
            }}
          >
            Your Values
          </h3>
          <Grid
            container
            spacing={7}
            display="flex"
            direction="column-reverse"
            justify="space-around"
            align="center"
          >
            {props.data.map((item) => {
              console.log("values item map", item);
              return (
                item.isSelected && (
                  <Grid item xs key={item.id}>
                    <Card
                      className={classes.root}
                      style={{ backgroundColor: "black" }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={item.value}
                          height="200"
                          image={item.img}
                          title={item.value}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            style={{ color: "white" }}
                          >
                            {item.value}
                          </Typography>
                          <Typography
                            style={{ color: "lightgray" }}
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                      
                        {item.isSelected ? (
                          <Button
                            style={{ color: "white" }}
                            onClick={() => props.toggleValue(item.id)}
                            size="small"
                            color="primary"
                          >
                            Remove
                          </Button>
                        ) : (
                          <Button size="small" color="primary">
                            Add
                          </Button>
                        )}
                        <Button style={{ color: "white" }} onClick={(() => handleEdit(item.id))}>Edit</Button>
                        <Button style={{ color: "white" }} onClick={(() => handleDelete(item.id))}>Delete</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              );
            })}
          </Grid>
        </div>
        <div
          style={{
            marginTop: "3%",
            paddingBottom: "2%",
            paddingRight: "2%",
            paddingLeft: "2%",
            width: "50%",
            borderRight: "white 2px solid",
          }}
        >
          <h3
            style={{
              color: "white",
              paddingBottom: "5%",
              paddingTop: "2%",
              textAlign: "center",
            }}
          >
            Value List
          </h3>
          <Grid
            container
            spacing={7}
            display="flex"
            direction="column"
            justify="space-around"
            align="center"
          >
            {props.data.map((item) => {
              return (
                !item.isSelected && (
                  <Grid item xs key={item.id}>
                    <Card
                      className={classes.root}
                      style={{ backgroundColor: "black" }}
                    >
                      <CardActionArea>
                        <CardMedia
                          style={{ filter: "grayscale(1)" }}
                          component="img"
                          alt={item.value}
                          height="200"
                          image={item.img}
                          title={item.value}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            style={{ color: "white" }}
                          >
                            {item.value}
                          </Typography>
                          <Typography
                            style={{ color: "lightgray" }}
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        {item.isSelected ? (
                          <Button size="small" color="primary">
                            Remove
                          </Button>
                          
                        ) : (
                          <Button
                            onClick={() => props.toggleValue(item.id)}
                            size="small"
                            color="primary"
                            style={{ color: "white" }}
                          >
                            Add
                          </Button>
                        )}
                       <Button style={{ color: "white" }} onClick={(() => handleEdit(item.id))}>Edit</Button>
                        <Button style={{ color: "white" }} onClick={(() => handleDelete(item.id))}>Delete</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("Values State", state.essentialismReducer.values);
  return {
    data: state.essentialismReducer.values,
  };
};

export default connect(mapStateToProps, { toggleValue, deleteValue, editValue })(Values);
