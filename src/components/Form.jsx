import { useState } from "react";
import "./compCSS.css";

export function Form() {
  // date and heading start
  const [mainHeading, setMainHeading] = useState("Group Name");

  const currentDate = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const getDay = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const selectedDay = new Date(date).getDay();
    return days[selectedDay];
  };
  // date and heading end

  //   From start
  const [totalPlayValue, setTotalPlayValue] = useState(0);
  // const [wining, setWining] = useState(0);
  const [oldValue, setOldValue] = useState(0);
  let [operator, setOperator] = useState("");
  // function handleOnChange(e) {
  //   e.preventDefault();
  //   const value = { totalPlayValue, wining, oldValue };
  // }

  //Form ends
  // section_2 starts
  const [ankValue, setAnkValue] = useState(0);
  const [spValue, setspValue] = useState(0);
  const [dpValue, setdpValue] = useState(0);
  const [jodiValue, setjodiValue] = useState(0);
  // the logic 1
  const ankTotal = ankValue * 9;
  const spTotal = spValue * 150;
  const dpTotal = dpValue * 300;
  const jodiTotal = jodiValue * 90;
  // the logic 2
  const grandTotalWining = ankTotal + spTotal + dpTotal + jodiTotal;

  // section_ ends
  // section_1 starts
  const totalPlayPercent = Math.floor(totalPlayValue / 10) * 1;
  const balance = totalPlayValue - totalPlayPercent;
  let bal_win = 0;
  if (balance > grandTotalWining) {
    bal_win = balance - grandTotalWining;
  } else {
    bal_win = grandTotalWining - balance;
  }
  let TotalCalc = 0;
  // let operator = "+";
  // if (operator == "-") {
  //   TotalCalc = bal_win - oldValue;
  // } else if (operator == "+") {
  //   TotalCalc = bal_win + oldValue;
  // }
  // operator = "+";
  switch (operator) {
    case "-":
      TotalCalc = parseFloat(bal_win) + parseFloat(oldValue);

      break;
    case "+":
      TotalCalc = bal_win - oldValue;

      break;
    default:

    // Handle invalid operator
  }
  // section_1 ends

  return (
    <div className="main_container">
      <div className="date">
        <div>
          <span>{mainHeading}</span>
        </div>
        <div>
          <input type="date" value={selectedDate} onChange={handleDateChange} />
          <a>{getDay(selectedDate)}</a>
        </div>
      </div>
      <div className="form box">
        <form action="/home">
          <label htmlFor="Name">Name :- </label>
          <input type="text" onChange={(e) => setMainHeading(e.target.value)} />
          <hr />
          <label htmlFor="">Total Play:- </label>
          <input
            type="number"
            onChange={(e) => setTotalPlayValue(e.target.value)}
          />
          <hr />

          {/* <label htmlFor="">Wining:- </label>
          <input type="number" onChange={(e) => setWining(e.target.value)} /> */}

          <label htmlFor="">Old Balance:- </label>
          <input type="number" onChange={(e) => setOldValue(e.target.value)} />
          <hr />
          <label htmlFor="operator">Choose :- </label>

          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option value="none">None</option>
            <option value="+">( ➕ ) plus</option>
            <option value="-">( ➖ ) minus</option>
          </select>
        </form>
      </div>
      <div className="section_2 box">
        <label htmlFor="Ank">Ank :- </label>
        <input type="number" onChange={(e) => setAnkValue(e.target.value)} />
        <span> = {ankTotal}</span>
        <hr />
        <label htmlFor="SP">SP :- </label>
        <input type="number" onChange={(e) => setspValue(e.target.value)} />
        <span> = {spTotal}</span>
        <hr />

        <label htmlFor="DP">DP :- </label>
        <input type="number" onChange={(e) => setdpValue(e.target.value)} />
        <span> = {dpTotal}</span>
        <hr />
        <label htmlFor="Jodi">Jodi :- </label>
        <input type="number" onChange={(e) => setjodiValue(e.target.value)} />
        <span> = {jodiTotal}</span>
        <hr />
        <label htmlFor="GrandTotal">Total Wining :- </label>

        <span className="totalSpecialStyling">{grandTotalWining}/-</span>
      </div>
      <div className="section_1 box">
        <label htmlFor="totalPlay">Total Play = </label>
        <span>{totalPlayValue}</span>
        <label htmlFor="%value"> % </label>
        <span>{totalPlayPercent}</span>
        <hr />
        <label htmlFor="Balance">Balance = </label>
        <span>{balance}</span>
        <hr />
        <label htmlFor="wining">Wining = </label>
        <span>{grandTotalWining}</span>
        <hr />
        <label htmlFor="winTotal">bal-win = </label>
        <span>{bal_win}</span>
        <hr />
        <label htmlFor="oldBal">Old-Balance = </label>
        <span>{oldValue}</span>
        <hr />
        <label htmlFor="Total">Grand Total = </label>
        <span className="totalSpecialStyling">{TotalCalc}/-</span>
        <select>
          <option value="none">None</option>
          <option value="+" className="postiveColor">
            {" "}
            मी देणे 🟢{" "}
          </option>
          <option value="-" className="negativeColor">
            {" "}
            तुम्ही देणे 🔴{" "}
          </option>
        </select>
      </div>
      <div>
        <marquee direction="left">--Suresh Bhai</marquee>
      </div>
    </div>
  );
}
