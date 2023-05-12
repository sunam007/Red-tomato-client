import axios from "axios";
import React from "react";

function BookTableForm() {
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

    axios
      .post("http://localhost:5000/bookings", { bookingInfo })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    form.reset();
  };
  return (
    <form>
      <div className="w-10/12 md:w-9/12 sm:grid sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6 mx-auto">
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          className="input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
        <input
          name="phone"
          type="number"
          placeholder="Your Phone"
          className="input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
        <input
          name="guests"
          type="number"
          placeholder="Number of Guests"
          className="input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
        <input
          name="date"
          type="date"
          placeholder="Date"
          className="input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
        <input
          name="time"
          type="time"
          placeholder="Time"
          className="input input-bordered rounded-none input-md  bg-white text-base font-medium text-gray-950"
        />
      </div>

      <button className="btn btn-wide border-none rounded-none text-gray-500 bg-yellow-100  hover:bg-emerald-500 inline-flex items-center justify-center">
        Book
      </button>
    </form>
  );
}

export default BookTableForm;
