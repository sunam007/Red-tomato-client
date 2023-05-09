import React from "react";
import "./ContactForm.css";

function ContactForm({ placeholder }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="flex flex-col space-y-4 my-8 items-center">
      <input type="text" placeholder="Full Name" className="text-input" />
      <input type="text" placeholder="Email Address" className="text-input" />
      <input type="Subject" placeholder="Subject" className="text-input" />
      <textarea
        placeholder="Message"
        class="textarea textarea-bordered rounded-none textarea-md w-full max-w-xs"
      ></textarea>

      {/* Form submit button with event handler */}
      <input
        onClick={handleFormSubmit}
        type="submit"
        value="Submit"
        className="btn btn-wide border-none rounded-none  text-gray-500 bg-yellow-100  hover:bg-emerald-500"
      />
    </form>
  );
}

export default ContactForm;
