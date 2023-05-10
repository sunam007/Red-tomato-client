import React from "react";
import axios from "axios";

import "./ContactForm.css";

function ContactForm({ placeholder }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const userInfoAndMessage = {
      fullName,
      email,
      subject,
      message,
    };
    console.log(userInfoAndMessage);

    axios
      .post("api/userInfoAndMessage", {
        userInfoAndMessage,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form
      className="flex flex-col space-y-4 my-8 items-center"
      onSubmit={handleFormSubmit}
    >
      <input
        name="fullName"
        type="text"
        placeholder="Full Name"
        className="text-input"
      />
      <input
        name="email"
        type="text"
        placeholder="Email Address"
        className="text-input"
      />
      <input
        name="subject"
        type="Subject"
        placeholder="Subject"
        className="text-input"
      />
      <textarea
        name="message"
        placeholder="Message"
        class="textarea textarea-bordered rounded-none textarea-md w-full max-w-xs"
      ></textarea>

      {/* Form submit button with event handler */}
      <input
        type="submit"
        value="Submit"
        className="btn btn-wide border-none rounded-none  text-gray-500 bg-yellow-100  hover:bg-emerald-500"
      />
    </form>
  );
}

export default ContactForm;
