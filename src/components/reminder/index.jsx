/* eslint-disable react/prop-types */
import React from "react";
import "./reminder.css";


function Reminder({downlaodCsv,deteleEntries}) {
 

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div className="btn" onClick={downlaodCsv}>
        {" "}
        DOWNLOAD Table
      </div>
      <div className="btn" onClick={deteleEntries}> DELETE Enteries</div>
    </div>
  );
}

export default Reminder;
