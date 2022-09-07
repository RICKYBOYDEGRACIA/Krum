import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation(){
    return(
       <> 
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                <Container fluid className='navigation-bar'>
                    <Navbar.Brand href="#" className='navbar-brand' style={{color:'white', fontWeight:"bold"}}>KRUNCH</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end">
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body bg="dark">
                        <Nav className="justify-content-end flex-grow-1 pe-3" >
                        
                        <a href='/Sample'>HOME</a>
                        <a href='/'>ABOUT</a>
                        <a href='/'>PORTFOLIO</a>
                        <a href='/'>SERVICES</a>
                        <a href='/'>TEAM</a>
                        <a href='/'>BLOG</a>
                        <a href='/'>CONTACT</a>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Navigation;