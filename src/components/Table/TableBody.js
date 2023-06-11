function TableBody({ order }) {
  const { mealId, mealTitle, mealThumb, mealPrice, mealQuantity } = order;
  const handleDeleteItemFromCart = () => {};
  return (
    <tbody>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDeleteItemFromCart(mealId)}
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
                <img src={mealThumb} alt="Avatar" />
              </div>
            </div>
            <div className="font-bold">{mealTitle}</div>
          </div>
        </th>
        <th>${mealPrice}</th>
        <th>{mealQuantity}</th>
        <th>${mealPrice * mealQuantity}</th>
      </tr>
    </tbody>
  );
}

export default TableBody;
