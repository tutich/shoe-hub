import React from 'react';
import {  FaCartPlus } from 'react-icons/fa6';
import { CiHeart} from 'react-icons/ci'
import { MdPerson} from 'react-icons/md'

 function Navbar() {
    return(
        <div>
            <nav>
                <div>
                    <input
                    className="search"
                    type='text'
                    placeholder='Search item'
                     />
                </div>
                <div className="nav-icons">
                    <div className="">
                        <a href="" className='icon'>
                            <FaCartPlus size={28} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="" className='icon'>
                            <CiHeart size={28} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="" className='icon'>
                            <MdPerson size={28}/>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
 }

 export default Navbar;