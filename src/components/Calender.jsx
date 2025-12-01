import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const CustomDatePicker = () => {
  return (
    <div className="date-container">

      <DatePicker
        style={{height:'40px',width:'100%'}}
        id="dob"
        className="custom-datepicker"
        placeholder="Select date of birth"
        format="DD-MM-YYYY"
        disabledDate={(current) => current && current > dayjs().endOf("day")}
      />
    </div>
  );
};

export default CustomDatePicker;
