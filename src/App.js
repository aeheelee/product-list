import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <div className="App h-screen">
      <GlobalStyle />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
