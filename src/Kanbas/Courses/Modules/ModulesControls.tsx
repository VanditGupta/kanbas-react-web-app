import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <select className="form-select form-select-lg">
          <option value="publish-all">Publish All</option>
          <option value="publish-all-items">Publish all modules and items</option>
          <option value="publish-modules-only">Publish modules only</option>
          <option value="unpublish-all-items">Unpublish all modules and items</option>
          <option value="unpublish-modules-only">Unpublish modules only</option>
        </select>
      </div>
      <button
        id="wd-view-progress"
        className="btn btn-lg btn-primary me-1 float-end"
      >
        View Progress
      </button>
      <button
        id="wd-collapse-all"
        className="btn btn-lg btn-info float-end"
      >
        Collapse All
      </button>
    </div>
  );
}

