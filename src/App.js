import './App.css';
import MainHeader from './Components/Page Elements/MainHeader';
import Title from './Components/Page Elements/Title';
import Summary from './Components/Page Elements/Summary';
import BlogList from './Components/Page Elements/BlogList';

function App() {
  return (
    <div className="App min-vh-100">
      <MainHeader />
      <Title />
      <Summary />
      <BlogList />
    </div>
  );
}

export default App;
