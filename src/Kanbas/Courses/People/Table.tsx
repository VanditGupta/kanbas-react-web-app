// Table.tsx
import React, { useState, useEffect } from "react";
import * as client from "./client";
import profileIcon from "./user.png";
import { Link } from "react-router-dom";
import PeopleDetails from "./Details";

export default function PeopleTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div id="wd-people-table">
      <input
        onChange={(e) => filterUsersByName(e.target.value)}
        placeholder="Search people"
        className="form-control float-start w-25 me-2 wd-filter-by-name"
      />
      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select wd-select-role"
        style={{ width: "200px" }}
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="FACULTY">Faculty</option>
      </select>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Course</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <img
                  src={profileIcon}
                  alt="Profile"
                  className="profile-icon"
                  style={{ width: "25px", height: "25px", marginRight: "8px" }}
                />
                <Link
                  to={`/Kanbas/Courses/${user.courseId}/People/${user._id}`}
                >
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-course">{user.courseId}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PeopleDetails />
    </div>
  );
}
