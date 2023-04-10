import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import '../App.css'
import logoEye from "../logoEye.svg"

function NavbarMain() {
    return (
        <Navbar bg='dark' variant="dark">
            <Container>
                <Navbar.Brand href="/"><img src={logoEye} width={80} style={{ marginRight: 20}}/> Currency Watch</Navbar.Brand>
                <Nav className=".justify-content-center">
                    <Nav.Link href="/" style={{ color: '#0dcaf0' }}>Home</Nav.Link>
                    <Nav.Link href="/compare" style={{ color: '#0dcaf0' }}>Compare Currencies</Nav.Link>
                    <Nav.Link href="/timeline" style={{ color: '#0dcaf0' }}>Timeline</Nav.Link>
                    <Nav.Link href="/convert" style={{ color: '#0dcaf0' }}>Convert Currencies</Nav.Link>

                </Nav>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </Container>
        </Navbar>
    )
}

export default NavbarMain;