import React, { useState } from "react";
import './faqs.css'
import { useAllFaqs } from "../../hooks/useAllFaqs";

function Faqs () {

    const { faqs } = useAllFaqs()
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section className="FaqsSection">
            {faqs.map((faqs, index) => (
                <div key={index}>
                    <div className={`QuestionContainer ${openIndex === index ? 'selected' : ''}`} onClick={() => toggleFaq(index)}>
                        <h2>{faqs.question.toUpperCase()}</h2>
                        <div className={`OpenCloseButton ${openIndex === index ? 'expended' : ''}`}>
                            <div class="line line1" ></div>
                            <div class="line line2"></div>
                        </div>
                    </div>
                    <div className={`AnswerContainer ${openIndex === index ? 'openFaq' : ''}`}>
                        <p>{faqs.answer}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default Faqs;