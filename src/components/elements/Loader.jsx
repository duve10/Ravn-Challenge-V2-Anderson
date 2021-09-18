import Loaders from "react-js-loader";
import "../styles/elements.css";

const Loader = () => {
  return (
    <div className="pre-charge">
      <div className="pre-charge-message">
        <div>
          <Loaders
            type="spinner-cub"
            bgColor="#333333"
            color="#333333"
            size={30}
          />
        </div>

        <h2 className="h2-grey margin-load">Loading</h2>
      </div>
    </div>
  );
};

export default Loader;
