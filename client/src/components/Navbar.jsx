import React from 'react';
import {  FaCartPlus } from 'react-icons/fa6';


 function Navbar() {
    return(
        <div>
            <input
            type='text'
            placeholder='Search item'
             />
            <FaCartPlus />
        </div>
    )
 }

 export default Navbar;