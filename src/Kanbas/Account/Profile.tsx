import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();

  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {profile && (
        <div className="profile-details">
          <div className="profile-section">
            <h2>Account Information</h2>
            <div className="profile-field">
              <label>Username</label>
              <input
                className="profile-input"
                value={profile.username}
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
              />
            </div>
            <div className="profile-field">
              <label>Password</label>
              <input
                className="profile-input"
                value={profile.password}
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
                type="password"
              />
            </div>
          </div>

          <div className="profile-section">
            <h2>Personal Information</h2>
            <div className="profile-field">
              <label>First Name</label>
              <input
                className="profile-input"
                value={profile.firstName}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
              />
            </div>
            <div className="profile-field">
              <label>Last Name</label>
              <input
                className="profile-input"
                value={profile.lastName}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
              />
            </div>
            <div className="profile-field">
              <label>Date of Birth</label>
              <input
                className="profile-input"
                value={profile.dob}
                onChange={(e) =>
                  setProfile({ ...profile, dob: e.target.value })
                }
                type="date"
              />
            </div>
            <div className="profile-field">
              <label>Email</label>
              <input
                className="profile-input"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="profile-section">
            <h2>Role Information</h2>
            <div className="profile-field">
              <label>Role</label>
              <select
                className="profile-input"
                value={profile.role}
                onChange={(e) =>
                  setProfile({ ...profile, role: e.target.value })
                }
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
