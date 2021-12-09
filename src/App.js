import './App.css';
import MainHeader from './Components/Page Elements/MainHeader';
import About from './Components/Page Elements/About';
import BlogList from './Components/Page Elements/BlogList';
import CardDetail from './Components/Component Elements/CardDetail';
import Resume from './Components/Component Elements/Resume';
// import MainFooter from './Components/Page Elements/MainFooter';
import ContactMe from './Components/Page Elements/ContactMe';
import Thankyou from './Components/Page Elements/Thankyou';
import BlogPost from "./Components/Page Elements/BlogPost"
import { useSelector } from 'react-redux'
import LandingPage from './Components/Page Elements/LandingPage';
import { Switch, Route } from 'react-router-dom'

function App() {

  const showDetail = useSelector(state => state.ui.showDetail)
  const showResume = useSelector(state => state.ui.showResume)

  return (
    <div className="App min-vh-100">
      <MainHeader />
      {showResume && <Resume />}
      {showDetail && <CardDetail />}
      <Switch>
        <Route path="/contactme">
          <ContactMe />
        </Route>
        <Route path="/blogs/:id">
          <BlogPost />
        </Route>
        <Route path="/blogs">
          <BlogList />
        </Route>        
        <Route path="/about">
          <About />
        </Route>
        <Route path="/thankyou">
          <Thankyou />
        </Route>
        <Route path="/" >
          <LandingPage />
        </Route>
             
        {/* <Summary />
        {showResume && <Resume />}
        {showDetail ? <CardDetail /> : <BlogList />}
        <ContactMe />
        <MainFooter /> */}
      </Switch>
    </div>
  );
}

export default App;
