import { Container, Button, Card, Carousel, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";



function Home() {
    const navigate = useNavigate(); 
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section text-white py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <h1 className="display-4 fw-bold mb-4">Welcome to Tahmid Portfolio</h1>
                            <p className="lead mb-4">
                                Welcome to my portfolio, where passion meets innovation. Explore my work and let's create something extraordinary together.
                            </p>
                            <div className="m-4 d-flex gap-3 justify-content-center">
                                <Button variant="light" size="lg" className="px-4" onClick={() => navigate("/contact")}>Contact Me</Button>
                                <Button variant="outline-light" size="lg" className="px-4" onClick={() => navigate("/about")}>Download CV</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* projects Section */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center text-white text-decoration-underline mb-5">See Projects</h2>
                    <Row>
                        {
                            <Col lg={4} md={6} className="mb-4">
                                <Card className="h-100 p-3 shadow-sm">
                                    <Card.Img className='rounded' variant="top" src={`./assets/projectImg/portfolio2.png`} />
                                    <Card.Body>
                                        <Card.Title>Portfolio </Card.Title>
                                        <Card.Text>
                                            An one page landing portfolio with dark and light mode facilities
                                        </Card.Text>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <span className="ms-1">4.5</span>
                                            </div>
                                            <Button
                                                target='0'
                                                href='https://dhrubo256.github.io/tahmid-portfolio/'
                                                variant="outline-light" >Live Demo</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        }
                        {
                            <Col lg={4} md={6} className="mb-4">
                                <Card className="h-100 p-3 shadow-sm">
                                    <Card.Img className='rounded' variant="top" src={`./assets/projectImg/cafeino.png`} />
                                    <Card.Body>
                                        <Card.Title>Cafeino</Card.Title>
                                        <Card.Text>
                                            A commercial website for Cafeino BD, featuring a user-friendly interface and responsive design. Built with React JS and Bootstrap.
                                        </Card.Text>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <span className="ms-1">4.5</span>
                                            </div>
                                            <Button
                                                target='1'
                                                href='https://cafeino-bd.netlify.app'
                                                variant="outline-light">Live Demo</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        }
                        {
                            <Col lg={4} md={6} className="mb-4">
                                <Card className="h-100 p-3 shadow-sm">
                                    <Card.Img className='rounded' variant="top" src={`./assets/projectImg/latestportfolio.png`} />
                                    <Card.Body>
                                        <Card.Title>Animated Portfolio </Card.Title>
                                        <Card.Text>
                                            A portfolio with animated background and smooth scrolling effects.
                                        </Card.Text>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <span className="ms-1">4.5</span>
                                            </div>
                                            <Button
                                                target='2'
                                                href='https://dhrubo256.github.io/tahmid-dhrubo/'
                                                variant="outline-light">Live Demo</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        }
                    </Row>
                    <div className="text-center mt-4">
                        <Button variant="outline-light" onClick={() => navigate("/projects")} size="lg">View All Projects</Button>
                    </div>
                </Container>
            </section>

            {/* Testimonials */}
            <section className="py-5 testimonial darkbg">
                <Container>
                    <h2 className="text-center mb-5 text-white text-decoration-underline">What People Say</h2>
                    <Carousel indicators={false}>
                        {
                            <Carousel.Item >
                                <div className="text-center px-5">
                                    <div className="mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className="text-warning mx-1" />
                                        ))}
                                    </div>
                                    <p className="lead mb-4 text-white opacity-75">
                                        "Amazing attention to detail and design! Taqi Tahmid created a beautiful, functional website that perfectly reflects our brand. The communication was smooth throughout the project."
                                    </p>
                                    <h5 className='text-white opacity-50'>— Jonathan Roy, Creative Director at RoyMedia </h5>
                                </div>
                            </Carousel.Item>
                            
                        }
                        {
                            <Carousel.Item >
                                <div className="text-center px-5">
                                    <div className="mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className="text-warning mx-1" />
                                        ))}
                                    </div>
                                    <p className="lead mb-4 text-white opacity-75">
                                        "From start to finish, the experience was flawless. Taqi Tahmid is professional, talented, and truly cares about client satisfaction. I’ll definitely hire him again for future projects."
                                    </p>
                                    <h5 className='text-white opacity-50'>— Ayesha Rahman, Marketing Manager at Nexa Solutions </h5>
                                </div>
                            </Carousel.Item>

                        }
                        {
                            <Carousel.Item >
                                <div className="text-center px-5">
                                    <div className="mb-4 ">
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className="text-warning mx-1" />
                                        ))}
                                    </div>
                                    <p className="lead mb-4 text-white opacity-75">
                                        "Working with Taqi Tahmid was a game changer for our business. He delivered a sleek, responsive website ahead of schedule and went above and beyond with the design. Highly recommended!"
                                    </p>
                                    <h5 className='text-white opacity-50'>Sarah Khan, Founder at TechNova </h5>
                                </div>
                            </Carousel.Item>

                        }
                    </Carousel>
                </Container>
            </section>

            
        </>
    );
}

export default Home;