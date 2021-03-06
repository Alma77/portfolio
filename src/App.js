import './App.css';
import { useEffect } from 'react';
import MainHeader from './Components/Page Elements/MainHeader';
import About from './Components/Page Elements/About';
import BlogList from './Components/Page Elements/BlogList';
import Resume from './Components/Component Elements/Resume';
// import MainFooter from './Components/Page Elements/MainFooter';
import ContactMe from './Components/Page Elements/ContactMe';
import Thankyou from './Components/Page Elements/Thankyou';
import BlogPost from "./Components/Page Elements/BlogPost"
import { useSelector } from 'react-redux'
import LandingPage from './Components/Page Elements/LandingPage';
import { Switch, Route } from 'react-router-dom'
import Timeline from './Components/Component Elements/Timeline';
import Capstone from './Components/Page Elements/Capstone';

function App() {

  const showResume = useSelector(state => state.ui.showResume)
  useEffect(() => {
    import(`./Documents/Capstone Project.md`)
        .then(res => {
            fetch(res.default)
            .then(res => res.text())
            .then(res => localStorage.setItem("capstone", res))
        }
    );
})

  return (
    <div className="min-vh-100">
      <MainHeader />
      {showResume && <Resume />}
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
        <Route path = "/myprojects">
          <Timeline />
        </Route>
        <Route path = "/mycapstone">
          <Capstone />
        </Route>
        <Route path="/thankyou">
          <Thankyou />
        </Route>
        <Route path="/" >
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
