import AddProfile from '../components/AddProfile';

function AddProfilePage({ onAdd }) {
  return (
    <section className="section">
      <div className="container">
        <h2>Add profile</h2>
        <AddProfile onAdd={onAdd} />
      </div>
    </section>
  );
}
export default AddProfilePage;

