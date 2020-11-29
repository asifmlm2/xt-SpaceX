import Header from './common/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Footer from './common/footer/footer.component';
import './App.scss';

function App() {
  return (
    <div className="applicationWrapper">
        <div className='componentWrapper'>
          <Header />
          <HomePage />
          <Footer />  
        </div>
    </div>
  );
}

export default App;
