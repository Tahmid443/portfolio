
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com'; // For sending emails

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [alert, setAlert] = useState({ show: false, variant: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Initialize EmailJS (replace with your credentials)
            emailjs.init('d0PJuOBRitNchwMDJ'); // Get from EmailJS dashboard

            const response = await emailjs.send(
                'service_611wcax', // EmailJS service ID
                'template_qeerkth', // EmailJS template ID
                formData
            );

            if (response.status === 200) {
                setAlert({
                    show: true,
                    variant: 'success',
                    message: 'Message sent successfully! We will contact you soon.'
                });
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            }
        } catch (error) {
            setAlert({
                show: true,
                variant: 'danger',
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setAlert({ show: false }), 5000); // Hide alert after 5s
        }
    };

    return (
        <section className="py-5">
            <Container>
                <h1 className="text-center mb-5 text-white text-decoration-underline">Contact Us</h1>

                {/* Alert Notification */}
                {alert.show && (
                    <Alert variant={alert.variant} onClose={() => setAlert({ show: false })} dismissible>
                        {alert.message}
                    </Alert>
                )}

                <Row className="g-4">
                    {/* Contact Form */}
                    <Col lg={6}>
                        <div className="darkbg p-4 rounded shadow-sm">
                            <h3 className="mb-4 text-white opacity-75">Send us a message</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label className='text-white opacity-50'>Your Name</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className='text-white opacity-50'>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formSubject">
                                    <Form.Label className='text-white opacity-50'>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3 oapacity-50 " controlId="formMessage">
                                    <Form.Label className='text-white opacity-50'>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    variant="outline-warning"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </Form>
                        </div>
                    </Col>

                    {/* Contact Information */}
                    <Col lg={6} className="darkbg rounded shadow-sm">
                        <div className="p-4">
                            

                            <div className="contact-info mb-4">
                                <h2 className="mb-3 text-white opacity-75">Get in touch</h2>
                                <p className="mb-4 text-white opacity-50">Have questions or feedback? We'd love to hear from you! Fill out the form or contact us directly using the information below.</p>

                                <div className="d-flex align-items-center mb-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="mt-1 text-warning" />
                                    <div>
                                        <span className="fw-bold m-2 text-white opacity-75">Email: </span>
                                        <span className='text-white opacity-25'>tahmid.dhrubo204256@gmail.com</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <FontAwesomeIcon icon={faPhone} className="mt-1 text-warning" />
                                    <div>
                                        <span className="fw-bold m-2 text-white opacity-75">Phone: </span>
                                        <span className='text-white opacity-25'>+8801841078255</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 text-warning" />
                                    <div>
                                        <span className="fw-bold m-2 text-white opacity-75">Address: </span>
                                        <span className='text-white opacity-25'>Dhaka-Sylhet Road, Narsingdi, Dhaka, Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-4">
                                <h5 className='text-white opacity-75'>Follow us on social media</h5>
                                <div className="social-icons mt-3">
                                    <a target='0' href="https://t.me/tahmid443" className="text-warning mx-2">
                                        <FontAwesomeIcon icon={faTelegram} size="lg" />
                                    </a>
                                    <a target='1' href="https://github.com/Tahmid443" className="text-warning mx-2">
                                        <FontAwesomeIcon icon={faGithub} size="lg" />
                                    </a>
                                    <a target='2' href="https://www.linkedin.com/in/taqi-tahmid-ab1a3026a/" className="text-warning mx-2">
                                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                    </a>
                                    <a target='3' href="https://wa.me/+8801841078255" className="text-warning mx-2">
                                        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;