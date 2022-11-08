import { SocialIcons } from "./social-icons";



export function Footer () {

    const copyright = new Date();

    const actualYear = copyright.getFullYear();
    
    return(

        <div className="footer">

            <div className="footer_content">
                
            <p><span>© 2013 - {actualYear} - </span> LeotheProdu</p>
            
            <SocialIcons size={25} />

            </div>

            
            


        </div>

    )
}