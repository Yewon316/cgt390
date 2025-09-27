import AddProfile from '../components/AddProfile';
import { useNavigate } from 'react-router-dom';

function AddProfilePage({ onAdd }) {
  const navigate = useNavigate();

  function handleAdd(p) {
    if (onAdd) { onAdd(p); }         
    navigate('/', { replace: true }); 
  }

  return (
    <section className="section">
      <div className="container">
        <h2>Add profile</h2>
        <AddProfile onAdd={handleAdd} />
      </div>
    </section>
  );
}
export default AddProfilePage;
