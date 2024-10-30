import React, { useState, useEffect } from "react";
import DetailsTable from "../table";
import axios from "axios";
import "./mainView.css";
import Reminder from "./reminder";
import logo from "../assets/logo.svg";

function MainView() {
  const url = import.meta.env.VITE_BASE_URL;
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);
  const fetchPatients = async () => {
    try {
      let res = await axios.get(`${url}/appointment`);
      console.log(res);
      if (res.status == 200) {
        setPatientsData(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const downlaodCsv = async () => {
    try {
      let res = await axios.get(`${url}/appointment/csv`, {
        responseType: "blob",
      });
      console.log(res, "res");

      const blob = new Blob([res.data], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      let fileName = "Dr";
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    } catch (err) {
      console.log(err);
    }
  };
  const deteleEntries = async () => {
    try {
      let res = await axios.delete(`${url}/appointment/`);
      if (res.status == 204) {
        fetchPatients();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main">
      <div className="bg">

      <img  src={logo} />
      <p>
      Dr. SRIVIDYA'S WOMEN CLINIC
      </p>
      </div>
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={logo} />
          <span className="title">Dr. SRIVIDYA'S CLINIC</span>
        </div>

        <Reminder deteleEntries={deteleEntries} downlaodCsv={downlaodCsv} />
      </div>
      <DetailsTable patientsData={patientsData} />
    </div>
  );
}

export default MainView;
