import React from "react";
import "./plan.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import { plans } from "../../data";
import Card from "../../UI/Card";

function Plan() {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        dignissimos ducimus obcaecati quisquam tenetur? Iste, consectetur ullam.
        Modi.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/Mon</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>;
                })}
                <button className="btn lg">Subscribe</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Plan;
