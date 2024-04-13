import './header.css';  
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <Link className='logo' to='/'>PrimeFlix</Link>
            <Link className='favoritos' to='/favoritos'>Meus Filmes</Link>
            <h1> TESTE DE HEADER </h1>
        </header>
    )
}

export default Header;