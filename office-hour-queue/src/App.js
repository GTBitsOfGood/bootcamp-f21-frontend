import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Layout>
        <Main/>
      </Layout>
    </div>
  );
}

export default App;
