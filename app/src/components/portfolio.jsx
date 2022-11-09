import { personalPortfolio, practicePortfolio } from "../databases/database"
import { PortfolioItem } from "./portfolio-item"


export const Portfolio = () => {

  return (
    <>
        <h2 className="portfolio__tittle">Personal Projects</h2>

        <div className="portfolio__personal-projects">
        {
            personalPortfolio.map(({ name,thumbnail,shortDescription,link,Type,linkGithub,fullDescription,usedTechnologies})=>(
                <PortfolioItem 
                name={name}
                thumbnail={thumbnail}
                shortDescription={shortDescription}
                key={name}
                fullDescription={fullDescription}
                Type= {Type}
                link={link}
                linkGithub={linkGithub}
                usedTechnologies={usedTechnologies}
                />
            ))

        }

        </div>


        <h2 className="portfolio__tittle">Just for Practice</h2>
        <div className="portfolio__practice-projects">

            {
                practicePortfolio.map(({ name,thumbnail,shortDescription,link,Type,linkGithub,fullDescription,usedTechnologies})=>(
                    

                    <PortfolioItem 
                    name={name}
                    thumbnail={thumbnail}
                    shortDescription={shortDescription}
                    key={name}
                    fullDescription={fullDescription}
                    Type= {Type}
                    link={link}
                    linkGithub={linkGithub}
                    usedTechnologies={usedTechnologies}

                    />
                    
                ))

            }
        
        </div>
    </>
  )
}
