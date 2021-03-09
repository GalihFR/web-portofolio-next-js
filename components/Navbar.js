import Link from 'next/link';
import { withRouter } from 'next/router';

const Navbar = ({ router }) => {
    const navbars = [
        {text: 'Home', url: '/'},
        {text: 'Experirence', url: '/experience'},
        {text: 'Contact Me', url: '/contact'}
    ]
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link href="/"><a className="logo">Galih.</a></Link>

                    <ul className="nav-links">
                        {
                            navbars.map(item => (
                                <li><Link href={item.url}><a className={`nav-item ${router.pathname === item.url ? 'active' : ''}`}>{item.text}</a></Link></li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Navbar);