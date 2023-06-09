import React from 'react'
import{Navbar,Nav,NavDropdown} from 'react-bootstrap'

function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="1g">
            <Navbar.Brand href="#home">Garderner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse id="basic-navbar-nav"> 
                <Nav className="mr-auto"> 
                    <Nav.Link href="#home">Dashboard</Nav.Link> 
                    <Nav.Link href="#link">Graph</Nav.Link> 
                    <NavDropdown title="View" id="basic-nav-dropdown"> 
                        {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> 
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item> 
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>  */}
                    </NavDropdown> 
                </Nav> 
            </Navbar.Collapse> 
         </Navbar>

    )
}

export default MyNavbar