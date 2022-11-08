import { Helmet, HelmetProvider } from 'react-helmet-async';
import { WordsOfTheTeam, SimpleText, FormulariodeContacto } from '../components';

export function HomePage() {

  return(
    
    <>
      <HelmetProvider>
        <Helmet>
          <title>LeotheProdu | Home</title>
          <meta name="description" content="I'm LeotheProdu, a music producer and web developer and this is my portfolio." />
          <meta property="og:title" content="LeotheProdu | Home" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://leotheprodu.com/" />
          <meta property="og:image" content="https://flproductionscr.com/build_main/img/leo-serrano1.webp" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
        </Helmet>

        <div className='contenedor acerca-de-nosotros'>
          <SimpleText 
            titulo='This is my Portfolio' 
            texto={<p>Thanks for visit, I hope that you like it!.</p>} 
          />

          <WordsOfTheTeam 
            titulo={'Hi!'}

            texto="This is me, Leo, I'm a music producer for more than 10 years, and a multi-instrumentalist musician since childhood. My wife, daughter and me live in Siquirres of Limon, Costa Rica I have always been passionate about technology but in the last months I have started to study web development and definitely want to keep doing it, I just love it, on this website I want to show you some of my work, so little by little I will upload my progress, any feedback or if you want me to work for you, just contact me! "
            nombre='Leo Serrano'
            puesto='Web Developer'
            foto='https://flproductionscr.com/build_main/img/leo-serrano1.webp'
            firma='https://flproductionscr.com/build_main/img/leoserrano-signature.webp'
          />

        </div>{/* seccion 2 Acerca de Nosotros */}

        <h3 className="inicio__contact-form__title">Contact me</h3>
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