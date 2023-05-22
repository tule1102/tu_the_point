import RVAirbaby from "../assets/RVAirbaby.png"
import AnimatatedAvatar from "../assets/AnimatedAvatar.png"
import familyChat from "../assets/familyChat.png"
import CovidFla from "../assets/CovidFla.jpeg"
import UnderConstruction from "../assets/UnderConstruction.jpg"
import tu_le_resume from "../assets/Tu_Le_Resume.pdf"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

import { Container, Navbar, Nav, Card, Button, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <class>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <img className="homeLogo" src={AnimatatedAvatar}/>      
            </Navbar.Brand> 
          <Nav className="ml-auto">
            <Nav.Link href="https://www.linkedin.com/in/connect-tu-le/">
                <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link href="https://github.com/tule1102">
                <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
            <Nav.Link href="mailto:tule1102@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
            </Nav.Link>
            <Nav.Link href={tu_le_resume} download="Tu_Le_Resume">
                <FontAwesomeIcon icon={faDownload} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <section id='home' className='min-h-screen text-center flex flex-col justify-center '>
        <div class="center-image">
          <img src={RVAirbaby} />
        </div>
        <h1 className='min-h-screen text-center flex flex-col justify-center '>Tu Le</h1>
        <h3 class="text-center">Software Engineer, Computer Science Degree '22</h3>
        <p className="description"> 
            Motivated and passionate about Developing Software, Dance, and making an impact wherever I am.  
        </p>
        <br></br>
    </section >
    <section className="cardProjects">
        <Container>
        <h2>Projects</h2>
        <Row md={3}>
        <Card>
            <Card.Img className="cardImages"  src={familyChat} />
                <Card.Body>
                    <Card.Title>FamilyChat</Card.Title>
                    <Card.Text>
                    Cross-platform chat application focusing on making family communication more intutitive, user-friendly, and organized through the use of creating topic chat channels with each group, pins, polls, and event alerts.
                    </Card.Text>
                    <Button href="https://familychat.app" variant="primary">Github Repo</Button>
                </Card.Body>
            </Card>
            <Card>
            <Card.Img className="cardImages" src={CovidFla} />
                <Card.Body>
                    <Card.Title>Fla-Covid-Tracker</Card.Title>
                    <Card.Text>
                    Developed website that would render 3 news articles, current deaths, and infection rates daily for COVID-19 news, tailored to user’s Florida County.
                    </Card.Text>
                    <Button href="https://github.com/POOS-Group-10/fla-covid-tracker" variant="primary">Github Repo</Button>
                </Card.Body>
            </Card>
            <Card>
            <Card.Img className="cardImages"  src={UnderConstruction} />
                <Card.Body>
                    <Card.Title>Rank Kings</Card.Title>
                    <Card.Text>
                    Preliminary selection system for breakdance events, where each compe;tor is scored by ranking against exis;ng compe;tors without a use or point systems. 
                    </Card.Text>
                    <Button href="https://github.com/tule1102/rank_kings" variant="primary">Github Repo</Button>
                </Card.Body>
            </Card>
            </Row>
            {/* </section> */}
        </Container>
        </section>
    </class>)
}

export default App;

