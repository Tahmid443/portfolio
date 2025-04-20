import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";



const About = () => {
    return (
        <div className="about-page ">
            {/* Hero Section */}
            <section className="py-5 darkbg text-white" >
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8} className="mx-auto text-center">
                            <h1 className="display-4 fw-bold mb-4">Pushing boundaries in the fast-paced tech landscape.</h1>
                            <p className="lead">
                                While the tech world races forward, I build the engines that propel businesses: precision APIs, scalable apps, and generative AI tools designed to outperform.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* about Section */}
            <section className="py-5 darkbg text-white">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2 className="fw-bold mb-4 text-decoration-underline">About Me</h2>
                            <p>
                                Hey! I'm <h5 className="d-inline">Taqi Tahmid</h5> , a tech-enthusiast student mastering the art of turning ideas into functional reality. I specialize in crafting responsive websites, designing user-friendly apps, and exploring cutting-edge technologies like <h5 className="d-inline">ChatGPT, DeepSeek</h5> etc.
                            </p>
                            <p>
                                When I'm not buried in code or design prototypes, you'll find me debugging my passion projects or learning the next big thing in tech. My goal? To merge creativity with functionality—one pixel and line of code at a time.
                            </p>
                        </Col>
                        <Col md={6} className="d-block mx-auto my-auto">
                            {/* Placeholder for an image (replace with your own) */}
                            <img src={'./assets/projectImg/dhrubo.jpg'} width={'100%'} height={'100%'} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Education/Milestones Timeline (NEW SECTION) */}
            <section className="py-5 darkbg">
                <Container>
                    <h2 className="text-center text-white fw-bold mb-5 text-decoration-underline">Education & Milestones</h2>
                    <Row className="justify-content-center">
                        <Col lg={8}>

                            {/* Timeline Item 1 */}
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-2">
                                    <span className="badge bg-secondary me-3">2024</span>
                                    <h4 className="fw-bold mb-0 text-white opacity-75">Higher Secondary Certificate</h4>
                                </div>
                                <p className="ps-5 text-white opacity-25">
                                    Completed my HSC examination from Abdul Kadir Mollah City College.My result is GPA 5.00 out of 5.00.
                                </p>
                                <hr className="my-4" />
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-2">
                                    <span className="badge bg-secondary me-3">2022</span>
                                    <h4 className="fw-bold mb-0 text-white opacity-75">Secondary School Certificate</h4>
                                </div>
                                <p className="ps-5 text-white opacity-25">
                                    Completed my SSC examination from Nasima Kadir Mollah High School and Homes.My result is GPA 5.00 out of 5.00.
                                </p>
                                <hr className="my-4" />
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-2">
                                    <span className="badge bg-secondary me-3">2019</span>
                                    <h4 className="fw-bold mb-0 text-white opacity-75">Junior School Certificate</h4>
                                </div>
                                <p className="ps-5 text-white opacity-25">
                                    Completed my JSC examination from Nasima Kadir Mollah High School and Homes.My result is GPA 5.00 out of 5.00.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* services Section */}
            <section className="py-5 darkbg text-white">
                <Container>
                    <h2 className="text-center fw-bold mb-5 text-decoration-underline">My Services</h2>
                    <Row>
                        <Col md={4} lg={3} className="mb-4">
                            <h4 className="fw-bold text-white opacity-75">Web Design</h4>
                            <p className="opacity-50">Stunning, responsive websites tailored to your brand’s needs.</p>
                        </Col>
                        <Col md={4} lg={3} className="mb-4">
                            <h4 className="fw-bold text-white opacity-75">App Development</h4>
                            <p className="opacity-50">Powerful, user-friendly apps built to elevate your business.</p>
                        </Col>
                        <Col md={4} lg={3} className="mb-4">
                            <h4 className="fw-bold text-white opacity-75">Generative AI</h4>
                            <p className="opacity-50">Smart use of AI tools that generate content, insights, and efficiency.</p>
                        </Col>
                        <Col md={4} lg={3} className="mb-4">
                            <h4 className="fw-bold text-white opacity-75">Build API</h4>
                            <p className="opacity-50">Seamless APIs that connect your systems effortlessly and securely.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            { /*video hero*/}
            <Container className="py-5 darkbg">
                <Row>
                    <Col md={6} className="my-auto mx-auto">
                        <div className="ratio ratio-16x9 ">
                            <video
                                style={{ opacity: 0.9 }}
                                autoPlay
                                muted
                                loop
                                src="./assets/video/home.mp4"
                                allowFullScreen
                                className="rounded shadow home-video"
                            ></video>
                        </div>
                    </Col>
                    <Col md={6} className="text-white my-auto">
                        <h2 className="fw-bold mb-4">Explore Your Future</h2>
                        
                        <p>
                            I'm a curious coder and creative thinker who loves turning ideas into sleek, responsive websites and apps. With a passion for clean design and clever code, I blend tech and creativity to build digital experiences that truly connect.                        </p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default About;
