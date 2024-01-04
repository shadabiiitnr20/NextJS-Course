import React from "react";

const UserProfile = ({ params }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <span>{params.id}</span>
    </div>
  );
};

export default UserProfile;
