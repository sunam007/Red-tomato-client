import React from "react";

import background from "../../assets/background4grayscale.jpg";
import BookTableForm from "../../components/BookTableForm";
import HeaderText from "../../components/HeaderText";

function BookTable() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="bg-no-repeat bg-cover bg-bottom"
    >
      <div className="space-y-12 py-12">
        <HeaderText title="Book a Table" textColor="text-gray-100" />
        <BookTableForm />
      </div>
    </div>
  );
}

// h-96 sm:h-32 md:h-96 lg:h-64 xl:h-96
export default BookTable;
