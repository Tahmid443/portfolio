import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

// For WhatsApp (using standard icon since square is Pro-only)
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col lg={3} className="mb-4">
                        <h5>Taqi Tahmid</h5>
                        <p>
                            Developer by profession, creative by nature. I build digital experiences that marry clean code with thoughtful interfaces.
                        </p>
                    </Col>
                    <Col lg={3} className="mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="/about" className="text-white text-decoration-none">About</a></li>
                            <li><a href="/projects" className="text-white text-decoration-none">Projects</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </Col>
                    <Col lg={3} className="mb-4">
                        <h5>Contact</h5>
                        <ul className="list-unstyled">
                            <li>Email: tahmid.dhrubo204256@gmail.com</li>
                            <li>Phone: +8801841078255</li>
                        </ul>
                    </Col>
                    <Col lg={3} className="mb-4">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a target='0' href="https://t.me/tahmid443" className="text-white mx-2">
                                <FontAwesomeIcon icon={faTelegram} size="lg" />
                            </a>
                            <a target='1' href="https://github.com/Tahmid443" className="text-white mx-2">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                            <a target='2' href="https://www.linkedin.com/in/taqi-tahmid-ab1a3026a/" className="text-white mx-2">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                            <a target='3' href="https://wa.me/+8801841078255" className="text-white mx-2">
                                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                            </a>
                        </div>
                    </Col>
                </Row>
                <hr className="my-4" />
                <div className="text-center">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Taqi Tahmid. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;