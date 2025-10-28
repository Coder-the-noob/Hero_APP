import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCards from "../Components/AppCards/AppCards";

const AllApps = () => {
    const { apps } = useApps();
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()

  const searchApp = term ? apps.filter(app=>app.title.toLocaleLowerCase().includes(term)) : apps;
  return (
    <div>
      <div className="mb-5 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold ">Our All Applications</h1>
        <p className="text-gray-500 mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between py-5 items-center">
        <h1 className="text-xl font-semibold">
          Apps Found <span>({searchApp.length})</span>
        </h1>
        <label className="input">
          <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" placeholder="Search Apps" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchApp.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
