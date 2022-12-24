/**
 * Display the home page
 * @return { HTMLElement }
 */

// import './home.css';
import { Link } from 'react-router-dom'


  function Home() {

    return (
        <main>
        <div className="container">
            <Link to="/"  end>Home</Link>
        </div>
        </main>
    );
 }
 
 export default Home;