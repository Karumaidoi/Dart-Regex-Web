import { useLocation } from 'react-router-dom';

function RegexPage() {
  const location = useLocation();
  const regex = location.state;
  console.log(regex);
  return <div>{regex?.name}</div>;
}

export default RegexPage;
