import React from "react";
import Header from "../Utilities/Header";
import CardLocation from "../Utilities/CardLocation";
import Button from "../Utilities/Button";

function Home() {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center justify-center">
        <Header title="Arrival Location" />
        <CardLocation title="International Ferry Terminal, Batam Center" />
        <div className="bg-black/40 h-[100px] w-[250px] flex flex-col text-white gap-2 justify-center items-center rounded-xl">
          <h3>Welcome To Batam</h3>
          <Button link="#" title="See More" class="bg-white text-black hover:bg-black hover:text-white" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
