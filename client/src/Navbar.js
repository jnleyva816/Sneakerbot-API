import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <section className='navbar'>
        <ul className='link_list'>
          <li className='link'><Link to="/" className='a'>Home</Link></li>
          <li className='link'><Link to="/addresses" className='a'>Addresses</Link></li>
          <li className='link'><Link to="/Proxies" className='a'>Proxies</Link></li>
          <li className='link'><Link to="/Tasks" className='a'>Tasks</Link></li>
          
        </ul>
      </section>
    </div>
  )
}

export default Navbar