import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
const UpdateMovie = () => {
  const { push } = useHistory();

  const { id } = useParams();

  const [editGoal, setEditGoal] = useState({
    title: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333`, editGoal)
      .then(() => push(`/dashboard/${editGoal.id}`));
  };

  const handleChange = (e) => {
    e.persist();
    let value = e.target.value;
    setEditGoal({
      ...editGoal,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:33333/dashboard/${id}`).then((res) => {
      setEditGoal(res.data);
    });
  }, [id]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">Goal: </InputGroupAddon>
          <Input
            type="text"
            name="title"
            onChange={handleChange}
            value={editGoal.title}
          />
        </InputGroup>

        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">Date </InputGroupAddon>
          <Input
            type="date"
            name="date"
            onChange={handleChange}
            value={editGoal.date}
          />
        </InputGroup>

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UpdateMovie;
