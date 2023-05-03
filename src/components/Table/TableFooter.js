import React from "react";

function TableFooter(props) {
  return (
    <tfoot>
      <tr>
        <th className="bg-gray-100"></th>
        {/* input group */}
        <th className="bg-gray-100">
          <div class="form-control">
            <div class="input-group">
              <input
                type="text"
                placeholder="Coupon"
                class="input input-bordered input-sm"
              />
              <button class="btn btn-sm">Apply</button>
            </div>
          </div>
        </th>
        <th className="bg-gray-100"></th>
        <th className="bg-gray-100"></th>
        {/* button group */}
        <th className="bg-gray-100 space-x-1">
          <button class="btn btn-sm btn-warning">Update Cart</button>
          <button class="btn btn-sm btn-success">Checkout</button>
        </th>
        <th className="bg-gray-100"></th>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
