import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import Img1 from "../assets/img/pict1.jpeg";
import Img2 from "../assets/img/pict2.jpeg";
import Img3 from "../assets/img/pict3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Aplikasi Dikantin Polije",
      description: "JTI NOVA",
      imgUrl: projImg1,
    },
    {
      title: "Sistem Informasi MBKM",
      description: "JTI NOVA",
      imgUrl: projImg2,
    },
    {
      title: "Website Company Profile CV Global Technic",
      description: "Last Project Semester 2",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Sertifikat Peserta MSIB Angkatan 1 sebagai Perancang Sistem Informasi MBKM",
      description: "JTI NOVA",
      imgUrl: Img1,
    },
    {
      title: "Sertifikat Peserta MSIB Angkatan 1 sebagai Perancang Aplikasi Dikantin Polije",
      description: "JTI NOVA",
      imgUrl: Img2,
    },
    {
      title: "Sertifikat Organisasi sebagai Anggota Humas HIMANIKA",
      description: "HIMANIKA",
      imgUrl: Img3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience and Awards</h2>
                <p>Some of the projects and awards I have received so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Awards</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Study</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Currently studying at Jember State Polytechnic, Department of Information Technology, Information Management Study Program since 2022. Studied at SMAN 1 Tapen (2019 - 2022)</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
