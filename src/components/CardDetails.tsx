import React from "react";
import { useQuery } from "@apollo/client";
import { Cards } from "../graphql/__generated__/Cards";
import { loader } from "graphql.macro";

const cardsQuery = loader("../graphql/cards.graphql");

export interface CardDetailsProps {
  pipeId: string;
  pipeName: string;
  closeCard: () => void;
}

const CardDetails = ({ pipeId, pipeName, closeCard }: CardDetailsProps) => {
  const {
    loading: isCardsLoading,
    data: cardsConnection,
    error: cardsError,
    fetchMore: fetchMoreCards,
  } = useQuery<Cards>(cardsQuery, {
    variables: { pipe_id: pipeId, first: 3 },
  });

  if (isCardsLoading) return <div>Loading...</div>;
  if (cardsError)
    return <div>An error occurred {JSON.stringify(cardsError)}</div>;
  if (!cardsConnection) return <div>None</div>;

  const cards = cardsConnection.cards?.edges?.map((t) => t?.node);

  const { endCursor, hasNextPage } = cardsConnection.cards!.pageInfo;

  return (
    <section>
      <h1 className="text-2xl font-bold">{pipeName} Cards</h1>
      {cards?.map((card) => (
        <div key={card!.id} className="">
          {card?.title}
        </div>
      ))}
      <div className="pt-4 pb-2">
        <button
          type="button"
          onClick={closeCard}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Close card
        </button>
        {hasNextPage && (
          <button
            type="button"
            onClick={() => {
              fetchMoreCards({
                variables: {
                  after: endCursor,
                },
              });
            }}
            className="px-4 py-2 mx-2 text-sm font-medium text-blue-500 bg-blue-500 rounded-md text-opacity-80 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Fetch more
          </button>
        )}
      </div>
    </section>
  );
};

export default CardDetails;
