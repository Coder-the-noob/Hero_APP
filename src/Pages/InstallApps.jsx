import React, { useEffect, useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import { toast, ToastContainer } from "react-toastify";

const InstallApps = () => {
  const [installed, setInstallApp] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    const ableApps = JSON.parse(localStorage.getItem("installed"));
    if (ableApps) {
      setInstallApp(ableApps);
    }
  }, []);

  const sortedApp = (() =>{
    if(sortOrder === 'rating-asc'){
        return [...installed].sort((a,b)=>a.ratingAvg - b.ratingAvg)
    }else if(sortOrder=== 'rating-desc'){
        return[...installed].sort((a,b) => b.ratingAvg - a.ratingAvg)
    }else{
       return installed
    }
  }) ()

  const handleUninstall = (id) => {
    const updatedList = installed.filter((app) => app.id !== id);
    setInstallApp(updatedList);
    localStorage.setItem("installed", JSON.stringify(updatedList));

    toast.error("App Uninstalled!", { theme: "dark" });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="text-center mb-10">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Your Installed Apps
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                  Explore all trending apps on the market developed by us
              </p>
          </div>

          <div className="flex justify-between items-center mb-6">
              <p className="text-gray-700 font-medium">
                  {installed.length} Apps Found
              </p>
          <label className="form-control w-full max-w-xs">
              <select className="select select-bordered" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="none">Sort by rating</option>
                  <option value="rating-asc">Low-&gt;High</option>
                  <option value="rating-desc">High-&gt;Low</option>
              </select>
          </label>
      </div><div className="space-y-4">
              {sortedApp.map(({ id, image, title, downloads, ratingAvg, size }) => (
                  <div
                      key={id}
                      className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                  >
                      <div className="flex items-center gap-4">
                          <img
                              src={image}
                              alt={title}
                              className="w-14 h-14 rounded-lg object-cover bg-gray-100" />
                          <div>
                              <h3 className="font-semibold text-gray-900">{title}</h3>
                              <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                                  <div className="flex items-center gap-1">
                                      <img
                                          src={downloadIcon}
                                          alt="downloads"
                                          className="w-4 h-4" />
                                      <span>{(downloads / 1000000).toFixed(1)}M</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-yellow-500">
                                      <span>★</span>
                                      <span>{ratingAvg}</span>
                                  </div>
                                  <span>{size} MB</span>
                              </div>
                          </div>
                      </div>

                      <button onClick={() => handleUninstall(id)} className="bg-green-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition">
                          Uninstall
                      </button>
                  </div>
              ))}
          </div><ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default InstallApps;
