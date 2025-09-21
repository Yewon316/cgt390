import { useEffect, useState } from "react";
import Filters from "./Filters";
import Card1 from "./Card1";

function FetchedProfiles() {
    const [titles, setTitles] = useState([]);
    const [title, setTitle]   = useState("");
    const [search, setSearch] = useState("");
    const [items, setItems]   = useState([]);
    const [loading, setLoading] = useState(false);


useEffect(function () {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        setTitles(Array.isArray(data.titles) ? data.titles : []);
    })
        .catch(function () { setErr("Failed"); });
}, []);


useEffect(function () {
    setLoading(true);

    var url;
    if (title === "" && search.trim() === "") {
        url = "https://web.ics.purdue.edu/~zong6/profile-app/fetch-data.php";
    } else {
        url = "https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php"
    }

    fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var raw = Array.isArray(data) ? data : (data && data.profiles) || [];
        if (!Array.isArray(raw)) raw = [];


        var normalized = raw.map(function (p) {
            var name  = p.name  || "Unknown";
            var email = p.email || "";
            var job   = p.title || "";          
            var bio   = p.bio   || "";
            var image = p.image_url || "";    
            return { id: String(p.id), name, email, title: job, bio, image };
        });

        setItems(normalized);
        })
        .catch(function () { setErr("Failed"); })
        .finally(function () { setLoading(false); });
}, [title, search]);


    function handleChange(e) { setTitle(e.target.value); }
    function handleSearch(e) { setSearch(e.target.value); }
    function handleClick()   { setTitle(""); setSearch(""); }

return (
    <section className="section">
        <div className="container">
        <h2>Fetched Data</h2>


        <Filters
            titles={titles}
            value={title}
            onChange={handleChange}
            query={search}
            onQueryChange={handleSearch}
            onReset={handleClick}
        />

        {loading && <div>Loading…</div>}

        <div className="cards">
            {items.map(function (p) {
            return (
                <Card1
                key={p.id}
                title={p.name}
                text={p.title}
                img={p.image}
            />
            );
        })}
            {!loading && items.length === 0 && <div>No results</div>}
        </div>
    </div>
    </section>
);
}

export default FetchedProfiles;
