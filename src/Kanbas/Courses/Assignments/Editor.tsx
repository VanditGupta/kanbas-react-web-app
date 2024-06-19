import React from "react";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import "./Assignments.css";
import { BsChevronDown } from "react-icons/bs";

// Function to format dates to MM/DD/YYYY
const formatDate = (date: string): string => {
  const [month, day] = date.split(" ");
  const monthMap: { [key: string]: string } = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  return `${monthMap[month]}/${day.padStart(2, "0")}/2024`;
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  // const courses = db.courses;

  const assignment = assignments.find((a) => a._id === aid && a.course === cid);
  // const course = courses.find((c) => c._id === cid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container mt-3">
      <div className="mb-3">
        <label htmlFor="wd-name">
          <b>Assignment Name</b>
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          readOnly
        />
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
          <span
            style={{
              color: "red",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            available online
          </span>
          .<br />
          <br />
          {assignment.description}
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
            defaultValue={100}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-assignment-group">
            <b>Assignment Group</b>
          </label>
          <div className="input-group">
            <select id="wd-assignment-group" className="form-control">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>DISCUSSIONS</option>
              <option>PROJECTS</option>
              <option>EXAMS</option>
            </select>
            <span className="input-group-text">
              <BsChevronDown />
            </span>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-display-grade">
            <b>Display Grade as</b>
          </label>
          <div className="input-group">
            <select id="wd-display-grade" className="form-control">
              <option>Percentage</option>
              <option>Complete/Incomplete</option>
              <option>Points</option>
              <option>Letter Grade</option>
              <option>GPA Scale</option>
            </select>
            <span className="input-group-text">
              <BsChevronDown />
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-submission-type">
            <b>Submission Type</b>
          </label>
          <div className="input-group">
            <select id="wd-submission-type" className="form-control">
              <option>Online</option>
              <option>Offline</option>
            </select>
            <span className="input-group-text">
              <BsChevronDown />
            </span>
          </div>
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
          <div className="mt-2">
            <p>
              <b>Offline Entry Options</b>
            </p>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Paper Submission</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">In-Person Presentation</label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="wd-points">
          <b>Assign</b>
        </label>
        <div className="border p-3">
          <label htmlFor="wd-assign">
            <b>Assign To</b>
          </label>
          <div className="input-group">
            <select id="wd-assign" className="form-control">
              <option>Everyone</option>
              <option>Group 1</option>
              <option>Group 2</option>
              <option>Group 3</option>
              <option>Group 4</option>
            </select>
            <span className="input-group-text">
              <BsChevronDown />
            </span>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="wd-due-date">
                <b>Due</b>
              </label>
              <input
                id="wd-due-date"
                className="form-control"
                type="text"
                value={formatDate(assignment.dueDate)}
                readOnly
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
                    type="text"
                    value={formatDate(assignment.availableDate)}
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="wd-available-until">
                    <b>Until</b>
                  </label>
                  <input
                    id="wd-available-until"
                    className="form-control"
                    type="text"
                    value={
                      assignment.availableUntil
                        ? formatDate(assignment.availableUntil)
                        : "05/20/2024"
                    }
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-danger"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
