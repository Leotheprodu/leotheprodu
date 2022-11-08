import PropTypes from 'prop-types'

export function Header ({imgLink, pagina}) {

  return (

    <div className={"header"+" "+pagina+"-contenedor"}>

      <div>
        
      

      </div>


    </div>

  )

}
Header.propTypes = {
    
  pagina: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  
}
Header.defaultProps = {

  imgLink: "",
  pagina: "default",

}