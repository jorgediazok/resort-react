import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

function Loading() {
  return (
    <div className="Loading">
      <h4>rooms data loading...</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}

export default Loading;
