import './App.css';
import Header from './components/header';
import About from './components/About';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import img from './assets/profile/bob.jpg';
import img2 from './assets/profile/andy.jpg';
import Card from './components/Card';
//import img1 from './assets/headshot-man.jpg';

function App() {
  return (
    <>
      <Header />

      <section className="section">
        <div className="container">
          <About />
        </div>
      </section>

      <Card title="Profiles">
          <Card1
            name="Bob"
            role="Web developer"
            img={img}
          />
          <Card2
            name="Andy"
            role="UX designer"
            img={img2}
            featured
          />
          </Card>
    </>
  );
}

export default App;
