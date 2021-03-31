
import './styledComponents/Navbar.css'

const Navbar = () => (
<>
<nav>
    <div>
     <a href="/" className="brand-logo" style={{box: 'black'}}> Home    </a>
     <a href='./About' className='brand-logo' style={{color: 'blue'}}> About   </a>
     <a href='./Gallery' className='brand-logo' style={{color: 'blue'}}> Gallery   </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        </ul>
    </div>
</nav>
</>

)
export default Navbar;