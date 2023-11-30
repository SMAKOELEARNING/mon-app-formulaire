import React from 'react';
import './Monformulaire.css'; // Assurez-vous que le chemin est correct
import Logo from './img/SMAKO.png'; // Remplacez par le chemin réel vers votre image de logo

function onloadTurnstileCallback() {
<div class="cf-turnstile" data-sitekey="0x4AAAAAAAN4rN5HEOqqoxakY_9r_MR1Eq4" data-callback="javascriptCallback"></div>
}
function Monformulaire() {
  return (
    <div className="formulaire-container">
      <h1>Connectons-nous !</h1>
      <p>Plateforme en maintenance, ne perdons pas contact ! On vous prévient dès que c'est fini.</p>
      <form action="https://submit-form.com/gwzbhyHim">
      <img src={Logo} alt="Logo" className="logo" /> {/* Logo ajouté ici */}
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required="" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" required="" />

        <input
    type="hidden"
    name="_redirect"
    value="https://smakogroup.com/"
  />
        <button type="submit">Envoyer et Retourner à l'accueil</button>
      </form>
    </div>
  );
}

export default Monformulaire;
