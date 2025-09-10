import './App.css';
import Header from './components/header';
import About from './components/About';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import img from './assets/profile/bob.jpg';
import img2 from './assets/profile/andy.jpg';
import img3 from './assets/profile/amy.jpg';
import Card from './components/Card';
import { useState } from 'react';
import Filters from './components/Filters';
import Wrapper from './components/Wrapper';
//import img1 from './assets/headshot-man.jpg';

function App() {
  const profiles = [
    { name: 'Bob',  role: 'Web developer', email: 'bob@example.com',  img: img  },
    { name: 'Andy', role: 'UX designer',   email: 'andy@example.com', img: img2 },
    { name: 'Amy',  role: 'Engineer',      email: 'amy@example.com',  img: img3 },
  ];

  const roles = Array.from(new Set(profiles.map(p => p.role)));

  const [role, setRole] = useState('');
  const [q, setQ] = useState('');

  function onRole(e) { setRole(e.target.value); }
  function onQ(e)    { setQ(e.target.value); }
  function reset()   { setRole(''); setQ(''); }

  const list = profiles.filter(p =>
    (role === '' || p.role === role) &&
    p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <Header />

      <section className="section">
        <div className="container">
          <About />
        </div>
      </section>

      <Wrapper id="profiles">
        <Filters
          titles={roles}
          value={role}
          onChange={onRole}
          query={q}
          onQueryChange={onQ}
          onReset={reset}
        />

        <div className="cards">
          {list.map(p => {
            if (p.name === 'Andy') {
              return <Card1 key={p.email} title={p.name} text={p.role} img={p.img} />;
            } else if (p.name === 'Bob') {
              return (
                <Card2
                  key={p.email}
                  name={p.name}
                  role={p.role}
                  img={p.img}
                  title={p.name}
                  text={p.role}
                />
              );
            } else {
              return <Card1 key={p.email} title={p.name} text={p.role} img={p.img} />;
            }
          })}
        </div>
      </Wrapper>
    </>
  );
}

export default App;
