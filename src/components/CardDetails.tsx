import React from "react";
import { Cards_cards_edges_node } from "../graphql/__generated__/Cards";

export interface CardDetailsProps {
  card: Cards_cards_edges_node;
}

const CardDetails = ({ card }: CardDetailsProps) => {
  return (
    <div key={card!.id} className="p-2 my-2 rounded shadow-md">
      <span style={{ display: "inline-block" }}>
        {card.done && (
          <img src="done.png" className="w-4 mr-2" alt="done icon" />
        )}
      </span>
      {card.title}
      <span style={{ display: "inline-block" }}>
        {card.labels?.map((label) => (
          <span
            key={label!.id}
            className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
          >
            {label!.name}
          </span>
        ))}
      </span>
    </div>
  );
};

export default CardDetails;
