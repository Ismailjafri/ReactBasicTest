import React, { useEffect, useState } from 'react';

function Practice() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setProblems(data.slice(0, 15))) 
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="w-full py-20 px-4 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Practice Exercises</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems.map(problem => (
          <div key={problem.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{problem.title}</h3>
            <p>{problem.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Practice;
