import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

function About() {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        nam repudiandae voluptatem magni voluptates atque fugit error sint natus
        ad repellat facilis possimus, debitis doloribus?
      </Header>

      <section className="about__story">
        <div className="container about__story--container">
          <div className="about__section--image">
            <img src={StoryImage} alt="StoryImage" />
          </div>
          <div className="about__section--content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              fugit aliquam repudiandae fugiat aperiam dolor modi rem asperiores
              dolorum incidunt sequi dolores quasi natus odio explicabo adipisci
              commodi nobis nulla doloremque illo. Eum optio molestiae ipsam nam
              natus nulla nobis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia nesciunt temporibus ad officia eveniet consequuntur ab
              quod culpa dignissimos!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur laboriosam nulla quibusdam velit aliquam inventore.
            </p>
          </div>
        </div>
      </section>
      <section className="vision__story">
        <div className="container vision__story--container">
          <div className="about__section--content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              fugit aliquam repudiandae fugiat aperiam dolor modi rem asperiores
              dolorum incidunt sequi dolores quasi natus odio explicabo adipisci
              commodi nobis nulla doloremque illo. Eum optio molestiae ipsam nam
              natus nulla nobis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia nesciunt temporibus ad officia eveniet consequuntur ab
              quod culpa dignissimos!
            </p>
          </div>
          <div className="vision__section--image">
            <img src={VisionImage} alt="StoryImage" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__story--container">
          <div className="mission__section--image">
            <img src={MissionImage} alt="missionImage" />
          </div>
          <div className="about__section--content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              fugit aliquam repudiandae fugiat aperiam dolor modi rem asperiores
              dolorum incidunt sequi dolores quasi natus odio explicabo adipisci
              commodi nobis nulla doloremque illo. Eum optio molestiae ipsam nam
              natus nulla nobis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia nesciunt temporibus ad officia eveniet consequuntur ab
              quod culpa dignissimos!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur laboriosam nulla quibusdam velit aliquam inventore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
