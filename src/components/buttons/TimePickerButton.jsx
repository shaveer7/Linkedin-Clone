import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimePickerButton = ({ timetitle }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  return (
    <div className="flex flex-col items-start w-[100%]">
      <div className="text-sm mt-5 mb-1 text-[#404040]">{timetitle}</div>
      <button className="flex items-center justify-between hover:shadow-[inset_0_0_0_1px_black] border rounded-sm px-2 py-1 w-[100%] transition-all">
        <DatePicker
          selected={selectedDateTime}
          onChange={(date) => setSelectedDateTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </button>
    </div>
  );
};

export default TimePickerButton;
