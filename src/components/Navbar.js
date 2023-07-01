import React from 'react';

function Navbar(){
    return(
        <div className='row bg-dark text-white p-3'>
            <div className='col-1'>
                <a href="#" className='text-white'> Link 1 </a>
            </div>
            <div className='col-1'>
                <a href="#" className='text-white'> Link 2 </a>
            </div>
            <div className='col-1'>
                <a href="#" className='text-white'> Link 3 </a>
            </div>
         </div>
    )
}

export default Navbar;