import React from "react";
import icon from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";

const AppCards = ({ app }) => {
  const { title, image, ratingAvg, downloads } = app;
  return (
    <div className="card bg-base-100 hover:scale-105 transition ease-in-out shadow-sm">
      <figure className="rounded-xl">
        <img className="p-4" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center border border-transparent rounded-sm bg-[#f1f5e8] p-2">
            <img className="w-4 h-4" src={icon} alt="" />
            <span className="font-semibold text-[#00d390]">{downloads}</span>
          </div>
          <div className="flex gap-2 items-center border border-transparent rounded-sm bg-[#f1f5e8] p-2">
            <img className="w-4 h-4" src={ratings} alt="" />
            <span className="font-semibold text-[#ff8811]">{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCards;
