import React from "react";

function GridCard({ title, subTitle, image }) {
  return (
    <div className="card card-compact rounded-none w-64 bg-base-100 shadow-xl m-4">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title">{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div className="card-actions justify-end items-baseline">
          <p>
            <span>from</span> $9.99
          </p>
          <button className="btn btn-outline btn-primary btn-sm rounded-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default GridCard;
