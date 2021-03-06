import "./styles/person.css";
/** COMPONENT FOR EACH PERSON */
const Person = ({ details, information, active }) => {
  return (
    <>
      <div
        onClick={(e) => information(details)}
        key={details.id}
        className={active === details.id ? "person active" : "person"}
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
