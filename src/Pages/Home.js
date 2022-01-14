import React from "react";
import Nav from "./../Components/Home/Nav";
import Events from "../Components/Home/Events";
// import FormTwo from "./FormTwo";

export default function Home() {
  return (
    <div>
      <Nav />
      <Events
        eventName="Upcoming Events"
        btnName0="Register Now 🚀"
        btnName1="Register Now 🚀"
      />
      <Events
        eventName="Past Events"
        btnName0="Comming Soon 🚀"
        btnName1="Comming Soon 🚀"
      />
      <Events
        eventName="Comming Soon"
        btnName0="Comming Soon 🚀"
        btnName1="Comming Soon 🚀"
      />
    </div>
  );
}
