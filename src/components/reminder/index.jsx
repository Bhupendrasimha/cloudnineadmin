/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./reminder.css";
import { Modal } from "antd";


function Reminder({downlaodCsv,deteleEntries}) {
 
  const [isConfirm,setIsConfirm]=useState(false)

  return (
    <>

    <div style={{ display: "flex", gap: "10px" }}>
      <div className="btn" onClick={downlaodCsv}>
        {" "}
        DOWNLOAD Table
      </div>
      <div className="btn" onClick={()=>setIsConfirm(true)}> DELETE Enteries</div>
    </div>

    <Modal
    open={isConfirm}
    onCancel={()=>{
      setIsConfirm(false)
    }}
    footer={false}
    ><div className="modal">
      <p className="modalHeading">Are you sure want to delete all the enteries</p>
      <div className="modalBtnContainer">

  
      <div className="btn" onClick={()=>setIsConfirm(false)}> CANCEL</div>
      <div className="btn" onClick={async()=>{
     await   deteleEntries()
        setIsConfirm()
      }}> DELETE ALL</div>
          </div>
      </div></Modal>
    </>
  );
}

export default Reminder;
