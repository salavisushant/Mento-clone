import { Link } from 'react-router-dom';
import "./about.css"

export const About = () => {
    

    return (
        <div>
              <div style={{display: 'flex',marginTop:'1%'}}>
                <div>
                    <Link to="/"><img style={{height:'50px',marginLeft:'10px'}} src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg" alt=""/></Link>
                </div>
                <div className="rightNavDiv">
                     <form>
                        <input type="search" placeholder="Topic name,Influences name"/>
                        <button type="submit">Search</button>
                    </form>
                        <button className="btn1">ALL TOPICS</button>
                        <button className="btn1">ABOUT</button>
                        <button className="btn2">LOGIN</button>
                </div>
            </div>
            <div className="about">
                <p className="tag1">Ever wondered what you really like doing?What is your true calling?</p>
                <p className="tag2">We often end up in careers or industries because we are either confused or clueless about what we want to do in life. Also, we don't actually have much information about the numerous career options available to us.</p>
                <p className="tag2">Mento aims to solve that problem by providing first hand in-depth career advice from the biggest and best in each field. You'll get all the information you need to decide if a particular career is for you or not.
                    <iframe style={{ marginTop:'5%'}} width="100%" height="339" src="https://www.youtube.com/embed/0BlEW1nEF3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </p>
                <p className="tag2">From the biggest entrepreneur in India - Ritesh Agarwal, the director of the highest grossing film ever made in India - Nitesh Tiwari, to the biggest selling author in India - Amish Tripathi, the founders of the number one restaurant in India - Bombay Canteen, to the creator of three of the biggest web-series shows in India - Biswapati Sarkar amongst numerous others, Mento brings you an all star lineup to help you decide your future.</p>
                <p className="tag2">Over the coming year we will have a rich content library of over 300 different career options to choose from. You'll also get all the information on how to do a certified course for a particular field as well as find internship opportunities to learn on the job.</p>
                <p className="tag2">We look forward to helping millions of Indians find their calling and discover their dream career.</p>
                <p className="tag2">Cheers to a new India!</p>
            </div>
              <div style={{width: '100%',marginTop: '1%'}}>
                <img style={{width: '100%'}} src="https://user-images.githubusercontent.com/87421852/164062836-82afd210-1240-4aa4-8959-a8f74bce70f6.png" alt="" />
            </div>
        </div>
    )
}