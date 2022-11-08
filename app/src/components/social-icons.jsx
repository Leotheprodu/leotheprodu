import { IconBrandGithub, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons';
import PropTypes from 'prop-types'

export function SocialIcons({size, stroke, claseCSS}) {

    return (

        
        <div className="socialIcons">

           
            <a href="https://github.com/Leotheprodu" target="_blank">
                <IconBrandGithub
                    className={'social-icon'+' '+claseCSS}
                    size={size} // set custom `width` and `height`
                    stroke={stroke}  // set `stroke-width`
                />
            </a>
            <a href="https://twitter.com/leonardosays03" target="_blank">
                <IconBrandTwitter 
                    className={'social-icon'+' '+claseCSS}
                    size={size} // set custom `width` and `height`
                    stroke={stroke}  // set `stroke-width`
                />
            </a>
            <a href="https://www.instagram.com/leotheprodu/" target="_blank">
                <IconBrandInstagram 
                    className={'social-icon'+' '+claseCSS}
                    size={size} // set custom `width` and `height`
                    stroke={stroke}  // set `stroke-width`
                />
            </a>


        </div>
            

        

    )


}

SocialIcons.propTypes = {
    
    size: PropTypes.number.isRequired,
    stroke: PropTypes.number.isRequired,
    claseCSS: PropTypes.string,
    
}

SocialIcons.defaultProps = {

    size: 18,
    stroke: 2,

}