import { useHistory } from 'react-router-dom';

export const HelloSomeone = () => {
  const history = useHistory();
  return (
    <div>
      <h2>Hello</h2>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};
