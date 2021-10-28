/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Cards
// ====================================================

export interface Cards_cards_edges_node {
  __typename: "Card";
  /**
   * The card title
   */
  title: string;
}

export interface Cards_cards_edges {
  __typename: "CardEdge";
  /**
   * The item at the end of the edge.
   */
  node: Cards_cards_edges_node | null;
}

export interface Cards_cards {
  __typename: "CardConnection";
  /**
   * A list of edges.
   */
  edges: (Cards_cards_edges | null)[] | null;
}

export interface Cards {
  /**
   * Fetches a group of cards based on arguments
   */
  cards: Cards_cards | null;
}

export interface CardsVariables {
  pipe_id: number;
}
