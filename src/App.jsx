import './App.css';
import Header from './components/header';
import About from './components/About';
import Card1 from './components/Card1';

function App() {
  return (
    <>
      <Header />

      <section className="section">
        <div className="container">
          <About />
        </div>
      </section>

      <section className="section">
        <div className="container cards">
          <Card1
            title="Bob"
            text="Student profile."
            img="/profile/bob.jpg"
          />
          <Card1
            title="Andy"
            text="Student profile."
            img="/profile/andy.jpg"
            featured
          />
        </div>
      </section>
    </>
  );
}

export default App;
