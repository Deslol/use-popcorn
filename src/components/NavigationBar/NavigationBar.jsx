import {useState} from "react";
import styles from './NavigationBar.module.css'

export default function NavigationBar({movies}) {
    const [query, setQuery] = useState("");
    return <nav className={styles.navBar}>
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <p className={styles.numResults}>
            Found <strong>{movies.length}</strong> results
        </p>
    </nav>
}