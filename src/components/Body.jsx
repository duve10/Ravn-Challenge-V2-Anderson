import { useEffect, useState } from "react";

import Loader from "./elements/Loader";
import Person from "./Person";
import BodyDescription from "./BodyDescription";

import Message from "./elements/Message";

/** Implement apollo graphql */
import { useQuery } from "@apollo/client";
import GET_DATA from "../graphql/getData.graphql";

import "./styles/body.css";
function Body() {
  /** DATA FROM QUERY */
  const { loading, error, data } = useQuery(GET_DATA);

  const [active, setActive] = useState(false);

  const [personDetail, setPersonDetail] = useState(null);

  const [counter, setCounter] = useState(0);

  /** Function to send data to person component and bodyDescription */
  const information = (data) => {
    // details to show
    setPersonDetail(data);
    // id to change backgroundcolor
    setActive(data.id);
  };

  // Use Effect to counter each 5 to show in the view
  useEffect(() => {
    const timer = setInterval(() => {
      if (!loading && !error && counter > data.allPeople.people.length) {
        return;
      }
      setCounter((counter) => counter + 5);
    }, 1500);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, [counter]);

  return (
    <div className="container height">
      <div className="body">
        {loading ? null : error ? (
          <Message message="Failed to Load Data" />
        ) : (
          data.allPeople.people
            .slice(0, counter)
            .map((details) => (
              <Person
                key={details.id}
                information={information}
                active={active}
                details={details}
              ></Person>
            ))
        )}

        {loading ? (
          <Loader />
        ) : error ? null : counter < data.allPeople.people.length ? (
          <Loader />
        ) : null}
      </div>

      <BodyDescription information={personDetail} />
    </div>
  );
}

export default Body;
