import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper"; 

const ProfileDetails = () => {
    const [profile, setProfile] = useState(null);
    const [err, setErr] = useState("");            
    const { id } = useParams();

useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=" + encodeURIComponent(id))
        .then(res => res.json())
        .then(data => {
        if (data && data.id) {
            setProfile(data);
            setErr("");
        } else {
            setErr(data && data.error ? data.error : "Profile not found");
            setProfile(null);
        }
    })
    
    .catch(() => {
        setErr("Failed to load profile");
        setProfile(null);
    });
}, [id]);

const imgSrc = profile ? (profile.image_url || profile.image) : "";

return (
    profile ? (
    <Wrapper>
        {err ? <p style={{ color: "blue" }}>{err}</p> : null}
        <h1>Profile of {profile.name}</h1>
        {imgSrc ? (
            <img src={imgSrc} alt={profile.name} style={{ width: 100, borderRadius: 10 }} />
        ) : null}
        <p>{profile.name}</p>
        <p>{profile.title}</p>
        <p>{profile.email}</p>
    </Wrapper>
    ) : (
    <Wrapper>
        {err ? <p style={{ color: "blue" }}>{err}</p> : <p>Loading..</p>}
    </Wrapper>
    )
);
};

export default ProfileDetails;