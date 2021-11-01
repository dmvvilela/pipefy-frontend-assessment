import React from "react";
import { Pipes_organizations_pipes } from "../graphql/__generated__/Pipes";

const TailwindColor = require("@videsk/tailwind-random-color");

export interface PipeDetailsProps {
  pipe: Pipes_organizations_pipes;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const PipeDetails = ({ pipe, onClick }: PipeDetailsProps) => {
  return (
    <div
      className={`p-2 rounded-xl shadow-sm hover:shadow-md flex flex-col w-36 cursor-pointer ${new TailwindColor().pick()} bg-opacity-10 pipe`}
      onClick={onClick}
    >
      <img src="pipe.png" className="self-center w-12 m-4" alt="pipe icon" />
      <h3 className="flex-1 text-sm font-bold text-center">{pipe?.name}</h3>
      <h3 className="flex-1 p-1 text-xs font-light text-center opacity-40">
        {pipe?.cards_count} {pipe?.cards_count === 1 ? "card" : "cards"}
      </h3>
    </div>
  );
};

export default PipeDetails;
