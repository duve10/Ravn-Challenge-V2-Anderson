import "../stylesComponents/bodyInformation.css";

const BodyDescription = ({ info }) => {
  return !info ? null : (
    <div>
      <h3>General Information</h3>
      <h4>Eye Color - {info.eyeColor}</h4>
      <h4>Hair Color - {info.hairColor}</h4>
      <h4>Skin Color - {info.skinColor}</h4>
      <h4>Birth Year - {info.birthYear}</h4>
    </div>
  );
};

export default BodyDescription;
