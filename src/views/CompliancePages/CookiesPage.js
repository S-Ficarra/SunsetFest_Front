import React from "react";
import './CompliancePages.css'
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import SkullLogo from '../../assets/LogoSkullOnlysmall.png'
import TicketInfoPanel from "../../components/ticketsInfoPanel/ticketInfoPanel";


function CookiesPage () {
    return (
        <>
            <NavBar />
            <div className="TitleContainer">
                <h1>COOKIES</h1>
            </div>
            <div className="ParagraphContainer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi esse laborum voluptatibus, quasi vitae accusantium a obcaecati. Officiis fugiat beatae excepturi neque, omnis consequuntur perspiciatis quos quibusdam quia numquam nisi voluptatem? Error reprehenderit a sint aut saepe ducimus quas.</p>
                <p>Saepe nesciunt assumenda dolores commodi officiis beatae necessitatibus delectus! Blanditiis sed voluptate dicta debitis impedit soluta. Iste unde officiis ad eaque necessitatibus aut, autem labore praesentium sed inventore rem, quae id error, iusto nobis vero aperiam nostrum. Dolorem, consequuntur libero.</p>
                <p>In quo explicabo dolor ipsam, eius ipsa tenetur, voluptas minima cumque harum tempore voluptate molestiae et obcaecati dicta! Aspernatur error totam voluptate quisquam porro sapiente eius delectus laboriosam consequuntur et dicta ab, qui numquam placeat ipsam quod earum. Quaerat, dolore.</p>
                <p>Quae, dolor ratione commodi minima saspernatur. Quam veritatis maxime aliquam quis?</p>
                <p>Magni perferendis aliquid provident cpiente accusantium amet perspiciatis maiores nostrum temporibus quidem similique quibusdam perferendis recusandae, dolores rem unde cumque quasi, sunt repudiandae laborum. Ab nemo sunt iusto porro nam culpa sapiente repellat aommodi fuga voluptatibus aperiam id vel nostrum assumenda! Esse culpa temporibus maxime delectus, inventore veritatis minus asperiores dicta necessitatibus quam aut iusto eaque. Nihil neque iste fugit natus optio et atque! Debitis repudiandae neque et expedita.</p>
            </div>
            <div className="Separator">
                <img src={SkullLogo} alt="Notre logo" />
            </div>
            <TicketInfoPanel />
            <Footer />
        </>
    );
}

export default CookiesPage;