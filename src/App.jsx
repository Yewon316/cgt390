import './App.css';
import Header from './components/header';
import About from './components/About';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import img from './assets/profile/bob.jpg';
import img2 from './assets/profile/andy.jpg';
import img3 from './assets/profile/amy.jpg';
import { useState, useEffect } from 'react';
import Filters from './components/Filters';
import Wrapper from './components/Wrapper';
import AddProfile from './components/AddProfile';
import FetchedProfiles from './components/FetchedProfiles';

import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddProfilePage from './pages/AddProfilePage'; 

function App() {

  const initialProfiles = [
    { name: 'Bob',  role: 'Web developer', email: 'bob@example.com',  img: img  },
    { name: 'Andy', role: 'UX designer',   email: 'andy@example.com', img: img2 },
    { name: 'Amy',  role: 'Engineer',      email: 'amy@example.com',  img: img3 },
  ];
  const [items, setItems] = useState(initialProfiles);

  const roles = Array.from(new Set(items.map(p => (p.role || '').trim())));
  const [role, setRole] = useState('');
  const [q, setQ] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('theme-light', 'theme-dark');
    html.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  }, [theme]);

  function onRole(e) { setRole(e.target.value); }
  function onQ(e)    { setQ(e.target.value); }
  function reset()   { setRole(''); setQ(''); }
  function handleAddProfile(p) { setItems(prev => [...prev, p]); }


  function HomeContent() {
    return (
      <>
        <Header
          theme={theme}
          onToggleTheme={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
        />

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

          <AddProfile onAdd={handleAddProfile} />

          <div className="cards">
            {items
              .filter(function (p) {
                var r = (p.role || '').trim();
                var byRole = (role === '') || (r === role);
                var byName = p.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
                return byRole && byName;
              })
              .map(function (p) {
                if (p.name === 'Bob') {
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
                  return (
                    <Card1
                      key={p.email}
                      title={p.name}
                      text={p.role}
                      img={p.img}
                    />
                  );
                }
              })}
          </div>
        </Wrapper>

        <Wrapper>
          <FetchedProfiles/>
        </Wrapper>
      </>
    );
  }


  function NotFound() {
    return (
      <section className="section">
        <div className="container">
          <h2>Not found</h2>
        </div>
      </section>
    );
  }

  return (
    <HashRouter>
      <nav style={{ display:'flex', gap:12, padding:'12px 16px' }}>
        <Link to="/">Home</Link>
        <Link to="/add">Add profile</Link>
        <Link to="/about">About</Link>
        <Link to="/others">Other profiles</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomeContent />} />

        <Route path="/add" element={<AddProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/others" element={
          <section className="section">
            <div className="container">
              <h2>Other profiles</h2>
              <FetchedProfiles />
            </div>
          </section>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
