import { gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    allPeople {
      totalCount
      people {
        id
        name
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection {
          vehicles {
            name
            id
          }
        }
        species {
          id
          name
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
