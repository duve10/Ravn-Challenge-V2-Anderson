import BodyDescription from "./BodyDescription";
import "./styles/body.css";

import { useQuery } from "@apollo/client";
import GET_DATA from "../graphql/getData.graphql";
import { useState } from "react";
import Loader from "./elements/Loader";

const Body = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  const [info, setInfo] = useState(null);
  // const [selected, setSelected] = useState("");

  // if (loading)
  //   return (
  //     <div>
  //       <Loader /> <p> Loading</p>
  //     </div>
  //   );
  if (error) return <p>Failed to Load Data</p>;

  const information = (datos, e) => {
    setInfo(datos);
    // setSelected("no-active");
    // if (
    //   e.target.tagName === "P" ||
    //   e.target.tagName === "I" ||
    //   e.target.tagName === "H3"
    // ) {
    //   e.target.parentElement.parentElement.classList.add("active");
    // } else {
    //   e.target.classList.add("active");
    // }
  };

  return (
    <div className="container altura">
      <div className="body">
        {loading ? (
          <Loader />
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
