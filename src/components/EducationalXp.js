import React from "react";

function EducationalXp() {
  return (
    <div className="pl-4 pt-4  w-[94%] ml-5 mt-10 pb-14 bg-white rounded-lg ">
      <div className="text-blue-700 font-bold text-xl mb-4">Experiance</div>
      <div className="space-y-4">
        <div className="font-semibold">
          <span className="">school name</span>
          <span className="pl-[85px]">title of study</span>
          <span className="pl-[120px]">date of study</span>
          <span className="pl-[30px]">Country</span>
        </div>
        <div className="flex space-x-10">
          <div>Hawassa University</div> <div>Information Technology </div>{" "}
          <div>2016 - 2020</div> <div>Ethiopia</div>{" "}
        </div>
        <div className="flex space-x-10">
          <div>Riftvally University</div>{" "}
          <div className="pl-1">Business Managment </div>{" "}
          <div className="pl-5">2016 - 2020</div> <div>Ethiopia</div>{" "}
        </div>
      </div>
    </div>
  );
}

export default EducationalXp;
