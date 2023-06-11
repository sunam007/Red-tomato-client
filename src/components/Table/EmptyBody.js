import React from "react";
import { Link } from "react-router-dom";

function EmptyBody(props) {
  return (
    <div className="text-center">
      <h1>
        Tour cart is empty. Go back to <Link to="/menu">MENU</Link> to order
        something
      </h1>
    </div>
  );
}

export default EmptyBody;
