import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
const LoaderMessage = ({ loadingMessage, isLoading }) => {
  const [showLoadingMessage, setshowLoadingMessage] = useState(false);
  useEffect(() => {
    let loadingMessageDely;

    if (isLoading) {
      loadingMessageDely = setTimeout(() => {
        setshowLoadingMessage(true);
      }, 400);
    }

    return () => {
      clearTimeout(loadingMessageDely);
      setshowLoadingMessage(false);
    };
  }, [isLoading]);
  return (
    <div>
      {showLoadingMessage ? <p className="loading"> {loadingMessage}</p> : null}
    </div>
  );
};
LoaderMessage.propTypes = {
  loadingMessage: propTypes.string.isRequired,
  isLoading: propTypes.bool,
};
export default LoaderMessage;
