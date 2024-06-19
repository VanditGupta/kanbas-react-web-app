import React from "react";
import {
  FaFileImport,
  FaFileExport,
  FaCog,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";
import { Table, InputGroup, FormControl, Button } from "react-bootstrap";

export default function Grades() {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex">
          <div className="me-3">
            <label>
              <b>Student Names</b>
            </label>
            <InputGroup>
              <Button variant="outline-secondary">
                <FaSearch />
              </Button>
              <FormControl
                placeholder="Search Students"
                className="form-control"
              />
              <Button variant="outline-secondary">
                <FaChevronDown />
              </Button>
            </InputGroup>
          </div>
        </div>
        <div className="d-flex align-items-start">
          <div className="me-3">
            <label>
              <b>Assignment Names</b>
            </label>
            <InputGroup>
              <Button variant="outline-secondary">
                <FaSearch />
              </Button>
              <FormControl
                placeholder="Search Assignments"
                className="form-control"
              />
              <Button variant="outline-secondary">
                <FaChevronDown />
              </Button>
            </InputGroup>
          </div>
          <Button
            variant="outline-secondary"
            className="me-2 d-flex align-items-center"
          >
            <FaFileImport className="me-1" /> Import
          </Button>
          <Button
            variant="outline-secondary"
            className="me-2 d-flex align-items-center"
          >
            <FaFileExport className="me-1" /> Export
          </Button>
          <Button
            variant="outline-secondary"
            className="d-flex align-items-center"
          >
            <FaCog />
          </Button>
        </div>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>
                A1 SETUP
                <br />
                Out of 100
              </th>
              <th>
                A2 HTML
                <br />
                Out of 100
              </th>
              <th>
                A3 CSS
                <br />
                Out of 100
              </th>
              <th>
                A4 BOOTSTRAP
                <br />
                Out of 100
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-danger">Jane Adams</td>
              <td>100%</td>
              <td>100%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td className="text-danger">Christina Allen</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <input
                  type="text"
                  defaultValue="88.03%"
                  className="form-control"
                />
              </td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}