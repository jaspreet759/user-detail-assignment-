import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ users, onClickUser, currentPage, usersPerPage }) => (
  <div>
    {users.length === 0 ? (
      <p>No data found</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            // Calculate serial number based on page and index
            const serialNumber = (currentPage - 1) * usersPerPage + index + 1;
            return (
              <tr key={user.id} onClick={() => onClickUser(user)}>
                <td>{serialNumber}</td> {/* Display serial number instead of ID */}
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )}
  </div>
);

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onClickUser: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired
};

export default UserList;
