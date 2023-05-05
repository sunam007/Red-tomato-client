import React from "react";

function TableBody({
  title = "Zemlak, Daniel and Leannon",
  price = 9.99,
  quantity = 1,
  total = 9.99,
  image = "https://picsum.photos/200",
}) {
  return (
    <tbody>
      <tr>
        <th>
          <label>
            <button className="btn btn-ghost">
              <i className="fa-solid fa-xmark"></i>
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
        <th>{price}</th>
        <th>{quantity}</th>
        <th>{total}</th>
      </tr>
    </tbody>
  );
}

export default TableBody;
