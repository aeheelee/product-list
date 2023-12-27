import './App.css';
import { GlobalStyle } from './styles/globalStyle';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App h-screen">
      <GlobalStyle />
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
