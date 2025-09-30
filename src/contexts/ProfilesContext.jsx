/*import { createContext } from "react";
import AddProfile from "../components/AddProfile";

const ProfilesContext = createContext();

export default ProfilesContext;

const initialProfiles = [
    { name: 'Bob',  role: 'Web developer', email: 'bob@example.com',  img: img  },
    { name: 'Andy', role: 'UX designer',   email: 'andy@example.com', img: img2 },
    { name: 'Amy',  role: 'Engineer',      email: 'amy@example.com',  img: img3 },
];

export const ProfilesProvider = ({children}) => {
    const [profiles,setProfiles] = useState(initialProfiles);
    const AddProfiles = (profile) => {
        setProfiles((prev) => [...prev,p]);
    }
    return <ProfilesContext.Provider value={{Profiles, AddProfile}}>
        {children}
    </ProfilesContext.Provider>
    
}*/
// ProfilesContext.jsx — 프로필 목록과 addProfile 관리 (PPT 패턴)
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
