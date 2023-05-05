import React from "react";

function TableFooter(props) {
  return (
    <tfoot>
      <tr>
        <th className="bg-gray-100"></th>
        {/* input group */}
        <th className="bg-gray-100">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Coupon"
                className="input input-bordered input-sm"
              />
              <button className="btn btn-sm">Apply</button>
            </div>
          </div>
        </th>
        <th className="bg-gray-100"></th>
        <th className="bg-gray-100"></th>
        {/* button group */}
        <th className="bg-gray-100 space-x-1">
          <button className="btn btn-sm btn-warning">Update Cart</button>
          <button className="btn btn-sm btn-success">Checkout</button>
        </th>
        <th className="bg-gray-100"></th>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
