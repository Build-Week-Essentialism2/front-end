import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function List({ items, completeItem }) {
  // const [itemList, setItemList] = useState([]);
  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // const fetchItems = () => {
  //   axiosWithAuth()
  //     .get("")
  //     .then((res) => {
  //       setItemList(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  if (items.length === 0) {
    return (
      <div className="alert alert-success" role="alert">
        Congratulations your goal list is empty!
      </div>
    );
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          completeItem={() => completeItem(item.id)}
        />
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  completeItem: PropTypes.func.isRequired,
};

export default List;
