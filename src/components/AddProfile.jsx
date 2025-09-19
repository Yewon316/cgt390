import { useState } from "react";


const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const initialValues = {
    name: "",
    email: "",
    title: "",
    bio: "",
    image: null, 
};

const initialErrors = {
    name: "",
    email: "",
    title: "",
    bio: "",
    image: "",
};

function AddProfile({ onAdd }) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState("");


    function onChange(e) {
    const { name, value, files } = e.target;

    if (name === "image") {
        const file = files && files[0];
        if (!file) {
        setValues((prev) => ({ ...prev, image: null }));
        return;
    }

    const okType = ["image/png", "image/jpeg", "image/jpg", "image/gif"].includes(file.type);
    if (!okType) {
        setErrors((prev) => ({ ...prev, image: "Wrong file type" }));
        setValues((prev) => ({ ...prev, image: null }));
        return;
    }
      if (file.size > 1024 * 1024) {
        setErrors((prev) => ({ ...prev, image: "File is too large" }));
        setValues((prev) => ({ ...prev, image: null }));
        return;
    }
        setErrors((prev) => ({ ...prev, image: "" }));
        setValues((prev) => ({ ...prev, image: file }));
        return;
    }

    setValues((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
}


function validateNow(v) {
    const next = { ...initialErrors };
    const name = stripTags(trimCollapse(v.name));
    const email = stripTags(trimCollapse(v.email));
    const title = stripTags(trimCollapse(v.title));
    const bio = stripTags(v.bio).trim();

    if (!name) next.name = "Name is required.";
    if (!email) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Invalid email.";
    if (!title) next.title = "Title is required.";
    if (!v.image) next.image = "upload an image.";

    return { nextErrors: next, cleaned: { name, email, title, bio, image: v.image } };
}

function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const { nextErrors, cleaned } = validateNow(values);

    const hasErr = Object.values(nextErrors).some((m) => m);
    if (hasErr) {
        setErrors(nextErrors);
        setSubmitting(false);
        return;
    }

    try {
    const imgURL = cleaned.image ? URL.createObjectURL(cleaned.image) : "";
    onAdd({
        name: cleaned.name,
        email: cleaned.email,
        role: cleaned.title,
        img: imgURL,
    });

        setSuccess("Profile added");
        setValues(initialValues);
        setErrors(initialErrors);

    e.currentTarget.reset();


    setTimeout(() => setSuccess(""), 1200);
    } catch (err) {
    setErrors((prev) => ({ ...prev, general: "Failed to submit" }));
    } finally {
    setSubmitting(false);
    }
}

    const { name, email, title, bio, image } = values;

    return (
    <div className="add-profile" style={{ marginTop: "1rem" }}>
    <h2>Add Profile</h2>


    {errors.general && <div style={{ color: "blue", marginBottom: 8 }}>{errors.general}</div>}

    <form onSubmit={onSubmit} noValidate>
        <div style={{ display: "grid", gap: 8, maxWidth: 420 }}>
        <label>
            Name: 
            <input
                name="name"
                type="text"
                value={name}
                onChange={onChange}
                required
                minLength={1}
            />
            {errors.name && <small style={{ color: "blue" }}>{errors.name}</small>}
        </label>

        <label>
            Email: 
            <input
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                required
            />
            {errors.email && <small style={{ color: "blue" }}>{errors.email}</small>}
        </label>

        <label>
            Title:
            <input
                name="title"
                type="text"
                value={title}
                onChange={onChange}
                required  
            />
            {errors.title && <small style={{ color: "blue" }}>{errors.title}</small>}
        </label>

        <label>
            Bio: 
            <textarea
                name="bio"
                value={bio}
                onChange={onChange}
                maxLength={300}
                rows={4}
            />
        </label>

        <label>
            Image
            <input
                name="image"
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/gif"  
                onChange={onChange}
                required
            />
        </label>

        <button
            type="submit"
            disabled={
                submitting ||
                !stripTags(trimCollapse(name)) ||
                !stripTags(trimCollapse(email)) ||
                !stripTags(trimCollapse(title)) ||
                !image
            }
        >
            {submitting ? "Submitting" : "Add Profile"}
            </button>
        </div>
        </form>
    </div>
    );
}

export default AddProfile;
