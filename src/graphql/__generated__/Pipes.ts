/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Pipes
// ====================================================

export interface Pipes_organizations_pipes {
  __typename: "Pipe";
  /**
   * The pipe ID
   */
  id: string;
  /**
   * The Repo name
   */
  name: string;
  /**
   * The pipe total cards
   */
  cards_count: number | null;
}

export interface Pipes_organizations {
  __typename: "Organization";
  /**
   * The organization ID
   */
  id: string;
  /**
   * The organization name
   */
  name: string | null;
  /**
   * Fetches a group of pipes based on arguments
   */
  pipes: (Pipes_organizations_pipes | null)[] | null;
}

export interface Pipes {
  /**
   * Lookup organizations by their ID
   */
  organizations: (Pipes_organizations | null)[] | null;
}
