// src/pages/ProfilesLayout.jsx
import { Outlet } from "react-router-dom";

function ProfilesLayout() {
return (
    <section className="section">
        <div className="container">
        <h1>Test</h1>
        <Outlet />
        </div>
    </section>
);
}
export default ProfilesLayout;
