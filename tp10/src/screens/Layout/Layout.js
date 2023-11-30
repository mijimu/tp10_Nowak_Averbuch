import { Link, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../Layout/Layout.css';

const Layout = () => {


    return (
        <>
        <nav className='navBar'>
            <div className='divLinks'>
                <Link to='/Home' className='links'><Button className='buttonLayout'>Home</Button></Link>
                <br></br>
                <Link to='/MisCreaciones' className='links'><Button className='buttonLayout'>Creations</Button></Link>
                <br></br>
                
                <Link to='/InfoNuestra' className='links'><Button className='buttonLayout'>About Us</Button></Link>
                <br></br>
                <Link to='/Favoritos' className='links'><Button className='buttonLayout'>Favourites</Button></Link>
                <br></br>
                

                <br></br>
                
            </div>

            <Outlet></Outlet>
        </nav>


        <div className='containerAllPage'>
            <footer></footer>        
        </div>
        </>
    );
}

export default Layout;