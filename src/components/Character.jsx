import React from "react";

function Character({ character }) {
  const { name, species, image } = character;

  return (
    <div className="col-md-3 mb-2">
      <div className="card">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5>{name}</h5>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
