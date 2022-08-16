import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {Alert, ListGroup, Card, CardGroup, Badge} from 'react-bootstrap'
import {LightningCharge, Markdown, PeopleFill } from 'react-bootstrap-icons';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <><header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{"We are committed to provide 100% technical support for developers and tech enthusiasts"}</h1> */}
        <p className="hero__subtitle" style={{fontWeight:"bold"}}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/The-Complete-Hub/writers-program">
            Find out More
          </Link>
        </div>
      </div>
    </header>
    <section>
    <Alert variant="secondary">
      <Alert.Heading style={{fontSize:25}}>All Accepted Topics</Alert.Heading>
      <p>
        We accept topics focused on:
      </p>
      <hr />
      
      <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">LowCode</ListGroup.Item>
      <ListGroup.Item as="li">BlockChain - Web 3 & CryproCurrency</ListGroup.Item>
      <ListGroup.Item as="li">Azure</ListGroup.Item>
      <ListGroup.Item as="li">Microsoft Power Platform</ListGroup.Item>
      <ListGroup.Item as="li">Frontend tools and Frameworks</ListGroup.Item>
      <ListGroup.Item as="li">Kubernetes</ListGroup.Item>
      <ListGroup.Item as="li">Mobile (Flutter, ReactNative, Swift)</ListGroup.Item>
      <ListGroup.Item as="li">GCP</ListGroup.Item>
      <ListGroup.Item as="li">AWS</ListGroup.Item>
      <ListGroup.Item as="li">Backend tools and Frameworks</ListGroup.Item>
      <ListGroup.Item as="li">Design tools and principles</ListGroup.Item>
      <ListGroup.Item as="li">Community Building and Moderation</ListGroup.Item>
      <ListGroup.Item as="li">Mental Health and Stress</ListGroup.Item>
      <ListGroup.Item as="li">Career Development and Morale Building</ListGroup.Item>

    </ListGroup>    
    </Alert>

    
    <h3 className='text-info text-center bg-dark' style={{padding:30,textAlign: "center", backgroundColor: "black"}}>Providing 100% resources for everyone in the <span className='text-light fw-bold'>Tech Ecosystem</span></h3>
    {/* <h4 className='text-primary text-center bg-light' >Pushing out African contents to the world</h4> */}
    <CardGroup style={{padding:20}}>
      <Card className='bg-secondary text-light' style={{padding:20}}>
      <Markdown className='bg-dark text-center' color="#7532F8" size={120} style={{padding:20, textAlign: "center"}}  />
        <Card.Body>
          <Card.Title className='fw-bold' style={{fontSize: 22}}>Own your contents - Write in Markdown</Card.Title>
          <Card.Text>
            Every writer is celebrated for every article published on The Complete Hub. 
            </Card.Text>
            <Card.Text>You own every article - No cap!</Card.Text>
          
        </Card.Body>
       
      </Card>
      <br></br>
      <Card className='bg-secondary text-light' style={{padding:20}}>
      <LightningCharge className='bg-dark text-center' color="#ffff" size={120} style={{padding:20, textAlign: "center"}}  />
       <Card.Body>
          <Card.Title className='fw-bold' style={{fontSize: 22}}>Publish articles hassle-free</Card.Title>
          <Card.Text>
           With the help of our amazing contributor assistants to guide and assist, you publish your article on The Complete Hub, in Markdown. 
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>

      <Card className='bg-secondary text-light ' style={{padding:20}}>
      <PeopleFill className='bg-dark text-center'color="yellow" size={120} style={{padding:20, textAlign: "center"}}  />
        <Card.Body>
          <Card.Title className='fw-bold' style={{fontSize: 22}}>Connect with the right audience</Card.Title>
          <Card.Text style={{textAlign:"left"}}>
            We are committed to pushing out your contents to the right audience, because we understand the work you put into writing and want to appreciate your hardwork.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
    <hr style={{color:"#fff"}}></hr>
    <hr style={{color:"black"}}></hr>

    <p style={{padding:20,textTransform: "uppercase", textAlign: "center", color: "#36CCF5"}}>From the Community</p>
    <h2 style={{textAlign: "center", color: "#F8BC19"}}>Recently Published Articles</h2>
    <hr style={{color:"#fff"}}></hr>
    <hr style={{color:"black"}}></hr>


      </section></>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Providing 100% resources for developers and tech enthusiasts">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
