import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <button onClick={() => navigate("/manageuser")}>Go to Manage User</button> */}
    </div>
  );
}

export default Dashboard;
