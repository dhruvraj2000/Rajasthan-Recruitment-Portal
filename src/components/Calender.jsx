import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const CustomDatePicker = ({ placeholder }) => {
  return (
    <div className="date-container">
      <DatePicker
        style={{ height: "40px", width: "100%" }}
        id="dob"
        className="custom-datepicker"
        format="DD-MM-YYYY"
        placeholder={placeholder}   // <-- dynamic placeholder here
        disabledDate={(current) => current && current > dayjs().endOf("day")}
      />
    </div>
  );
};

export default CustomDatePicker;
