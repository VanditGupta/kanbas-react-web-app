// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses (12)</h2>
//       <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/reactjs.jpg" alt="React JS Course" />
//               <div className="card-body">
//                 <a
//                   className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1234/Home"
//                   style={{
//                     textDecoration: "none",
//                     color: "navy",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   CS1234 React JS
//                 </a>
//                 <p className="wd-dashboard-course-title card-text">
//                   Full Stack software development with React JS
//                 </p>
//                 <a
//                   href="#/Kanbas/Courses/1234/Home"
//                   className="btn btn-primary"
//                 >
//                   Go
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/nodejs.jpg" alt="Node JS Course" />
//               <div className="card-body">
//                 <a
//                   className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1235/Home"
//                   style={{
//                     textDecoration: "none",
//                     color: "navy",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   CS1235 Node JS
//                 </a>
//                 <p className="wd-dashboard-course-title card-text">
//                   Backend Development with Node.js
//                 </p>
//                 <a
//                   href="#/Kanbas/Courses/1235/Home"
//                   className="btn btn-primary"
//                 >
//                   Go
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/python.jpg" alt="Python Course" />
//               <div className="card-body">
//                 <a
//                   className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1236/Home"
//                   style={{
//                     textDecoration: "none",
//                     color: "navy",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   CS1236 Python
//                 </a>
//                 <p className="wd-dashboard-course-title card-text">
//                   Introduction to Python Programming
//                 </p>
//                 <a
//                   href="#/Kanbas/Courses/1236/Home"
//                   className="btn btn-primary"
//                 >
//                   Go
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img
//                 src="/images/machinelearning.jpg"
//                 alt="Machine Learning Course"
//               />
//               <div className="card-body">
//                 <a
//                   className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1237/Home"
//                   style={{
//                     textDecoration: "none",
//                     color: "navy",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   CS1237 Machine Learning
//                 </a>
//                 <p className="wd-dashboard-course-title card-text">
//                   Machine Learning Basics using Python and TensorFlow
//                 </p>
//                 <a
//                   href="#/Kanbas/Courses/1237/Home"
//                   className="btn btn-primary"
//                 >
//                   Go
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/databases.jpg" alt="Databases Course" />
//               <div className="card-body">
//                 <a
//                   className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1238/Home"
//                   style={{
//                     textDecoration: "none",
//                     color: "navy",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   CS1238 Databases
//                 </a>
//                 <p className="wd-dashboard-course-title card-text">
//                   Database Design and Management
//                 </p>
//                 <a
//                   href="#/Kanbas/Courses/1238/Home"
//                   className="btn btn-primary"
//                 >
//                   Go
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/htmlcss.jpg" alt="HTML & CSS Course" />
//               <div className="card-body">
//                 <a
//                   className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1239/Home"
//                   style={{
//                     textDecoration: "none",
//                     color: "navy",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   CS1239 HTML & CSS
//                 </a>
//                 <p className="wd-dashboard-course-title card-text">
//                   Web Development with HTML & CSS
//                 </p>
//                 <a
//                   href="#/Kanbas/Courses/1239/Home"
//                   className="btn btn-primary"
//                 >
//                   Go
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/javascript.jpg" alt="JavaScript Course" />
//               <div className="card-body">
//                 <a
//                   className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1240/Home"
//                   style={{
//                     textDecoration: "none",
//                     color: "navy",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   CS1240 JavaScript
//                 </a>
//                 <p className="wd-dashboard-course-title card-text">
//                   JavaScript for Beginners Course with Projects
//                 </p>
//                 <a
//                   href="#/Kanbas/Courses/1240/Home"
//                   className="btn btn-primary"
//                 >
//                   Go
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img
//                 src="/images/cloudcomputing.jpg"
//                 alt="Cloud Computing Course"
//               />
//               <div className="card-body">
//                 <a
//                   className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1241/Home"
//                   style={{
//                     textDecoration: "none",
//                     color: "navy",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   CS1241 Cloud Computing
//                 </a>
//                 <p className="wd-dashboard-course-title card-text">
//                   Introduction to Cloud Computing using AWS
//                 </p>
//                 <a
//                   href="#/Kanbas/Courses/1241/Home"
//                   className="btn btn-primary"
//                 >
//                   Go
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";
// import * as db from "../Database";
// export default function Dashboard() {
//   const courses = db.courses1;
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {courses.map((course) => (
//             <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//               <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
//                 <div className="card rounded-3 overflow-hidden">
//                   <img src="/images/reactjs.jpg" height="{160}" />
//                   <div className="card-body">
//                     <span className="wd-dashboard-course-link"
//                       style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
//                       {course.name}
//                     </span>
//                     <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
//                       {course.description}
//                     </p>
//                     <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="text-decoration-none"
              >
                <div className="card rounded-3 overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${course.image}`}
                    alt={`${course.name} Course`}
                    height="160"
                  />
                  <div className="card-body">
                    <span
                      className="wd-dashboard-course-link"
                      style={{
                        textDecoration: "none",
                        color: "navy",
                        fontWeight: "bold",
                      }}
                    >
                      {course.name}
                    </span>
                    <p
                      className="wd-dashboard-course-title card-text"
                      style={{ maxHeight: 53, overflow: "hidden" }}
                    >
                      {course.description}
                    </p>
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="btn btn-primary"
                    >
                      Go
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
