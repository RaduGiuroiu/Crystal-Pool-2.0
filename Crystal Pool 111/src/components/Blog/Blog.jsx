import React from "react";
import "./Blog.css";
import BlogImage from "../../assets/blog/blog.jpg";

export default function Blog() {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="blog_wrapper">
            <div className="blog_col">
              <h3>Contactez-nous</h3>
              <p>
                Piscines intérieurs , extérieurs , bassin de baignades ,
                poolhouses , vérandas , chambres techniques , rénovations ,
                demande de devis.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="#contact">
                  Demande De Devis
                </a>
              </div>
            </div>
            <div className="blog_col">
              <div className="blog_image">
                <img src={BlogImage} alt="Blog" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
