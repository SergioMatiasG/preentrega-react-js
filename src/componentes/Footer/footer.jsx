import style from './Footer.module.css'
 const Footer = () => {
  return (
    <div className={style.mainfooter}>
        <div className={style.containerfooter}>
            <div className={style.columnadescripcion}>
                <div>
                    <h4 className={style.titulofooter}>TEMPLOGAMING INC</h4>
                    <ul className={style.contenidofooter}>
                        <li>Telefono: +54-2235639109</li>
                        <li>Buenos Aires, Argentina</li>
                        <li>P sherman calle wallaby 24 sidney</li>
                    </ul>
                </div>
                <div>
                    <h4 className={style.titulofooter}>Redes:</h4>
                    <ul className={style.contenidofooter}>
                        <li><a className={style.footerlist} href="https://www.instagram.com/sergiowazzap/" target="_blank">Instagram</a></li>
                        <li><a className={style.footerlist} href="https://www.facebook.com/LilRayder/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank">Facebook</a></li>
                        <li><a className={style.footerlist} href="https://twitter.com/Rayder_Chiquito"target="_blank">YouTube</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className={style.titulofooter}>ENCONTRANOS EN:</h4>
                    <ul className={style.contenidofooter}>
                        <li>Templaris</li>
                        <li>Rayder STUFF</li>
                        <li>Ggunda STUFF</li>
                    </ul>
                </div>
            </div>
            <br />
            <div>
                <ul className={style.inferiorfooter}>
                    <li>TEMPLO GAMING INC</li>

                    <li className={style.colorv}>Todos los derechos reservados</li>

                    <li>Terminos del servicio</li>

                    <li className={style.colorv}>Privado</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer

