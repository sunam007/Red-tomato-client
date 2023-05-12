import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";

import "./BookTableForm.css";

function BookTableForm() {
  const [date, setDate] = useState(null);

  const handleBookTable = (event) => {
    event.preventDefault();

    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const guests = form.guests.value;
    const date = form.date.value;
    const time = form.time.value;

    const bookingInfo = {
      fullName,
      email,
      phone,
      guests,
      date,
      time,
    };
    console.log(bookingInfo);
    // axios
    //   .post("http://localhost:5000/bookings", { bookingInfo })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    form.reset();
  };
  return (
    <form>
      <div className="w-10/12 md:w-9/12 sm:grid sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6 mx-auto">
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          className="w-full input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
        <input
          name="phone"
          type="number"
          placeholder="Your Phone"
          className="w-full input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
        <input
          name="guests"
          type="number"
          placeholder="Number of Guests"
          className="w-full input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
        <DatePicker
          showIcon
          placeholderText="Date"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat={"dd/MM/yyyy"} //  MM in capital letter
          minDate={new Date()} // todays date is the minimum date
          maxDate={addDays(new Date(), 15)}
          isClearable
          className="w-full input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />

        <DatePicker
          showIcon
          placeholderText="Date"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat={"dd/MM/yyyy"} //  MM in capital letter
          minDate={new Date()} // todays date is the minimum date
          maxDate={addDays(new Date(), 15)}
          isClearable
          className="w-full input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
        <div></div>

        <input
          type="submit"
          value="Submit"
          className="w-full btn  border-none rounded-none  text-gray-500 bg-yellow-100  hover:bg-emerald-500"
        />
      </div>
    </form>
  );
}

export default BookTableForm;
