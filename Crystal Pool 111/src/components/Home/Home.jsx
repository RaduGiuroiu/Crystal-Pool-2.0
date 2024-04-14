import React from "react";

import "./Home.css";
import BannerImage from "../../assets/banner/banner-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faShieldHalved,
  faHelmetSafety,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // Icons
  const faChartIcon = <FontAwesomeIcon icon={faChartLine} />;
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />;
  const faChartAreaIcon = <FontAwesomeIcon icon={faHelmetSafety} />;

  return (
    <>
      <section id="home">
        <div className="banner_image"></div>
        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h2 className="title">
                <span>Crystal Pool</span> se spécialise dans la construction de
                piscines haut de gamme.
              </h2>
              <p>
                Que vous ayez des exigences spécifiques en termes de profondeur
                ou de longueur, que vous recherchiez un système de traitement de
                l'eau personnalisé, la possibilité de contrôler votre piscine
                via votre smartphone ou une fonction de lavage automatique,
                toutes vos demandes sont réalisables. De la conception initiale
                à la finalisation du projet, vous bénéficierez d'un
                interlocuteur unique et d'une équipe de professionnels dévoués,
                garantissant une collaboration simple et efficace.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="#contact">
                  Devis Gratuit
                </a>
              </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img src={BannerImage} alt="Banner_image" />
              </div>
              <div className="banner_style_1">
                {faChartIcon}
                <h4>Efficacité</h4>
              </div>
              <div className="banner_style_1 banner_style_2">
                {faShieldIcon}
                <h4>Durabilité</h4>
              </div>
              <div className="banner_style_1 banner_style_3">
                {faChartAreaIcon}
                <h4>Sécurité</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
