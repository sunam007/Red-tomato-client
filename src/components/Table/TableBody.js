import axios from "axios";
import React from "react";
import { useContext } from "react";
import { API_CART_ORDERS } from "../../api/endpoints";
import FoodContext from "../../context/FoodContext";

function TableBody({
  title = "Zemlak, Daniel and Leannon",
  price = 5,
  quantity = 1,
  image = "https://picsum.photos/200",
  objectId,
}) {
  const { setItemsInTheCart } = useContext(FoodContext);
  // console.log(objectId);
  const handleDeleteItemFromCart = () => {
    //using "objectId" to delete a particular item with the exact objectId
    axios
      .delete(`${API_CART_ORDERS}/${objectId}`)
      .then((res) => {
        axios
          .get(`${API_CART_ORDERS}`)
          .then((res) => setItemsInTheCart(res.data));

        console.log(`Deleted item with ID ${objectId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <tbody>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDeleteItemFromCart(objectId)}
              className="btn btn-ghost"
            >
              <i className="fa-solid fa-xmark"></i> {/* delete/ cross button */}
            </button>
          </label>
        </th>
        <th>
          <div className="flex items-center space-x-8">
            <div className="avatar">
              <div className=" w-16  rounded">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className="font-bold">{title}</div>
          </div>
        </th>
        <th>${price}</th>
        <th>{quantity}</th>
        <th>${price * quantity}</th>
      </tr>
    </tbody>
  );
}

export default TableBody;
