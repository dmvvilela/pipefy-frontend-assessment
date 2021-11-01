import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Pipes } from "../graphql/__generated__/Pipes";
import { loader } from "graphql.macro";
import Modal from "./Modal";
import CardList, { CardListProps } from "./CardList";

const pipesQuery = loader("../graphql/pipes.graphql");

const TailwindColor = require("@videsk/tailwind-random-color");

const PipeList = () => {
  const [showCard, setShowCard] = useState<Pick<
    CardListProps,
    "pipeId" | "pipeName"
  > | null>(null);

  const {
    loading: isPipesLoading,
    data: pipesConnection,
    error: pipesError,
  } = useQuery<Pipes>(pipesQuery);

  if (isPipesLoading) return <div>Loading...</div>;
  if (pipesError)
    return <div>An error occurred {JSON.stringify(pipesError)}</div>;
  if (!pipesConnection) return <div>None</div>;

  // For this exercise, get only the first organization
  const pipes = pipesConnection.organizations?.map((t) => t?.pipes)[0];
  const sortedPipes = pipes
    ?.slice()
    .sort((a, b) => a!.name.trim().localeCompare(b!.name.trim()));

  const closeCard = () => {
    setShowCard(null);
  };

  return (
    <section>
      {showCard && (
        <Modal>
          <CardList
            pipeId={showCard!.pipeId}
            pipeName={showCard!.pipeName}
            closeCard={closeCard}
          />
        </Modal>
      )}
      <div className="grid mb-16 place-items-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <h1 className="col-span-2 text-4xl font-extrabold md:col-span-4">
            Your Pipes
          </h1>
          <h2 className="col-span-2 pb-4 md:col-span-4">
            Here are all your processes
          </h2>
          {sortedPipes?.map((pipe) => (
            <div
              key={pipe!.id}
              className={`p-2 rounded-xl shadow-sm hover:shadow-md flex flex-col w-36 cursor-pointer ${new TailwindColor().pick()} bg-opacity-10 pipe`}
              onClick={() =>
                setShowCard({
                  pipeId: pipe!.id,
                  pipeName: pipe!.name,
                })
              }
            >
              <img
                src="pipe.png"
                className="self-center w-12 m-4"
                alt="pipe icon"
              />
              <h3 className="flex-1 text-sm font-bold text-center">
                {pipe?.name}
              </h3>
              <h3 className="flex-1 p-1 text-xs font-light text-center opacity-40">
                {pipe?.cards_count} {pipe?.cards_count === 1 ? "card" : "cards"}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipeList;
