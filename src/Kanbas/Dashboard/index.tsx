export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2>
        <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} alt="React JS Course" />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home">Go</a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/nodejs.jpg" width={200} alt="Node JS Course" />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1235/Home">
                CS1235 Node JS
              </a>
              <p className="wd-dashboard-course-title">
                Backend Development with Node.js
              </p>
              <a href="#/Kanbas/Courses/1235/Home">Go</a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/python.jpg" width={200} alt="Python Course" />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1236/Home">
                CS1236 Python
              </a>
              <p className="wd-dashboard-course-title">
                Introduction to Python Programming
              </p>
              <a href="#/Kanbas/Courses/1236/Home">Go</a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/machinelearning.jpg" width={200} alt="Machine Learning Course" />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1237/Home">
                CS1237 Machine Learning
              </a>
              <p className="wd-dashboard-course-title">
                Machine Learning Basics
              </p>
              <a href="#/Kanbas/Courses/1237/Home">Go</a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/databases.jpg" width={200} alt="Databases Course" />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1238/Home">
                CS1238 Databases
              </a>
              <p className="wd-dashboard-course-title">
                Database Design and Management
              </p>
              <a href="#/Kanbas/Courses/1238/Home">Go</a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/htmlcss.jpg" width={200} alt="HTML & CSS Course" />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1239/Home">
                CS1239 HTML & CSS
              </a>
              <p className="wd-dashboard-course-title">
                Web Development with HTML & CSS
              </p>
              <a href="#/Kanbas/Courses/1239/Home">Go</a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/javascript.jpg" width={200} alt="JavaScript Course" />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1240/Home">
                CS1240 JavaScript
              </a>
              <p className="wd-dashboard-course-title">
                JavaScript for Beginners
              </p>
              <a href="#/Kanbas/Courses/1240/Home">Go</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  