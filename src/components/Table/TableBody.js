import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function TableBody({ order }) {
  const { _id, mealId, mealTitle, mealThumb, mealPrice, mealQuantity } = order;

  const handleDeleteItemFromCart = async (_id) => {
    const proceedDeletion = window.confirm("Do youwant to delete this item ?");

    try {
      if (!proceedDeletion) return;

      if (proceedDeletion) {
        const response = await axios.delete(
          `http://localhost:5000/api/orders/${_id}`
        );

        response.status === 204 && toast.success("Item has been deleted");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <tbody>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDeleteItemFromCart(_id)}
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
