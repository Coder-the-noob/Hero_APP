import React from "react";
import { Link } from "react-router";
import AppCards from "../Components/AppCards/AppCards";
import useApps from "../Hooks/useApps";
import heroBanner from "../assets/hero.png";
import playStore from "../assets/GplayStore.png";
import appStore from "../assets/App_Store_(iOS).svg.png";
import ErrorImage from "../assets/error-404.png";

const Home = () => {
  const { apps, loading } = useApps();
  const featureApps = apps.slice(0, 8);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl font-semibold mb-4">Loading apps...</p>
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="w-full text-center px-4 bg-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          We Build <br />{" "}
          <span className="font-bold bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative
          apps designed to make everyday life simpler, smarter, and more
          exciting. Our goal is to turn your ideas into digital experiences that
          truly make an impact.
        </p>

        <div className="flex justify-center gap-4 mb-10 items-center">
          <div className="border-2 border-gray-300 rounded-xl cursor-pointer hover:scale-105 transition">
            <img src={playStore} alt="Google Play" className="h-16" />
          </div>
          <div className="flex items-center justify-center gap-4 cursor-pointer hover:scale-105 transition border border-gray-300 rounded-xl p-2">
            <img src={appStore} alt="App Store" className="h-14" />
            <span className="text-2xl font-bold">App Store</span>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroBanner}
            alt="Hero Banner"
            className="w-full max-w-3xl drop-shadow-2xl"
          />
        </div>
      </section>

      <section className="w-screen bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl md:text-5xl font-bold mb-10">
            Trusted By Millions, Built For You
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div>
              <p className="mb-1">Total Downloads</p>
              <h4 className="text-5xl font-bold mb-2">29.6M</h4>
              <span className="text-sm opacity-80">
                21% More Than Last Month
              </span>
            </div>
            <div>
              <p className="mb-1">Total Reviews</p>
              <h4 className="text-5xl font-bold mb-2">906K</h4>
              <span className="text-sm opacity-80">
                46% More Than Last Month
              </span>
            </div>
            <div>
              <p className="mb-1">Active Apps</p>
              <h4 className="text-5xl font-bold mb-2">132+</h4>
              <span className="text-sm opacity-80">31 More Will Launch</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 mb-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="text-gray-500 mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </section>

      {featureApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureApps.map((app) => (
            <AppCards key={app.id} app={app}></AppCards>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
          <p className="text-gray-500 text-sm mb-4">
            No trending apps found at the moment.
          </p>
        </div>
      )}

      <div className="mt-10 flex flex-col items-center justify-center">
        <Link
          to="/allapps"
          className="text-white bg-linear-to-r from-purple-700 to-purple-400 hover:opacity-90 font-semibold px-4 py-2 rounded-lg text-lg"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
