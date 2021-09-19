import "../styles/elements.css";
/** COMPONENT MESSAGE USING A MESSAGE */
const Message = ({ message }) => {
  return (
    <div className="pre-charge">
      <div className="pre-charge-message">
        <h2 className="h2-failed">{message}</h2>
      </div>
    </div>
  );
};

export default Message;
