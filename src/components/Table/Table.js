import React from "react";
import TableBody from "./TableBody";

import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

function Table(props) {
  return (
    <table className="table w-9/12">
      <TableHeader />
      <TableBody />
      <TableFooter />
    </table>
    // <div className="overflow-x-auto">

    // </div>
  );
}

export default Table;
