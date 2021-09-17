import "./styles/bodyDescription.css";

const BodyDescription = ({ info }) => {
  return !info ? null : (
    <div className="details">
      <div className="details-info">
        <div>
          <h2 className="h2-general">General Information</h2>
          <ul>
            <li>
              <h2 className="h2-general">Eye Color</h2>{" "}
              <h2 className="h2-general">{info.eyeColor}</h2>
            </li>
            <li>
              <h2 className="h2-general">Hair Color </h2>{" "}
              <h2 className="h2-general">{info.hairColor}</h2>
            </li>
            <li>
              <h2 className="h2-general">Skin Color</h2>{" "}
              <h2 className="h2-general">{info.skinColor}</h2>
            </li>
            <li>
              <h2 className="h2-general">Birth Year</h2>{" "}
              <h2 className="h2-general">{info.birthYear}</h2>
            </li>
          </ul>
        </div>

        <div>
          {info.vehicleConnection.vehicles.length > 0 ? (
            <h2 className="h2-general">Vehicles</h2>
          ) : null}
          <ul>
            {info.vehicleConnection.vehicles.map((vehicle) => (
              <li key={vehicle.id}>
                <h2 className="h2-general">{vehicle.name}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BodyDescription;
