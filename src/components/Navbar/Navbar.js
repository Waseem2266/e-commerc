import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <>

    <Nav
      activeKey="/home"
    
    style={{background:"black" , height:"6vh" , display:"flex", alignItems:"center", position:"fixed", top:"0", width:"100%"}}
    >
      <Nav.Item>
        <Nav.Link href="/home"><Link to={"/"}>Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to={"Products"}>Products</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"><Link to={"About"}>About</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
    
        </Nav.Link>
      </Nav.Item>
    </Nav>
        </>
    )
}
export default Navbar