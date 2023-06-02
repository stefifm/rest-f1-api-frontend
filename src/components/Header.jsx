import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <header>
      <Navbar
        style={{ backgroundColor: '#005792' }}
        variant='dark'
        expand='lg'>
        <Container>
          <Navbar.Brand
            as={NavLink}
            to='/'>
            F1-API
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                as={NavLink}
                to='/'>
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/equipos'>
                Equipos
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/pilotos'>
                Pilotos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
