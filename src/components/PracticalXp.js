import React from "react";

function PracticalXp() {
  return (
    <div className="pl-4 pt-4  w-[94%] ml-5 mt-10 pb-14 bg-white rounded-lg ">
      <div className="text-blue-700 font-bold text-xl mb-4">Experiance</div>
      <div className="space-y-4">
        <div className="font-semibold">
          <span className="">Company Name</span>
          <span className="pl-[85px]">Position Title</span>
          <span className="pl-[120px]">Task</span>
          <span className="pl-[235px]">Date</span>
        </div>
        <div className="flex space-x-10">
          <div>ShiTsega </div> <div className="pl-24">Software Developer </div>{" "}
          <div className="pl-10">Digitizing Managment Systems</div>{" "}
          <div className="pl-2">June 2019 - september 2021</div>{" "}
        </div>
        <div className="flex space-x-10 ">
          <div>Hawassa University </div>{" "}
          <div className="pl-5">Software Developer </div>{" "}
          <div className="pl-11">Creating a library mgmt system</div>{" "}
          <div className="pl-1">2018 - 2019</div>{" "}
        </div>
      </div>
    </div>
  );
}

export default PracticalXp;
