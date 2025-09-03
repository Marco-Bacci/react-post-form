import React from "react";

const BusinessCard = ({data}) => {
  const {author, title, body} = data
  return (
    <div className="col-4 my-2">
      <div className="card">
        <div className="card-header">
          <h2>{author}</h2>
        </div>
        <div className="card-body">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
