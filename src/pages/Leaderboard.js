import React from "react";

const Leaderboard = ({ scores = [] }) => {
  return (
    <div>
      <h2>Leaderboard</h2>
      {scores.length === 0 ? (
        <p>No scores yet. Participate in quizzes to see results!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
