import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
            <Row key={0}>
              <Col lg={4} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{'Twitter Tweet Toxicity Classifier'}</h3>
                    <div>
                      <p>
                        {`This project uses a NLP (Natural Language Processing) model to detect any tweets that are classified as offensive or hate speech.`} <br></br>
                        {'The model was trained on the following '}
                        <a href="https://www.kaggle.com/datasets/mrmorj/hate-speech-and-offensive-language-dataset" target="_blank" rel="noreferrer" style={{color: '#02aab0'}}>
                          dataset
                        </a>
                        {' from Kaggle using the '}
                        <a href="https://huggingface.co/docs/transformers/model_doc/roberta" target="_blank" rel="noreferrer" style={{color: '#02aab0'}}>
                          RoBERTa model
                        </a>
                      </p>
                      <p className="mb-4">{''}</p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--start"
                      href={'https://github.com/JustinWang239/twitter-classification-training/tree/master'}
                    >
                      Source Code
                    </a>

                    {(
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={'https://huggingface.co/spaces/JustinWang239/tweets-classification'}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </Fade>
              </Col>
              <Col lg={8} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    <a
                      href={'https://twitter.com/home'}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={'title'} filename={'twitter.png'} />
                        </div>
                      </Tilt>
                    </a>
                  </div>
                </Fade>
              </Col>
            </Row>
            <Row key={1}>
              <Col lg={4} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{'Image to Pixel Art Converter'}</h3>
                    <div>
                      <p>
                        {`This project creates a GUI for users to convert local or external images into pixelized images.`} <br></br>
                        {'Users can specify a pixel size (the larger the pixel size, the more pixelated the result).'}
                      </p>
                      <p className="mb-4">{''}</p>
                    </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--start"
                        href={'https://github.com/JustinWang239/Java-Image-To-Pixel-Art'}
                      >
                        Source Code
                      </a>
                  </div>
                </Fade>
              </Col>
              <Col lg={8} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    <a
                      href={'https://user-images.githubusercontent.com/72237445/117251493-bee11b00-ae12-11eb-80d3-e55a20265ad0.png'}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={'title'} filename={'matrix.png'} />
                        </div>
                      </Tilt>
                    </a>
                  </div>
                </Fade>
              </Col>
            </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
