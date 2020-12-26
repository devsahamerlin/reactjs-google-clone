import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__foot">

                <div className="footer_footLeft">
                    <Link to='/publicite'>Publicité</Link>
                    <Link to='/entrreprise'>Entreprise</Link>
                    <Link to='/apropos'>A Propos</Link>
                    <Link to='/store'>Comment fonctionne la recherche google ?</Link>
                </div>

                <div className="footer_footRight">
                    <Link to='/confidentialite'>Confidentialité</Link>
                    <Link to='/conditions'>Conditions</Link>
                    <Link to='/parametres'>Paramètres</Link>

                </div>
            </div>
        </div>
    );
}

export default Footer
