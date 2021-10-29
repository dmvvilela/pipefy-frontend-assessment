import React from "react";
import { useQuery } from "@apollo/client";
import { Cards } from "../graphql/__generated__/Cards";
import { loader } from "graphql.macro";
import Button from "./Button";

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
    fetchPolicy: "network-only",
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
        <Button title="Close pipe" onClick={closeCard} />
        {hasNextPage && (
          <Button
            type="primary"
            title="Fetch more"
            className="mx-2"
            onClick={() => {
              fetchMoreCards({
                variables: {
                  after: endCursor,
                },
              });
            }}
          />
        )}
      </div>
    </section>
  );
};

export default CardDetails;
