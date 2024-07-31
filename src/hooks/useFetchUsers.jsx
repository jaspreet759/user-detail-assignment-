import { useState, useEffect } from 'react';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log("🚀 ~ fetchUsers ~ data:", data)
        setUsers(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchUsers();
  }, []);

  return { users, error };
};

export default useFetchUsers;
