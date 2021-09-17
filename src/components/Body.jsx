import BodyDescription from "./BodyDescription";
import "./styles/body.css";

import { useQuery } from "@apollo/client";
import GET_DATA from "../graphql/getData.graphql";
import { useState } from "react";
import Loader from "./elements/Loader";
import Message from "./elements/Message";

const Body = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  const [info, setInfo] = useState(null);

  const information = (datos, e) => {
    setInfo(datos);
  };

  return (
    <div className="container altura">
      <div className="body">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message message="Failed to Load Data" />
        ) : (
          data.allPeople.people.map((i) => (
            <div
              key={i.id}
              className="person"
              onClick={(e) => information(i, e)}
            >
              <div>
                <h2 className="h2-general">{i.name}</h2>
                <p className="extra-info">
                  {i.species ? i.species.name : "Human"} from {i.homeworld.name}
                </p>
              </div>
              <div>
                <i className="fas fa-chevron-right arrow"></i>
              </div>
            </div>
          ))
        )}
      </div>
      <BodyDescription info={info} />
    </div>
  );
};

export default Body;
