import AddProfile from '../components/AddProfile';

function AddProfilePage() {
  function handleAdd(p) {
    console.log('added', p);
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
