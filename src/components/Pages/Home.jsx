import React from "react";
import Header from "../Utilities/Header";
import CardLocation from "../Utilities/CardLocation";

function Home() {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center justify-center">
        <Header title="Arrival Location" />
        <CardLocation title="International Ferry Terminal, Batam Center" />
      </div>
    </React.Fragment>
  );
}

export default Home;
