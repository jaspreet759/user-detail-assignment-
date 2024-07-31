import React, { useState, useMemo } from 'react';
import useFetchUsers from '../hooks/useFetchUsers';
import UserList from './UserList';
import UserDetails from './UserDetail';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import SortButton from './Sorting'; 
import { sortUsersByName } from './sortUtils'; 
import './styles.css';

const UserPage = () => {
    const { users, error, loading } = useFetchUsers();
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedUser, setSelectedUser] = useState(null);

    const usersPerPage = 5; 
    const filteredUsers = useMemo(() => 
      users.filter(user => 
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase())
      ),
      [users, query]
    );
    const sortedUsers = useMemo(() => 
      sortUsersByName(filteredUsers, sortOrder), // Use the sorting utility here
      [filteredUsers, sortOrder]
    );
    const paginatedUsers = useMemo(() => 
      sortedUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage),
      [sortedUsers, currentPage]
    );

    const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

    const handleSort = () => {
      setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
      setCurrentPage(1);
    };

    const hasUsers = paginatedUsers.length > 0;

    if (error) return <div>Error: {error.message}</div>;
    if (loading) return <div>Loading...</div>;

    return (
      <div className="app">
        <SearchBar query={query} onSearch={setQuery} />
        {hasUsers && <SortButton sortOrder={sortOrder} onSort={handleSort} />}
        <UserList 
          users={paginatedUsers} 
          onClickUser={setSelectedUser} 
          currentPage={currentPage}
          usersPerPage={usersPerPage} 
        />
        {selectedUser && (
          <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
          disabled={!hasUsers}
        />
      </div>
    );
  };

export default UserPage;
