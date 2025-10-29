import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCards from "../Components/AppCards/AppCards";
import NotFoundImage from "../assets/App-Error.png";

const AllApps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();

  const searchApp = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  const handleGoBack = () => {
    setSearch("");
  };

  return (
    <div>
      <div className="mb-5 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-gray-500 mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between py-5 items-center">
        <h1 className="text-xl font-semibold">
          Apps Found <span>({searchApp.length})</span>
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="px-3 py-1"
          />
        </label>
      </div>

      {searchApp.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchApp.map((app) => (
            <AppCards key={app.id} app={app}></AppCards>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
          <img src={NotFoundImage} alt="Not Found" className="w-80 mb-6" />
          <h2 className="text-3xl font-bold mb-2">OPPS!! APP NOT FOUND</h2>
          <p className="text-gray-500 mb-4 text-sm">
            The App you are requesting is not found on our system. Please try
            another app.
          </p>
          <button
            onClick={handleGoBack}
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default AllApps;
