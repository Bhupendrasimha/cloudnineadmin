import React, { useEffect, useState } from "react";

import { Table, Tooltip } from "antd";
import "./table.css";


// eslint-disable-next-line react/prop-types
function DetailsTable({patientsData}) {
 

  console.log(patientsData);
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "number",
      key: "phoneNumber",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",

      render: (e) => (
        <Tooltip placement="bottom" title={e}>
          <p className="para">{e}</p>
        </Tooltip>
      ),
    },
  ];

  return (
    <div className="mainTable">
      <Table
        dataSource={patientsData}
        columns={columns}
        pagination={false}
        scroll={{
          x: "max-content",
          y: 110 * 5,
        }}
      />{" "}
    </div>
  );
}

export default DetailsTable;
