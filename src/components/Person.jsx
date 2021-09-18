import "./styles/person.css";

const Person = ({ details, information }) => {
  return (
    <>
      <div
        onClick={(e) => information(details)}
        key={details.id}
        className="person"
      >
        <div>
          <h2 className="h2-general">{details.name}</h2>
          <p className="extra-info">
            {details.species ? details.species.name : "Human"} from{" "}
            {details.homeworld.name}
          </p>
        </div>
        <div>
          <i className="fas fa-chevron-right arrow"></i>
        </div>
      </div>
    </>
  );
};

export default Person;
