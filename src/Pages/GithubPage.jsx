import React, { useEffect } from "react";

const GithubPage = () => {
  useEffect(() => {
    window.location.href = "https://github.com/Coder-the-noob";
  }, []);
  return (
    <div className="flex justify-center items-center h-screen text-xl font-semibold">
      Redirecting to GitHub...
    </div>
  );
};

export default GithubPage;
