import React from 'react'

function Navbar() {
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-2'>
           <div className="left" >
                    <div className="logo font-bold text-2xl text-white text-center">
                        <img className="w-48" src="img/Dev Canvas.png" alt="" />
                    </div>
            </div>
                          
            <div className="right-side-nk">
                <img className="w-64" src='../../img/coderightbanenr.png'/>
            </div> 
        </div>
    )
}

export default Navbar