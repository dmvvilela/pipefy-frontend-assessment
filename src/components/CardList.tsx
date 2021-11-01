import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Cards } from "../graphql/__generated__/Cards";
import { loader } from "graphql.macro";
import Button from "./Button";
import CardDetails from "./CardDetails";

const cardsQuery = loader("../graphql/cards.graphql");

export interface CardListProps {
  pipeId: string;
  pipeName: string;
  closeCard: () => void;
}

const CardList = ({ pipeId, pipeName, closeCard }: CardListProps) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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
      <h1 className="mb-4 text-2xl font-bold">{pipeName} Cards</h1>
      {cards?.map((card) => (
        <CardDetails key={card!.id} card={card!} />
      ))}
      <div className="pt-4 pb-2">
        <Button title="Close pipe" onClick={closeCard} />
        {hasNextPage && (
          <Button
            type="primary"
            title={isLoadingMore ? "Fetching..." : "Fetch more"}
            className="sm:mx-2"
            onClick={async () => {
              setIsLoadingMore(true);

              await fetchMoreCards({
                variables: {
                  after: endCursor,
                },
              });

              setIsLoadingMore(false);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default CardList;
