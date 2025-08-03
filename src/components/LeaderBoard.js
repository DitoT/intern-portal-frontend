import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://intern-portal-backend-gjjs.onrender.com/api/leaderboard')
      .then(res => res.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>
        {leaders.map((user, idx) => (
          <li key={idx}>
            {user.name} - ${user.donations}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;