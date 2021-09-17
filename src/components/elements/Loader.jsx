import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="loading">
      <div>
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <p>Loading</p>
    </div>
  );
};

export default Loader;
