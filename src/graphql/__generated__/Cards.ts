/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Cards
// ====================================================

export interface Cards_cards_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface Cards_cards_edges_node_labels {
  __typename: "Label";
  /**
   * Represents the label identifier.
   */
  id: string;
  /**
   * Represents the color used in the label using a hexadecimal string.
   */
  color: string | null;
  /**
   * Represents the label name.
   */
  name: string | null;
}

export interface Cards_cards_edges_node {
  __typename: "Card";
  /**
   * The card ID
   */
  id: string;
  /**
   * The card title
   */
  title: string;
  /**
   * Whether the card is done
   */
  done: boolean | null;
  /**
   * Information about the card labels
   */
  labels: (Cards_cards_edges_node_labels | null)[] | null;
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
   * Information to aid in pagination.
   */
  pageInfo: Cards_cards_pageInfo;
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
  pipe_id: string;
  first?: number | null;
  after?: string | null;
}
