import { personalPortfolio, practicePortfolio } from "../databases/database"
import { PortfolioItem } from "./portfolio-item"


export const Portfolio = () => {

  return (
    <>
        <h2>Personal Projects</h2>

        <div className="portfolio__personal-projects">

        {
            personalPortfolio.map(({ name ,thumbnail, shortDescription})=>(
                <PortfolioItem 
                name={name}
                thumbnail={thumbnail}
                shortDescription={shortDescription}
                key={name}
                />
            ))

        }
        </div>

        <h2>Just for Practice</h2>

        <div className="portfolio__practice-projects">

        {
            practicePortfolio.map(({ name ,thumbnail, shortDescription})=>(
                <PortfolioItem 
                name={name}
                thumbnail={thumbnail}
                shortDescription={shortDescription}
                key={name}
                />
            ))

        }
        </div>
    </>
  )
}
