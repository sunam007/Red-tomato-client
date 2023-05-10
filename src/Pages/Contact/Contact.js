import React from "react";
import Banner from "../../components/Banner";
import ContactForm from "../../components/ContactForm";
import RestaurantInfo from "../../components/RestaurantInfo";

const Contact = () => {
  return (
    <div className="bg-white">
      <Banner
        title="CONTACT"
        image="https://i.ibb.co/ygJzNNP/background5.jpg"
      />

      <div className="flex flex-col-reverse md:flex-row justify-center md:items-baseline md:space-x-32 lg:space-x-64">
        <RestaurantInfo />
        <ContactForm /> {/*Form eventhandler is on this component */}
      </div>
    </div>
  );
};

export default Contact;
