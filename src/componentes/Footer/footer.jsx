import './Footer.css'
 const Footer = () => {
  return (
    <div className="main-footer">
        <div className="container-footer">
            <div className="columna-descripcion">
                <div>
                    <h4 className="titulo-footer">TEMPLOGAMING INC</h4>
                    <ul className="contenido-footer">
                        <li>Telefono: +54-2235639109</li>
                        <li>Buenos Aires, Argentina</li>
                        <li>P sherman calle wallaby 24 sidney</li>
                    </ul>
                </div>
                <div>
                    <h4 className="titulo-footer">Redes:</h4>
                    <ul className="contenido-footer">
                        <li><a className="footer-list" href="https://www.instagram.com/sergiowazzap/" target="_blank">Instagram</a></li>
                        <li><a className="footer-list" href="https://www.facebook.com/LilRayder/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank">Facebook</a></li>
                        <li><a className="footer-list" href="https://twitter.com/Rayder_Chiquito"target="_blank">YouTube</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="titulo-footer">ENCONTRANOS EN:</h4>
                    <ul className="contenido-footer">
                        <li>Templaris</li>
                        <li>Rayder STUFF</li>
                        <li>Ggunda STUFF</li>
                    </ul>
                </div>
            </div>
            <br />
            <div>
                <ul className="inferior-footer">
                    <li>TEMPLO GAMING INC</li>

                    <li className='colorv'>Todos los derechos reservados</li>

                    <li>Terminos del servicio</li>

                    <li className='colorv'>Privado</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer

