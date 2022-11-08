/* import React from 'react'; */
import { Outlet } from 'react-router-dom';
import { Header, NavMenu, SocialIcons } from '../components';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Footer } from '../components/footer';



export function Root() {

  return(
    
   /*  <React.StrictMode> */
<>
      <div className='root_header'>
        <NavMenu/>
      
        <div className='root-socialIcons'>
          <SocialIcons size={24} />
        </div>

      </div>
      

      <div className='contenedor-main'>
      
        <Outlet />
      
      </div>
      <div>
        {/* <TawkMessengerReact
          propertyId="6369b59cb0d6371309cdd71e"
          widgetId="1ghaeqrnt"/> */}
      </div>
      <div>
        <Footer />
      </div>
      </>
    /* </React.StrictMode> */
  )

}
