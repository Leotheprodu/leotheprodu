import { useState } from "react";


export function NavMenu() {

  return(

    <>
      <div  className='header__nav'>
        <div  className='header__web-tittle'>
          <h3 >LeotheProdu</h3>
        </div>
    
        <div className="header__container_dyn-txt">
          <ul className="header__dynamic-txts">
            <li><span>Developer</span></li>
            <li><span>Producer</span></li>
            <li><span>Musician</span></li>
            <li><span>Designer</span></li>
          </ul>
        </div>
      
        

      </div>
    </>

  

  )

}