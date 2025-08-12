import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerButton = ({datatitle,onClick}) => {
      const [startDate, setStartDate] = useState(new Date());
  return (
    <button onClick={onClick} className="flex flex-col items-start w-full">
      <div className="text-sm mt-5 mb-1 text-[#404040]">{datatitle}</div>
      <button className="flex items-center justify-between hover:shadow-[inset_0_0_0_1px_black] border rounded-sm px-2 py-1 w-[100%] transition-all">
         <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
      </button>
    </button>
  );
};

export default DatePickerButton;
