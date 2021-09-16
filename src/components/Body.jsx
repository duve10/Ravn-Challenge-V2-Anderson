import BodyDescription from "./BodyDescription";
import "../stylesComponents/body.css";

import { useQuery } from "@apollo/client";
import GET_DATA from "../graphql/getData.graphql";

const Body = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return (
    <div className="container">
      <h3>{data}</h3>
      <BodyDescription />
    </div>
  );
};

export default Body;
