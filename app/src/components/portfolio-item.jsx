import { useEffect, useRef } from "react";


export const PortfolioItem = ({name,thumbnail,shortDescription, link}) => {
    const ref = useRef(null);

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
    
        <div ref={ref} className="portfolio__item fxElement">
            <div className="portfolio__img">
                <img src={thumbnail} alt={name+"-image"} />
            </div>

            <div className="portfolio__text">
                <h3>{name}</h3>
                <p>{shortDescription}</p>

            </div>

        </div>

    )
}
