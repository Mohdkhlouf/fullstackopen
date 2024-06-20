import { useState } from "react";

import "./App.css";

const Statistics = ({ total, average, good }) => {
  if (total == 0)
    return (
      <tr>
        <td>No feedback till now</td>
      </tr>
    );

  return (
    <>
      <StatisticLine text={"Total"} value={total} />
      <StatisticLine text={"Average"} value={average / total} />
      <StatisticLine text={"Positive"} value={good / total} />
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}:</th>
      <td>{value}</td>
    </tr>
  );
};
const Button = ({ handle, text }) => {
  return <button onClick={handle}>{text}</button>;
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage(average + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setAverage(average);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage(average - 1);
  };

  return (
    <>
      <div>
        <h2>Can you please give us your feedback:</h2>
        <Button handle={handleGood} text={"Good"} />
        <Button handle={handleNeutral} text={"Neutral"} />
        <Button handle={handleBad} text={"Bad"} />
      </div>

      <div>
        <h2>feedback statistics:</h2>
        <table>
          <colgroup>
            <col />
            <col />
          </colgroup>
          <tbody>
            <StatisticLine text={"Good"} value={good} />
            <StatisticLine text={"Neutral"} value={neutral} />
            <StatisticLine text={"Bad"} value={bad} />
            <Statistics total={total} average={average} good={good} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
