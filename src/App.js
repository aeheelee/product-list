import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className='App h-screen'>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
