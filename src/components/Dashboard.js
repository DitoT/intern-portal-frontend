import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [internData, setInternData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/intern')
      .then(res => res.json())
      .then(data => setInternData(data));
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {internData ? (
        <>
          <p><strong>Name:</strong> {internData.name}</p>
          <p><strong>Referral Code:</strong> {internData.referralCode}</p>
          <p><strong>Total Donations:</strong> ${internData.donations}</p>

          <div className="rewards">
            <h3>Rewards</h3>
            <ul>
              <li>Free T-Shirt (unlocked)</li>
              <li>Webinar Access (locked)</li>
              <li>Certificate (locked)</li>
            </ul>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
