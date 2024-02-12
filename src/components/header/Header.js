import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import { faGithub } from '@fortawesome/free-brands-svg-icons';




const Header = () => {
 
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="https://github.com/MPlogSWDev/movie-gold-v1" style={{"color":'gold'}}>
                    <FontAwesomeIcon icon ={faGithub}/>This Code On Github
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                        <NavLink className ="nav-link" to="/">Home</NavLink>
                        {/* <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>       */}
                    </Nav>
                    {/* <Button variant="outline-info" className="me-2">Login</Button> */}
                    <Navbar.Brand href="/" style={{"color":'red'}}  className ="nav-link" to="https://github.com/MPlogSWDev">
                    <FontAwesomeIcon icon ={faGithub}/>My Github</Navbar.Brand>      
                </Navbar.Collapse>
            </Container>
        </Navbar>
      )
    }

export default Header