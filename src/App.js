import './App.css';
import MainHeader from './Components/Page Elements/MainHeader';
import Title from './Components/Page Elements/Title';
import Summary from './Components/Page Elements/Summary';
import BlogList from './Components/Page Elements/BlogList';
import CardDetail from './Components/Component Elements/CardDetail';
import { useSelector } from 'react-redux'

function App() {

  const showDetail = useSelector(state => state.cardDetail.showDetail)

  return (
    <div className="App min-vh-100">
      <MainHeader />
      <Title />
      <Summary />
      <BlogList />
      {showDetail && <CardDetail />}
    </div>
  );
}

export default App;
