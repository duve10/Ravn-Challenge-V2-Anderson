import "../stylesComponents/loader.css";

const Loader = () => {
  return (
    <div className="loading">
      <div>
        <div class="lds-spinner">
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
