import React from "react";

const BusinessSummary = () => {
  return (
    <div className="flex justify-center items-center flex-col py-20  px-2">
      <div className="title">
        <h2 className="section-title text-center text-2xl md:text-4xl lg:text-6xl ">
          Business <span className="text-green-700">Summary</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12">
        <span>somethings</span>
        <span>somethings</span>
        <span>somethings</span>
        <span>somethings</span>
      </div>
    </div>
  );
};

export default BusinessSummary;
