import './Navbar2.0.css'

import React from 'react'

const Navbar2 = () => {
  return (
    <div>
        <section className='sidebar'>
            <header>
                <section className='image-text'>
                    <span className='image'>
                    <i class="ri-robot-line"></i>
                    </span>
                </section>
                <section className='text header-text'>
                    <span className='name'>SneakerBot</span>
                    <span className='description'>API</span>
                </section>
            </header>
        </section>
    </div>
  )
}

export default Navbar2