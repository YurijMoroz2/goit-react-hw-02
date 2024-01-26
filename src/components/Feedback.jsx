import { Notification } from '../components/Notification';

export const Feedback = ({ total, valueFeedback: { good, neutral, bad } }) => {
  const statickPositive = Math.round(((good + neutral) / total) * 100);

  if (total > 0) {
    return (
      <div>
        <p>Good:{good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total:{total}</p>
        <p>Positive: {statickPositive}%</p>
      </div>
    );
  }
  return <Notification />;
};
