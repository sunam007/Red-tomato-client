import React from "react";
import SubHeaderText from "./SubHeaderText";

function RestaurantInfo(props) {
  return (
    <div className="hidden md:block my-8 space-y-4">
      <div className="space-y-2 py-2">
        <SubHeaderText title="ADDRESS" textColor="text-gray-400" />
        <div>
          <p>28th Seven Avenue , Gulshan , Dhaka</p>
          <p>Phone: +880 123 456</p>
          <p>support@redtomato.com</p>
        </div>
      </div>

      <div className="space-y-2 py-2">
        {/* <h1>WORKING HOURS</h1> */}
        <SubHeaderText
          title="WORKING HOURS"
          textColor="text-gray-400"
        ></SubHeaderText>
        <div>
          <p>10 AM to 11 PM on WORK DAYS </p>
          <p>11 AM to 11.30 PM on WEEKENDS </p>
        </div>
      </div>

      {/* <div>
        <h1>FOLLOW US</h1>
      </div> */}
    </div>
  );
}

export default RestaurantInfo;
