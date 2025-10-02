import { createContext, useState } from "react";

const ProfilesContext = createContext({ profiles: [], addProfile: () => {} });
export default ProfilesContext;

export function ProfilesProvider({ children }) {
    const [profiles, setProfiles] = useState([]);
    function addProfile(profile) {
    setProfiles(function (prev) { return prev.concat(profile); });
}

return (
    <ProfilesContext.Provider value={{ profiles, addProfile }}>
        {children}
    </ProfilesContext.Provider>
    );
}
