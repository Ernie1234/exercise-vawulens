import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function Faq({ question, answer }) {
  const [faqShowing, setFaqShowing] = useState(false);
  return (
    <article className="faq" onClick={() => setFaqShowing((prev) => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {faqShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {faqShowing ? <p>{answer}</p>  : ""}
    </article>
  );
}

export default Faq;
