import React from "react";

const PipeList = () => {
  return (
    <section>
      <div className="grid place-items-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <h1 className="col-span-2 text-4xl font-extrabold md:col-span-4">
            Your Pipes
          </h1>
          <h2 className="col-span-2 pb-4 md:col-span-4">
            Here are all your processes
          </h2>
          {/* TODO: w-auto */}
          <div className="w-32 bg-blue-500 pipe"></div>
          <div className="w-32 bg-pink-500 pipe"></div>
          <div className="w-32 bg-blue-500 pipe"></div>
          <div className="w-32 bg-pink-500 pipe"></div>
          <div className="w-32 bg-blue-500 pipe"></div>
          <div className="w-32 bg-pink-500 pipe"></div>
        </div>
      </div>
    </section>
  );
};

export default PipeList;
