import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  const { pathname } = window.location;

  const isRootPath = pathname === '/';

  if (isRootPath) {
    window.location.href = '/category/0';
  }

  return (
    <div className="App h-screen">
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/category/:categoryId" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
