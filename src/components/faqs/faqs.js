import React, { useState } from "react";
import './faqs.css'
import { useAllFaqs } from "../../hooks/useAllFaqs";

function Faqs () {

    const { allFaqs } = useAllFaqs()
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
            {allFaqs.map((faqs, index) => (
                <div key={index}>
                    <div className={`QuestionContainer ${openIndex === index ? 'selected' : ''}`} onClick={() => toggleFaq(index)}>
                        <h2>{faqs.question.toUpperCase()}</h2>
                        <div className={`OpenCloseButton ${openIndex === index ? 'expended' : ''}`}>
                            <div class="line line1" ></div>
                            <div class="line line2"></div>
                        </div>
                    </div>
                    <div className={`AnswerContainer ${openIndex === index ? 'openFaq' : ''}`}>
                        <div dangerouslySetInnerHTML={{ __html: faqs.answer }}></div>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default Faqs;