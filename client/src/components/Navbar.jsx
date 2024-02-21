import React from 'react';
import {  FaCartPlus } from 'react-icons/fa6';
import { CiHeart} from 'react-icons/ci'
import { MdPerson} from 'react-icons/md'

 function Navbar() {
    return(
        <div>
            <nav>
                <div>
                    <h2><span className='shoe'>Shoe</span><span className='hub'>hub</span></h2>
                </div>
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