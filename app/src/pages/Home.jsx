import { IconCheck, IconHeart, IconMoodSmile } from '@tabler/icons';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { WordsOfTheTeam, SimpleText, FormulariodeContacto, Portfolio } from '../components';

export function HomePage() {

const [showHire, setshowHire] = useState(false);
function changeHire(){
  showHire && setshowHire(false);
  !showHire && setshowHire(true);
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

            texto="It's me, Leo. I'm a music producer with over ten years of experience and have played multiple instruments since I was a child. I live in Siquirres, Limon, Costa Rica, with my family. I have always been passionate about technology; I love it, so in the last few months I have studied web development as an additional service in my portfolio. On this website, I will show you some of my work, so if you want me to work for you, I am here for you!"
            nombre='Leo Serrano'
            puesto='Web Developer'
            foto='https://flproductionscr.com/build_main/img/leo-serrano1.webp'
            firma='https://flproductionscr.com/build_main/img/leoserrano-signature.webp'
          />

        </div>{/* seccion 2 Acerca de Nosotros */}

        <div className='contenedor2'>

          <SimpleText 
          tipo={1}
            titulo='this is my Portfolio' 
            texto={<p>...I hope you like it! {<IconMoodSmile />}</p>} 
          />

          <Portfolio />

        </div>
          <div>
          <SimpleText 
            titulo='...I hope I have been able to convey how much I like this.' 
            texto={
              <>
              <p>These are some projects, but each day I practice, study, and learn for about 8 hours, so in the coming days I'll upload more projects.</p>
              <p>This happens because I {<IconHeart color='#A24936' stroke={3}/>} it! I can't wait for someone to give me the opportunity to work full-time!</p>
              </>
          } 
          />
          </div>
        <div  className="contenedor inicio__contact-form__title">
          {showHire && <h3 onClick={changeHire} className='inicio__contact-form__title__hidden-word'>Hire </h3> }
          
            <h3 onClick={changeHire}>{!showHire &&<span>Contact </span>} me{showHire && <IconCheck size={20} color={'#A24936'} stroke={5}/>}</h3>
          
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