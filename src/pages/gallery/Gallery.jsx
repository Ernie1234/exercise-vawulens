import React from "react";
import "./gallery.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";

function Gallery() {
  const galleryLength = 15;
  const image = [];
  for (let i = 1; i <= galleryLength; i++) {
    image.push(require(`../../images/gallery${i}.jpg`));
  }
  console.log(image);
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        reiciendis qui quas distinctio cumque doloribus consectetur neque
        molestiae.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {image.map((pic, index) => {
            return (
              <article key={index}>
                <img src={pic} alt={`Gallery ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;
