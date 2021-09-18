// import BodyDescription from "./BodyDescription";
import { useEffect, useState } from "react";
import Loader from "./elements/Loader";
import Person from "./Person";
import "./styles/body.css";
import { useQuery } from "@apollo/client";
import GET_DATA from "../graphql/getData.graphql";
import Message from "./elements/Message";
import BodyDescription from "./BodyDescription";

function Body() {
  const { loading, error, data } = useQuery(GET_DATA);

  const [personDetail, setPersonDetail] = useState(null);

  const information = (data) => {
    setPersonDetail(data);
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!loading && !error && counter > data.allPeople.people.length) {
        return;
      }
      setCounter((counter) => counter + 5);

      // <-- Change this line!
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
                information={information}
                key={details.id}
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
