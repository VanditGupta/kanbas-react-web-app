import React from "react";
import "./Assignments.css"; // Make sure to import the CSS file

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-3">
      <div className="mb-3">
        <label htmlFor="wd-name">
          <b>Assignment Name</b>
        </label>
        <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description">
          <b>Description</b>
        </label>
        <div
          id="wd-description"
          className="form-control"
          style={{ height: "auto", whiteSpace: "pre-wrap" }}
        >
          The assignment is{" "}
          <a href="#" style={{ color: "red" }}>
            available online
          </a>
          .<br />
          <br />
          Submit a link to the landing page of your Web application running on{" "}
          <a href="#" style={{ color: "black" }}>
            Netlify
          </a>
          .<br />
          <br />
          The landing page should include the following:
          <br />
          • Your full name and section
          <br />
          • Links to each of the lab assignments
          <br />• Link to the{" "}
          <a href="#" style={{ color: "black" }}>
            Kanbas
          </a>{" "}
          application
          <br />
          • Links to all relevant source code repositories
          <br />
          <br />
          The{" "}
          <a href="#" style={{ color: "black" }}>
            Kanbas
          </a>{" "}
          application should include a link to navigate back to the landing
          page.
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-points">
            <b>Points</b>
          </label>
          <input
            id="wd-points"
            className="form-control"
            type="number"
            value={100}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-assignment-group">
            <b>Assignment Group</b>
          </label>
          <select id="wd-assignment-group" className="form-control">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-display-grade">
            <b>Display Grade as</b>
          </label>
          <select id="wd-display-grade" className="form-control">
            <option>Percentage</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-submission-type">
            <b>Submission Type</b>
          </label>
          <select id="wd-submission-type" className="form-control">
            <option>Online</option>
          </select>
          <div className="mt-2">
            <p>
              <b>Online Entry Options</b>
            </p>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">File Uploads</label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="wd-assign">
          <b>Assign To</b>
        </label>
        <input id="wd-assign" className="form-control" value="Everyone" />
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-due-date">
            <b>Due</b>
          </label>
          <input
            id="wd-due-date"
            className="form-control"
            type="date"
            value="2024-05-13"
          />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="wd-available-from">
                <b>Available from</b>
              </label>
              <input
                id="wd-available-from"
                className="form-control"
                type="date"
                value="2024-05-06"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-available-until">
                <b>Until</b>
              </label>
              <input
                id="wd-available-until"
                className="form-control"
                type="date"
                value="2024-05-20"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success">Save</button>
      </div>
    </div>
  );
}
