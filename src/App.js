import './App.css';
import MainHeader from './Components/Page Elements/MainHeader';
import Title from './Components/Page Elements/Title';
import Summary from './Components/Page Elements/Summary';
import BlogList from './Components/Page Elements/BlogList';
import CardDetail from './Components/Component Elements/CardDetail';
import Resume from './Components/Component Elements/Resume';
import MainFooter from './Components/Page Elements/MainFooter';
import ContactMe from './Components/Page Elements/ContactMe';
import { useSelector } from 'react-redux'

function App() {

  const showDetail = useSelector(state => state.ui.showDetail)
  const showResume = useSelector(state => state.ui.showResume)

  return (
    <div className="App min-vh-100">
      <MainHeader />      
      <Title />
      <Summary />
      {showResume && <Resume />}
      <BlogList />
      {showDetail && <CardDetail />}
      <ContactMe />
      <MainFooter />
    </div>
  );
}

export default App;
