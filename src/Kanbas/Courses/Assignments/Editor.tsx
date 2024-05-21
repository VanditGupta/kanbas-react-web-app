export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label><br></br>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-ppoints" type="number" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-assignment-group">
                <option>ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade">
                <option>Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
              </select>
              <div>
                <p>Online Entry Options</p>
                <input type="checkbox" /> Text Entry <br />
                <input type="checkbox" /> Website URL <br />
                <input type="checkbox" /> Media Recordings <br />
                <input type="checkbox" /> Student Annotation <br />
                <input type="checkbox" /> File Uploads
              </div>
            </td>
          </tr>
        </table>
        <div>
        <label htmlFor="wd-assign">Assign To</label><br />
        <input id="wd-assign" value="Everyone" /><br /><br />
        <label htmlFor="wd-due-date">Due</label><br />
        <input id="wd-due-date" type="date" value="2024-05-13" /><br /><br />
        <div>
          <div style={{ display: 'inline-block', marginRight: '10px' }}>
            <label htmlFor="wd-available-from">Available from</label><br />
            <input id="wd-available-from" type="date" value="2024-05-06" />
          </div>
          <div style={{ display: 'inline-block' }}>
            <label htmlFor="wd-available-until">Until</label><br />
            <input id="wd-available-until" type="date" value="2024-05-20" />
          </div>
        </div>
        <br />
        <hr />
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
    );
  }
  