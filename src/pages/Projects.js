// src/pages/Projects.js
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Badge, 
  Form, 
  InputGroup,
  ButtonGroup,
  Pagination 
} from "react-bootstrap";
import projectsData from "../data/projectsData";

const Projects = () => {
  // State for search, filters, and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  // Get all unique tags for filters
  const allTags = ["All", ...new Set(projectsData.flatMap(project => project.tags))];

  // Filter projects based on search and active filter
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      activeFilter === "All" || 
      project.tags.includes(activeFilter);
    
    return matchesSearch && matchesFilter;
  });

  // Pagination logic - FIXED VERSION
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Handle page change - FIXED
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers - FIXED
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5 text-white text-decoration-underline">My Projects</h1>
      
      {/* Search Bar */}
      <div className="mb-4">
        <InputGroup>
                  <Form.Control
                      variant="outline-secondary"
            type="text"
            placeholder="Search projects..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on new search
            }}
          />
          <Button variant="outline-secondary">
                      <Button variant="none" className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faSearch} />
                      </Button>
          </Button>
        </InputGroup>
      </div>

     
      {/* Projects Grid */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {currentProjects.length > 0 ? (
          currentProjects.map((project) => (
            <Col key={project.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} bg="secondary" className="me-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer className="border-0">
                  <Button
                    variant="primary"
                    href={project.liveDemo}
                    target="_blank"
                    className="me-2"
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outline-secondary"
                    href={project.sourceCode}
                    target="_blank"
                  >
                    Source Code
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <h4>No projects found matching your criteria</h4>
          </Col>
        )}
      </Row>

      {/* Pagination - FIXED VERSION */}
      {filteredProjects.length > projectsPerPage && (
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.Prev 
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            />
            
            {pageNumbers.map(number => (
              <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </Pagination.Item>
            ))}
            
            <Pagination.Next 
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      )}
    </Container>
  );
};

export default Projects;