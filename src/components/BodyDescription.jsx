import "./styles/bodyDescription.css";

const BodyDescription = ({ information }) => {
  return !information ? null : (
    <div className="details">
      <div className="details-info">
        <div className="margin">
          <h2 className="h2-general">General Information</h2>
          <ul>
            <li>
              <h2 className="h2-grey">Eye Color</h2>{" "}
              <h2 className="h2-general">{information.eyeColor}</h2>
            </li>
            <li>
              <h2 className="h2-grey">Hair Color </h2>{" "}
              <h2 className="h2-general">{information.hairColor}</h2>
            </li>
            <li>
              <h2 className="h2-grey">Skin Color</h2>{" "}
              <h2 className="h2-general">{information.skinColor}</h2>
            </li>
            <li>
              <h2 className="h2-grey">Birth Year</h2>{" "}
              <h2 className="h2-general">{information.birthYear}</h2>
            </li>
          </ul>
        </div>

        <div className="margin">
          {information.vehicleConnection.vehicles.length > 0 ? (
            <h2 className="h2-general ">Vehicles</h2>
          ) : null}
          <ul>
            {information.vehicleConnection.vehicles.map((vehicle) => (
              <li key={vehicle.id}>
                <h2 className="h2-grey">{vehicle.name}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BodyDescription;
