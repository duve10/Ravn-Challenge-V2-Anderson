import { gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    allPeople {
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
