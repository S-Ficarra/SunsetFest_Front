import React from 'react';
import '../../App.css'
import './HomePage.css';
import NavBar from '../../components/navbar/navbar'
import TicketInfoPanel from '../../components/ticketsInfoPanel/ticketInfoPanel';
import Footer from '../../components/footer/footer';


function HomePage () {
    return (
            <>
                <NavBar />
                <div style={{margin: '0', fontSize: '3em', overflow: 'hidden'}}>
                    <p style={{color: 'white'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum eveniet corporis necessitatibus perferendis vitae ratione veniam at dolore natus, odit deserunt quos atque repellendus neque provident sunt optio blanditiis!
                    Officiis sit adipisci corrupti accusamus voluptas nostrum repellat alias reiciendis doloremque tenetur vitae inventore ea, quae est enim laboriosam fugiat debitis! Beatae, delectus. Illum debitis nisi magni a dignissimos sint!
                    Temporibus, dignissimos! Dolorem nemo sit rem molestiae quae, aut perferendis laborum assumenda? Id, impedit quo dicta rerum odio repellendus in eos? Illo dolore maxime corrupti quo rem autem, amet architecto.
                    Neque et nemo similique adipisci, nesciunt rem culpa nostrum soluta tempora harum, quas iste? Aut consequatur sequi, error fuga ea voluptate, ab, saepe dicta deleniti accusantium sunt? Deserunt, perferendis quibusdam.
                    Dignissimos velit architecto saepe qui labore odio perspiciatis fuga sed aliquid sit odit explicabo eius, suscipit porro maxime modi voluptatum laboriosam illum quod! Praesentium, nihil quaerat repellendus ad esse enim.
                    Recusandae laborum soluta sequi nam suscipit beatae cum voluptas expedita dolore, perspiciatis laudantium assumenda odio maiores illo impedit aliquam harum culpa? Error eum dolorum alias recusandae consectetur ipsam provident deleniti.
                    Est eius ratione deleniti beatae corporis asperiores fugiat optio nobis eveniet voluptas eaque provident non, reiciendis repudiandae consectetur autem excepturi culpa porro cum voluptates exercitationem aperiam quod sint alias. Provident.
                    Iure quaerat, minima saepe veritatis, provident assumenda dolorum, deleniti numquam aliquam enim labore. Sequi amet nisi autem distinctio, assumenda quia eos ipsam ab consequatur alias accusantium ducimus molestias quas reiciendis.
                    Voluptas porro assumenda explicabo beatae, quibusdam eligendi debitis nisi aspernatur fuga consequuntur ab iure voluptate cupiditate molestiae nesciunt reiciendis delectus accusantium praesentium, voluptatem officia fugit animi! At facilis delectus natus?
                    </p>
                </div>
                <TicketInfoPanel />
                <Footer />
            </>
    );
}

export default HomePage;