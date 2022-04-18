import React from "react";
let Abel = require("../Assets/Images/Abel.JPG");
function General() {
  return (
    <div className="pl-4 pt-4 flex w-full space-x-14">
      <div className="w-[25%]">
        <img src={Abel} alt="" />
      </div>
      <div className="flex w-[65%] bg-white p-4 rounded-lg   ">
        <div className="space-y-5">
          <div>
            <h1 className="font-bold text-2xl">Abel Kibebe Negash</h1>
            <span className="text-blue-900 font-bold">Front End Developer</span>
          </div>
          <div className="text- font-semibold">
            <p>
              Hello, My name is Abel, i am from Addis Ababa,Ethiopia <br /> i am
              a web UI developer, <br /> For more information
              abelkibebe5@gmail.com <br />
              <span className="animate-pulse"> +251924029960</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default General;
