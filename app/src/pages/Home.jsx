import { IconMoodSmile } from '@tabler/icons';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { WordsOfTheTeam, SimpleText, FormulariodeContacto, Portfolio } from '../components';

export function HomePage() {

const [showHire, setshowHire] = useState(false);
function changeHire(){
  showHire && setshowHire(false);
  !showHire && setshowHire(true);
  console.log(showHire);
}
  return(
    
    <>
      <HelmetProvider>
        <Helmet>
          <title>LeotheProdu | Portfolio</title>
          <meta name="description" content="I'm LeotheProdu, a music producer and web developer and this is my portfolio." />
          <meta property="og:title" content="LeotheProdu | Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://leotheprodu.com/" />
          <meta property="og:image" content="https://flproductionscr.com/build_main/img/leo-serrano1.webp" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
        </Helmet>

        <div className='contenedor acerca-de-nosotros'>


          <WordsOfTheTeam 
            titulo={'Hi!'}

            texto="It's me, Leo, I'm a music producer for more than 10 years, and a multi-instrumentalist musician since childhood. My wife, daughter and me live in Siquirres of Limon, Costa Rica I have always been passionate about technology but in the last months I have started to study web development and definitely want to keep doing it, I just love it, on this website I want to show you some of my work, so little by little I will upload my progress, any feedback or if you want me to work for you, just contact me! "
            nombre='Leo Serrano'
            puesto='Web Developer'
            foto='https://flproductionscr.com/build_main/img/leo-serrano1.webp'
            firma='https://flproductionscr.com/build_main/img/leoserrano-signature.webp'
          />

        </div>{/* seccion 2 Acerca de Nosotros */}

        <div className='contenedor2'>

          <SimpleText 
          tipo={1}
            titulo='...this is my Portfolio' 
            texto={<p>I hope that you like it! {<IconMoodSmile />}</p>} 
          />

          <Portfolio />

        </div>

        <div  className="contenedor inicio__contact-form__title">
          {showHire && 
            <h3 onMouseOut={()=> changeHire} onMouseOver={()=> changeHire} className='inicio__contact-form__title__hidden-word'>Hire</h3> 
          }
          <h3 ><span>Contact </span> me</h3>
        </div>
        
        <div className='inicio__contact-Form'>
          <svg className='pagelayer-svg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className='pagelayer-shape-fill' d="M1000,99v-99l-1000,0v99h0.1l333.8,-92.8l309.2,69.8l118.8,-16.6"></path>
          </svg>
          </svg>
          

            <FormulariodeContacto />
          

        </div>
        
        
      </HelmetProvider>
    
    </>
  )

}