import { useEffect, useRef, useState } from "react";
import { IconBrandGithub, IconWorldWww } from '@tabler/icons';

export const PortfolioItem = ({name,thumbnail,shortDescription,link,Type,linkGithub,fullDescription,usedTechnologies}) => {
    const ref = useRef(null);
    const [clickItem, setclickItem] = useState(false)
    function clickEvent(e) {
        clickItem && setclickItem(false);
        !clickItem && setclickItem(true);

    }

    useEffect(() => {
    const ElementWithFX = ref.current;
    

    function mostrarScroll(){
        const scrollTop = document.documentElement.scrollTop;
        const alturaElemento = ElementWithFX.offsetTop;

        if (alturaElemento - 400 < scrollTop) {
        ElementWithFX.style.opacity = 1;
        ElementWithFX.classList.add('fxMostrarArriba');
        
        }
    }     
    if (ElementWithFX !== null){
        document.addEventListener('scroll',mostrarScroll);
    }
    
    return () => {
        document.removeEventListener('scroll',mostrarScroll);
    }

    
    },[]);

    return (
    
        <div ref={ref} onClick={clickEvent} className="portfolio__item fxElement">
            

                {
                    !clickItem &&
                    <>
                        <div className="portfolio__img">
                            <img src={thumbnail} alt={name+"-image"} />
                        </div>
                        <div className="portfolio__text">
                            <h3>{name}</h3>
                            <p>{shortDescription}</p>
                        </div>
                    </>
                }
                {
                    clickItem &&
                    <div className="portfolio-click" style={{backgroundImage: `url("${thumbnail}")` }}>
                        <div className="portfolio-click-blur">
                            <div className="contenedor2">

                                <div className="portfolio__text">
                                    <h3>{name}</h3>
                                    <p>{shortDescription}</p>
                                </div>

                                <div>
                                    <h5>Project Type: <span>{Type}</span></h5>
                                    <p>{fullDescription}</p>
                                </div>

                                <h4>Click below for more detalis</h4>
                                <div className="portfolio__links-click__main">

                                    <a href={link} target='_blank'>
                                        <div className="portfolio__links-click">
                                            <div className="portfolio__links-click__icon">
                                                <IconWorldWww size={50} stroke={1}/> 
                                            </div>

                                            <div className="portfolio__links-click__text">
                                                <h3>Look the live page</h3>
                                            </div>
                                        </div>
                                    </a>

                                    <a href={linkGithub} target='_blank'>

                                        <div className="portfolio__links-click">
                                            <div className="portfolio__links-click__icon">
                                                <IconBrandGithub size={50} stroke={1}/> 
                                            </div>
                                            <div className="portfolio__links-click__text">
                                                <h3>Look the code in Github</h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                }
            

            

        </div>

    )
}
