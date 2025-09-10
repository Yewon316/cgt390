const Filters = ({ titles, value, onChange, query, onQueryChange, onReset }) => {
    return (
        <div className="filter-container" style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
        <div className="select-filter">
            <label htmlFor="role">Role:&nbsp;</label>
            <select id="role" value={value} onChange={onChange}>
            <option value="">All</option>
            {titles.map((t) => (
                <option key={t} value={t}>{t}</option>
            ))}
        </select>
        </div>

        <div className="search-filter">
            <label htmlFor="search">Name:&nbsp;</label>
            <input
            id="search"
            type="text"
            placeholder="Search name…"
            value={query}
            onChange={onQueryChange}
        />
        </div>

        <button type="button" onClick={onReset}>Reset</button>
    </div>
    );
};

export default Filters;
