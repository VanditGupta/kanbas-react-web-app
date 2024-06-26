import { BsGripVertical, BsChevronDown } from "react-icons/bs";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FiFileText } from "react-icons/fi";
import "./Assignments.css";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search..."
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
          <BsChevronDown className="me-2 fs-3" />
          <h3 id="wd-assignments-title" className="m-0">
            ASSIGNMENTS
          </h3>
        </div>
        <div className="d-flex align-items-center">
          <span
            className="badge bg-light text-dark me-2"
            style={{ borderRadius: "15px", padding: "0.5em 1em" }}
          >
            40% of Total
          </span>
          <button className="btn btn-secondary btn-sm">
            <FaPlus />
          </button>
          <IoEllipsisVertical className="ms-2 fs-5" />
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0 mt-3">
        <li className="wd-assignment-list-item list-group-item d-flex align-items-start mb-3 border position-relative">
          <div
            className="border-start border-3 border-success position-absolute h-100"
            style={{ left: 0 }}
          ></div>
          <div className="d-flex align-items-center pe-2 me-2">
            <BsGripVertical className="me-2 fs-3" />
            <FiFileText className="fs-3" />
          </div>
          <div className="flex-fill">
            <a
              className="wd-assignment-link fw-bold text-dark text-decoration-none"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1
            </a>
            <p className="mb-1">
              <span className="text-danger">Multiple Modules</span> |{" "}
              <span className="text-muted">Not available until</span> May 6 at
              12:00am
            </p>
            <p className="mb-1">
              <span className="fw-bold">Due</span> May 13 at 11:59pm | 100 pts
            </p>
          </div>
          <GreenCheckmark />
          <IoEllipsisVertical className="ms-2 fs-5" />
        </li>
        <li className="wd-assignment-list-item list-group-item d-flex align-items-start mb-3 border position-relative">
          <div
            className="border-start border-3 border-success position-absolute h-100"
            style={{ left: 0 }}
          ></div>
          <div className="d-flex align-items-center pe-2 me-2">
            <BsGripVertical className="me-2 fs-3" />
            <FiFileText className="fs-3" />
          </div>
          <div className="flex-fill">
            <a
              className="wd-assignment-link fw-bold text-dark text-decoration-none"
              href="#/Kanbas/Courses/1234/Assignments/124"
            >
              A2
            </a>
            <p className="mb-1">
              <span className="text-danger">Multiple Modules</span> |{" "}
              <span className="text-muted">Not available until</span> May 13 at
              12:00am
            </p>
            <p className="mb-1">
              <span className="fw-bold">Due</span> May 20 at 11:59pm | 100 pts
            </p>
          </div>
          <GreenCheckmark />
          <IoEllipsisVertical className="ms-2 fs-5" />
        </li>
        <li className="wd-assignment-list-item list-group-item d-flex align-items-start mb-3 border position-relative">
          <div
            className="border-start border-3 border-success position-absolute h-100"
            style={{ left: 0 }}
          ></div>
          <div className="d-flex align-items-center pe-2 me-2">
            <BsGripVertical className="me-2 fs-3" />
            <FiFileText className="fs-3" />
          </div>
          <div className="flex-fill">
            <a
              className="wd-assignment-link fw-bold text-dark text-decoration-none"
              href="#/Kanbas/Courses/1234/Assignments/125"
            >
              A3
            </a>
            <p className="mb-1">
              <span className="text-danger">Multiple Modules</span> |{" "}
              <span className="text-muted">Not available until</span> May 20 at
              12:00am
            </p>
            <p className="mb-1">
              <span className="fw-bold">Due</span> May 27 at 11:59pm | 100 pts
            </p>
          </div>
          <GreenCheckmark />
          <IoEllipsisVertical className="ms-2 fs-5" />
        </li>
      </ul>
    </div>
  );
}
