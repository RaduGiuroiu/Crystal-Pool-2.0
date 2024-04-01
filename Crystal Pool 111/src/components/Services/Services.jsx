import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGear,
  faCoins,
  faSwimmingPool,
  faPersonSwimming,
  faHouseUser,
  faWater,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  // Icons
  const faSwimmingPoolIcon = <FontAwesomeIcon icon={faSwimmingPool} />;
  const faPersonSwimmingIcon = <FontAwesomeIcon icon={faPersonSwimming} />;
  const faHouseUserIcon = <FontAwesomeIcon icon={faHouseUser} />;
  const faWaterIcon = <FontAwesomeIcon icon={faWater} />;
  const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />;
  const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />;
  return (
    <>
      <div id="services">
        <div className="container">
          <div className="title_headling">
            <h3>Différentes types de constructions</h3>
            <p>
              Chez Crystal Pool, notre objectif est d'offrir un service
              d'excellence en accordant une attention particulière à chaque
              détail. Nous nous engageons à vous fournir un devis clair et
              précis, accompagné de conseils avisés concernant les multiples
              options qui s'ouvrent à vous.
            </p>
          </div>
          <div className="service_wrapper">
            <div className="service_box">
              <div className="service_icon blue_icon">{faSwimmingPoolIcon}</div>
              <h4 className="number">01</h4>
              <div className="service_content">
                <h5>Piscines intérieurs</h5>
                <p>
                  Les piscines intérieures gagnent en popularité en raison de
                  leur utilisation possible toute l'année. Intégrées de manière
                  harmonieuse dans le cadre de la maison, ces piscines offrent
                  un plaisir continu tout au long des saisons. Elles peuvent
                  être conçues pour s'intégrer parfaitement à l'habitat existant
                  ou être envisagées comme des piscines extérieures sur
                  lesquelles une extension de la maison est construite. Pour
                  garantir un confort optimal, il est essentiel de prendre en
                  considération plusieurs éléments essentiels tels qu'un bon
                  éclairage naturel, un système de traitement de l'eau adapté,
                  et une déshumidification efficace. Pourquoi ne pas offrir à
                  votre famille un petit coin de paradis avec Crystal Pool ?
                </p>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">{faPersonSwimmingIcon}</div>
              <h4 className="number">02</h4>
              <div className="service_content">
                <h5>Piscines extérieurs</h5>
                <p>
                  Votre piscine est bien plus qu'un simple investissement. Elle
                  vous offre d'agréables moments de détente, échappant à la
                  routine quotidienne, et vous permet de partager des instants
                  de bonheur authentique avec votre famille et vos proches. En
                  outre, votre piscine est un atout indéniable qui valorise
                  votre propriété. Il vous appartient de définir les
                  caractéristiques de votre piscine : forme, profondeur,
                  dimensions, etc. Choisissez une piscine qui reflète
                  véritablement vos préférences. Notre consultant est disponible
                  pour vous orienter dans la réalisation de ce magnifique
                  projet, de la construction du bassin (avec une garantie à vie)
                  à l'aménagement de votre jardin.
                </p>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon green_icon">{faHouseUserIcon}</div>
              <h4 className="number">03</h4>
              <div className="service_content">
                <h5>Pool-house</h5>
                <p>
                  Votre piscine peut devenir fonctionnelle en toutes saisons en
                  intégrant un poolhouse, une véranda ou une pergola. Le
                  poolhouse se révèle être un ajout parfait à votre espace
                  piscine : Il peut accueillir l'équipement technique de la
                  piscine, servir de lieu de stockage, offrir des installations
                  sanitaires et des vestiaires, ainsi qu'un espace barbecue.
                  Toutes ces options sont disponibles pour répondre à divers
                  besoins.
                </p>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">{faWaterIcon}</div>
              <h4 className="number">04</h4>
              <div className="service_content">
                <h5>Bassins de baignade</h5>
                <p>
                  Les piscines naturelles gagnent en popularité. Dotées de coûts
                  d'entretien minimes et d'un traitement biologique de l'eau,
                  ces étendues d'eau offrent des espaces de baignade agréables
                  en été et de charmants bassins de jardin tout au long de
                  l'année. La filtration biologique est garantie par une zone
                  végétale abondante, intégrée à la structure même du bassin. Un
                  système entièrement naturel, excluant tout recours à des
                  produits chimiques.
                </p>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon green_icon">{faUserGearIcon}</div>
              <h4 className="number">05</h4>
              <div className="service_content">
                <h5>Chambre technique</h5>
                <p>
                  Crystal Pool s'engage à garantir une conception et une
                  construction optimales de votre piscine en utilisant des
                  matériaux de haute qualité et les dernières technologies
                  disponibles sur le marché. En collaborant avec des marques
                  renommées telles que Hayward, Besgo, Waterco, Pentair,
                  Calplas, Speck, Pahlen, Crystal Pool vous offre la possibilité
                  de bénéficier d'une piscine entièrement personnalisée. Des
                  systèmes performants peuvent être installés pour optimiser
                  l'entretien et la longévité de votre piscine. Notre équipe est
                  à votre disposition pour vous accompagner dans la maîtrise de
                  ces divers systèmes, assurant ainsi le bon fonctionnement de
                  votre bassin (chauffage, maintenance, sécurité, etc.).
                </p>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon blue_icon">{faCoinsIcon}</div>
              <h4 className="number">06</h4>
              <div className="service_content">
                <h5>Rénovations et service après vente</h5>
                <p>
                  Crystal Pool a la capacité de transformer votre piscine
                  existante en un véritable havre de paix. Après avoir évalué
                  l'état de votre bassin, nous travaillons en collaboration avec
                  vous pour élaborer un plan sur mesure. Vos désirs orientent la
                  voie à suivre, et nous nous engageons à vous soutenir à chaque
                  étape de votre projet, et même au-delà de sa concrétisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
