import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;