import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaPlus, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: '300px' }}>
          <span className="input-group-text"><FaSearch /></span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <div>
          <button className="btn btn-secondary me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>
      <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <h3 id="wd-assignments-title" className="m-0">ASSIGNMENTS</h3>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-2">40% of Total</span>
          <button className="btn btn-secondary btn-sm">
            <FaPlus />
          </button>
          <IoEllipsisVertical className="ms-2 fs-5" />
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0 mt-3">
        {['A1', 'A2', 'A3'].map((assignment, index) => (
          <li key={index} className="wd-assignment-list-item list-group-item d-flex align-items-start mb-3">
            <div className="border-start border-3 border-success pe-2">
              <BsGripVertical className="me-2 fs-3" />
            </div>
            <div className="flex-fill">
              <a
                className="wd-assignment-link fw-bold text-dark"
                href={`#/Kanbas/Courses/1234/Assignments/12${index}`}
              >
                {assignment}
              </a>
              <p className="mb-1 text-danger">Multiple Modules</p>
              <p className="mb-1">
                <span className="text-muted">Not available until</span> May {6 + index * 7} at 12:00am
              </p>
              <p className="mb-1">
                <span className="fw-bold">Due</span> May {13 + index * 7} at 11:59pm | 100 pts
              </p>
            </div>
            <GreenCheckmark />
            <IoEllipsisVertical className="ms-2 fs-5" />
          </li>
        ))}
      </ul>
    </div>
  );
}
