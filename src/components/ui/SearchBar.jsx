import '../../styles/components-styles/search-bar.css'

export default function SearchBar({ value, onChange }) {
    return (
        <div className="search-bar">
            <div className="container">
                <input
                    type="text"
                    className="search-bar__input glass"
                    placeholder="Buscar por título del libro..."
                    value={value}
                    onChange={e => onChange(e.target.value)}
                />
            </div>
        </div>
    )
}
