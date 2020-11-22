import React, { useState } from "react";
import "../Account/Account.css";
import Panel from "../sidePanel";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    Month: "January",
    Paper: 5,
    Plastic: 5,
  },
  {
    Month: "February",
    Paper: 3,
    Plastic: 4,
  },
  {
    Month: "March",
    Paper: 4,
    Plastic: 6,
  },
  {
    Month: "April",
    Paper: 3,
    Plastic: 7,
  },
  {
    Month: "May",
    Paper: 6,
    Plastic: 2,
  },
  {
    Month: "June",
    Paper: 8,
    Plastic: 4,
  },
  {
    Month: "July",
    Paper: 9,
    Plastic: 2,
  },
  {
    Month: "August",
    Paper: 2,
    Plastic: 4,
  },
  {
    Month: "September",
    Paper: 4,
    Plastic: 6,
  },
  {
    Month: "October",
    Paper: 5,
    Plastic: 8,
  },
  {
    Month: "Nov",
    Paper: 2,
    Plastic: 2,
  },
  {
    Month: "December",
    Paper: 0,
    Plastic: 0,
  },
];

function Account(props) {
  return (
    <div className="dashboardMain">
      <Panel />
      <div className="rightContent">
        <div className="chart">
          <h1>Your Recycling Statistics</h1>
          <BarChart
            width={1000}
            height={600}
            barCategoryGap={10}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Paper" stackId="a" fill="#17224d" />
            <Bar dataKey="Plastic" stackId="a" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Account;
