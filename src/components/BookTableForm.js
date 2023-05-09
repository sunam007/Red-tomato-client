import React from "react";

function BookTableForm(props) {
  return (
    <form className="md:w-9/12 sm:grid sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6 mx-auto">
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered rounded-none bg-white text-gray-900 input-md  "
      />
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-md w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-md w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-md w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-md w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-md w-full max-w-xs"
      />
    </form>
  );
}

export default BookTableForm;
