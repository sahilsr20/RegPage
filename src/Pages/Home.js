import React from "react";
import Nav from "./../Components/Home/Nav";
import UpComingEvents from "./../Components/Home/UpComingEvents";

export default function Home() {
  return (
    <div>
      <Nav />
      <UpComingEvents
        eventName="Upcoming Events"
        btnName0="Register Now 🚀"
        btnName1="Register Now 🚀"
      />
    </div>
  );
}
