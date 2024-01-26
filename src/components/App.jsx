import { useState, useEffect } from 'react';

import './App.css';
import { Options } from '../components/Options';
import { Feedback } from '../components/Feedback';
import { Decsription } from '../components/Description';

function App() {
  // ---------------------------------------------
  let count = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const valueLocStorage = () => {
    const savedValue = window.localStorage.getItem('KEY_COUNT');
    return savedValue !== null ? JSON.parse(savedValue) : count;
  };

  const [value, setValues] = useState(valueLocStorage);
  const handleClick = option => {
    setValues({ ...value, [option]: value[option] + 1 });
  };
  const totalFeedback = value.good + value.neutral + value.bad;

  useEffect(() => {
    window.localStorage.setItem('KEY_COUNT', JSON.stringify(value));
  }, [value]);
  // -----------------------------------------------------
  return (
    <>
      <Decsription>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
      </Decsription>

      <Options objeckt={count} valueReset={setValues} onClicks={handleClick} total={totalFeedback} />

      <Feedback valueFeedback={value} total={totalFeedback} />
    </>
  );
}

export default App;
