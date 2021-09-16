import { gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    allPeople(first: 2) {
      people {
        id
        name
        species {
          id
        }
        homeworld {
          id
          name
        }
      }
    }
  }
`;

export default GET_DATA;
