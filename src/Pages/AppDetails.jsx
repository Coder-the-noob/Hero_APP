import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downLogo from "../assets/icon-downloads.png";
import ratingLogo from "../assets/icon-ratings.png";
import reviewLogo from "../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load app data.</p>
    );

  const app = apps.find((p) => String(p.id) === id);
  if (!app)
    return <p className="text-center mt-10 text-gray-500">App not found.</p>;

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
  } = app;

  const formatNumber = (num) => {
    if (num >= 1_000_000)
      return (num / 1_000_000).toFixed(1).replace(".0", "") + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
    return num;
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-sm rounded-xl p-6 border border-gray-100 flex flex-col items-center">
      <div className="w-full bg-gray-50 rounded-xl p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center">
          <img
            src={image}
            alt={title}
            className="w-50 h-50 object-cover rounded-xl mx-auto md:mx-0 mb-4 md:mb-0 md:mr-8"
          />

          <div className="flex flex-col flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">{companyName}</span>
            </p>

            <div className="flex justify-center md:justify-start gap-6 border-t border-gray-200 pt-3 mt-2 text-center">
              <div className="flex flex-col items-center">
                <img src={downLogo} alt="downloads" className="w-7 h-7 mb-2" />
                <span className="text-sm text-gray-500">Downloads</span>
                <span className="text-2xl font-bold text-gray-900">
                  {formatNumber(downloads)}
                </span>
              </div>

              <div className="flex flex-col items-center">
                <img src={ratingLogo} alt="rating" className="w-7 h-7 mb-2" />
                <span className="text-sm text-gray-500">Average Rating</span>
                <span className="text-2xl  font-bold text-gray-900">
                  {ratingAvg}
                </span>
              </div>

              <div className="flex flex-col items-center">
                <img src={reviewLogo} alt="reviews" className="w-7 h-7 mb-2" />
                <span className="text-sm text-gray-500">Total Reviews</span>
                <span className="text-2xl  font-bold text-gray-900">
                  {formatNumber(reviews)}
                </span>
              </div>
            </div>

            <button className="mt-4 bg-[#00d390] hover:bg-[#00cc75] text-white font-bold text-sm px-5 py-2 rounded-md shadow-sm transition-all w-1/2 block">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Description
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
