import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    ReactJS Basic</Navbar.Brand>
            </div>
        </Navbar>
    )
}

export default NavbarComponent