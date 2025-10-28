import React from "react";
import { Link, useLoaderData } from "react-router";
import AppCards from "../Components/AppCards/AppCards";

const Home = () => {
  const apps = useLoaderData();
  const featureApps = apps.slice(0, 12);
  console.log(apps);
  return (
    <div>
      <div className="mb-5 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold ">Trending Apps</h1>
        <p className="text-gray-500 mt-4">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featureApps.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>

     <div className="mt-7 flex flex-col items-center justify-center">
        <Link to='/allapps' className="text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:opacity-90 font-semibold px-4 py-2 rounded-lg text-lg">Show All</Link>
     </div>
    </div>
  );
};

export default Home;
