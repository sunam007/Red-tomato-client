const Order = ({ order, handleDeleteItemFromCart }) => {
  const { _id, mealTitle, mealThumb, mealPrice, mealQuantity } = order;

  // console.log(
  //   mealTitle,
  //   "quantity: ",
  //   mealQuantity,
  //   "*",
  //   mealPrice,
  //   mealQuantity * mealPrice
  // );

  // const handleDeleteItemFromCart = async (_id) => {
  //   const proceedDeletion = window.confirm("Do youwant to delete this item ?");

  //   try {
  //     if (!proceedDeletion) return;

  //     if (proceedDeletion) {
  //       const response = await axios.delete(
  //         `http://localhost:5000/api/orders/${_id}`
  //       );

  //       console.log(response);

  //       response.status === 204 && toast.success("Item has been deleted");
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <div className="card card-side bg-white text-black h-44 w-full md:w-[512px] rounded-md shadow-md">
      <figure>
        <img
          src={mealThumb}
          className="w-40 md:w-48 h-full"
          alt="ordered food"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{mealTitle}</h2>
        <div className="card-actions justify-between items-baseline">
          <p>$ {mealPrice}</p>
          <div className="inline-flex justify-between items-center space-x-2">
            <input
              type="text"
              value={mealQuantity}
              readOnly
              className="w-8 text-center bg-transparent border"
            />

            <p>Quantity</p>
          </div>
        </div>

        <div className="card-actions justify-between items-baseline">
          <p>Total: ${mealPrice * mealQuantity}</p>

          <label>
            <button
              onClick={() => handleDeleteItemFromCart(_id)}
              className="btn btn-ghost"
            >
              <i className="fa-solid fa-xmark"></i> {/* delete/ cross button */}
            </button>{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Order;
