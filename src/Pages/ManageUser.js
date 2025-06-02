import React from "react";
import { useNavigate } from "react-router-dom";

function Manageuser() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Manage User</h1>
      <button onClick={() => navigate("/")}>Back to Dashboard</button>
    </div>
  );
}

export default Manageuser;
