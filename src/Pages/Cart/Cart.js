import React from "react";

// user created components go under the comment
import Banner from "../../components/Banner";
import Table from "../../components/Table/Table";

const Cart = () => {
  return (
    <div>
      <Banner title="Cart" image="https://i.ibb.co/ygJzNNP/background5.jpg" />
      <div className="flex justify-center items-center my-8">
        <Table />
      </div>
    </div>
  );
};

export default Cart;
