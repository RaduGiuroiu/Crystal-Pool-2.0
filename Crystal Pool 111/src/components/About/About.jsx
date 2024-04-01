import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faTruckFast,
  faPhone,
  faMoneyBillWaveAlt,
} from "@fortawesome/free-solid-svg-icons";
import AboutImage from "../../assets/about/about_img.jpg";

export default function About() {
  // Icons
  const faBusinessIcon = <FontAwesomeIcon icon={faMoneyBillWaveAlt} />;
  const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />;
  const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />;
  const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;

  return (
    <>
      <section id="about">
        <div class="container">
          <div className="title_headling">
            <h3>Du rêve à la réalité en quelques pas</h3>
            <p className="description1">
              Chaque projet est perçu comme un défi unique, et l'intégralité du
              processus sera gérée par notre équipe.
            </p>
          </div>
          <div className="about_box_wrapper">
            <div className="about_box">
              <div className="about_icon">{faBusinessIcon}</div>
              <div className="about_content">
                <h5>Prise de contact</h5>
                <p>
                  Étant donné que chaque projet est singulier, il est impératif
                  d'organiser une visite sur le site de construction. Veuillez
                  indiquer votre mode de communication privilégié, et notre
                  responsable des ventes vous contactera promptement pour
                  convenir d'un rendez-vous.
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon green_icon">{faChartPieIcon}</div>
              <div className="about_content">
                <h5>Rendez-vous avec notre technicien</h5>
                <p>
                  Il évaluera attentivement vos besoins spécifiques et vous
                  proposera des solutions personnalisées pour répondre à vos
                  attentes. Notre technicien qualifié saura vous guider à
                  travers les différentes options disponibles et vous aidera à
                  choisir ce qui convient le mieux à votre situation. N'hésitez
                  pas à poser toutes vos questions et à exprimer vos
                  préoccupations, notre objectif est de vous offrir un service
                  sur mesure et de qualité.
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon blue_icon">{faTruckFastIcon}</div>
              <div className="about_content">
                <h5>Services pendant et après</h5>
                <p>
                  Notre engagement ne se limite pas à la conclusion des travaux
                  de construction de votre piscine. Nous vous offrons un suivi
                  après la finalisation du chantier pour vous accompagner dans
                  la gestion de votre nouvelle installation. Notre équipe est
                  disponible pour vous assister, vous permettant ainsi de
                  maîtriser pleinement les divers systèmes pour garantir le bon
                  fonctionnement de votre bassin (chauffage, entretien,
                  sécurité, etc.).
                </p>
              </div>
            </div>
          </div>

          <div className="about_box_details">
            <div className="about_col">
              <div className="about_image">
                <img src={AboutImage} alt="about" className="about_main" />
              </div>
              <div className="img_info__box">
                <h6 className="img_info__title">
                  Demandez votre devis aujourd’hui
                </h6>
                <p>
                  Nemo enim ipsam oluptatem quia oluptas <br />
                  sit aspernatur aut odit aut fugit.
                </p>
                <a href="/">
                  {faPhoneIcon} <span>xxxx xxx xxx</span>
                </a>
              </div>
            </div>
            <div className="about_col more_space">
              <h3>Nos réalisations</h3>
              <p>
                Certains nous ont accordé leur confiance. Découvrez quelques
                exemples en images de nos réalisations de haute qualité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
