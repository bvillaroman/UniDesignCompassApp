import React, { Component } from "react";
import Layout from '../components/layout';
import star from '../images/star1.jpg';
import ronny from '../images/Ronuel-Diaz.png';
import { Card, CardDeck } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class About extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div id="mission" style={{marginTop: "1em", marginBottom: "1em"}}>
            <Card bg="danger" text="white">
              <Card.Header className="text-center font-weight-bold" style={{fontSize:"2em"}}>
                Our Mission
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Our mission is to help students and professions by providing them with the tools to develop their skills of design.
                  The Design Compass is an educational tool that individuals can use to identify and record the steps in the
                  engineering design process that they use while designing. The Design Compass supports students in representing and
                  documenting their design process, and enables them to share a log of their work with others (teachers, observers
                  and peers).
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div id="team" style={{marginTop: "1em", marginBottom: "1em"}}>
            <h1 className="text-center">The Team</h1>
            <CardDeck className="text-center">
              <Card bg="dark">
                <Card.Img variant="top" src={ronny} />
                <Card.Body style={{backgroundColor: "white"}}>
                  <Card.Title>Ronuel Diaz</Card.Title>
                  <Card.Text className="text-left">
                    Ronuel Diaz, a young eager developer who strives to perfect his skills .
                    Studies Computer Science at CCNY in hopes of becoming a Software Developer.
                    Secretary of CCNY First Robotics and advocate of teaching his profession to
                    those with little or no experience. A strong believer of hard work and practice.
                  </Card.Text>
                  <SocialIcon url="http://linkedin.com/in/ronuel-diaz-716503119" />
                </Card.Body>
                <Card.Footer className="text-muted text-center">Contact</Card.Footer>
              </Card>
              <Card bg="dark">
                <Card.Img variant="top" src={star} />
                <Card.Body style={{backgroundColor: "white"}}>
                  <Card.Title>Abraham Villaroman</Card.Title>
                  <Card.Text className="text-left">
                    Ronuel Diaz, a young eager developer who strives to perfect his skills .
                    Studies Computer Science at CCNY in hopes of becoming a Software Developer.
                    Secretary of CCNY First Robotics and advocate of teaching his profession to
                    those with little or no experience. A strong believer of hard work and practice.
                  </Card.Text>
                  <SocialIcon url="https://www.linkedin.com/in/abraham-villaroman-141618110/" />
                </Card.Body>
                <Card.Footer className="text-muted text-center">Contact</Card.Footer>
              </Card>
              <Card bg="dark">
                <Card.Img variant="top" src={star} />
                <Card.Body style={{backgroundColor: "white"}}>
                  <Card.Title>Kelly Lu</Card.Title>
                  <Card.Text className="text-left">
                    Ronuel Diaz, a young eager developer who strives to perfect his skills .
                    Studies Computer Science at CCNY in hopes of becoming a Software Developer.
                    Secretary of CCNY First Robotics and advocate of teaching his profession to
                    those with little or no experience. A strong believer of hard work and practice.
                  </Card.Text>
                  <SocialIcon url="https://www.linkedin.com/in/kelly-lu-9a9680162/" />
                </Card.Body>
                <Card.Footer className="text-muted text-center">Contact</Card.Footer>
              </Card>
            </CardDeck>
            <CardDeck>
              <Card bg="dark">
                <Card.Img variant="top" src={star} />
                <Card.Body style={{backgroundColor: "white"}}>
                  <Card.Title>Jeter Gutierrez</Card.Title>
                  <Card.Text className="text-left">
                    Ronuel Diaz, a young eager developer who strives to perfect his skills .
                    Studies Computer Science at CCNY in hopes of becoming a Software Developer.
                    Secretary of CCNY First Robotics and advocate of teaching his profession to
                    those with little or no experience. A strong believer of hard work and practice.
                  </Card.Text>
                  <SocialIcon url="https://www.linkedin.com/in/jeter-gutierrez-038b89112/" />
                </Card.Body>
                <Card.Footer className="text-muted text-center">Contact</Card.Footer>
              </Card>
              <Card bg="dark">
                <Card.Img variant="top" src={star} />
                <Card.Body style={{backgroundColor: "white"}}>
                  <Card.Title>Ramon Petgrave</Card.Title>
                  <Card.Text className="text-left">
                    Ronuel Diaz, a young eager developer who strives to perfect his skills .
                    Studies Computer Science at CCNY in hopes of becoming a Software Developer.
                    Secretary of CCNY First Robotics and advocate of teaching his profession to
                    those with little or no experience. A strong believer of hard work and practice.
                  </Card.Text>
                  <SocialIcon url="https://www.linkedin.com/in/ramon-p-0792b897/" />
                </Card.Body>
                <Card.Footer className="text-muted text-center">Contact</Card.Footer>
              </Card>
            </CardDeck>
          </div>
          <div id="contact" style={{marginTop: "1em", marginBottom: "1em"}}>
            <Card bg="warning" text="dark">
              <Card.Header className="text-center font-weight-bold" style={{fontSize: "2em"}}>
                Contact
              </Card.Header>
              <Card.Body>
                <Card.Text style={{fontSize: "1em"}}>
                  <p>Email: contact@unicompass.com</p>
                  <p>Phone Number: (718) 123 - 4567</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
