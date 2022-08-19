import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Button, Card, Row, Col, Container, Alert, CardImg} from 'react-bootstrap'
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'Embedding templates and static files in CLI using //go:embed',
    description: (
      <>
      This article is for someone who just started writing Go, and have no idea about //go:embed feature which came with the released version: 1.16.
      </>
    ),
    date: (
      <>
        19th August, 2022
      </>
    ),
    author: (
      <>
        Saintmalik
      </>
    ),
  },
  {
    title: 'Creating a Node.js web server with Express Framework',
    description: (
      <>
        In this article we will be learning about Node.JS and trying our hands at building a simple web server using a popular javascript framework called 'Express'.
      </>
    ),
    
    date: (
      <>
        19th August, 2022
      </>
    ),
    author: (
      <>
        Jesse Oluwadare
      </>
    ),
  },
  {
    title: 'Introduction to Microsoft Power Platform',
    description: (
      <>
        This article is targeted at young innovative minds, who are passionate about learning about Microsoft Low-Code/No-Code tools and are interested in building with these tools. 
      </>
    ),
    date: (
      <>
        19th August, 2022
      </>
    ),
    author: (
      <>
        Favour Adeshina
      </>
    ),
  },
  {
    title: 'Using Data Connectors with Microsoft Power Apps',
    description: (
      <>
        Data is very important while building every native application, and in this article we will be learning more about data and data connectors, and how to make use of them in a Power Apps Project. 
      </>
    ),
    date: (
      <>
        19th August, 2022
      </>
    ),
    author: (
      <>
        Favour Adeshina
      </>
    ),
  },
  {
    title: 'Setting up Azure AD B2C for user authentication in Microsoft Power Pages',
    description: (
      <>
       In this article, we will be learning how to use Microsoft Azure AD B2C as an identity provider in Power Pages, for setting up user authentication, while working on a project.
      </>
    ),
    date: (
      <>
        19th August, 2022
      </>
    ),
    author: (
      <>
        Favour Adeshina
      </>
    ),
  },
  {
    title: 'Using the Timer Control Input Component in Power Apps',
    description: (
      <>
      In this article we will be following up from our previous article Using Data Connectors with Microsoft Power Apps to learn about the Timer Control input component used in Microsoft Power Apps.      </>
    ),
    date: (
      <>
        19th August, 2022
      </>
    ),
    author: (
      <>
        Favour Adeshina
      </>
    ),
  },
];

function Feature({title, description, author, date}) {  return (
    <div style={{backgroundColor:"white", padding: 10, borderRadius:2}} className={clsx('col col--4')}>
     <div style={{margin: "0 auto", }}>
        <Container>
        <Card style={{padding: 10,}}>
        <Card.Img src= "https://i.ibb.co/hc8gnz2/new-article.png60px100"/>
        <Card.Body className="body" style={{padding: 10,}}>
        <Card.Title style={{fontWeight:"bold", textTransform:"uppercase"}}><a href='/blog'>{title}</a></Card.Title>
<Card.Text>
 {description}
</Card.Text>
<Card.Text style={{fontWeight: "bold"}}>
 Written By:{author}
</Card.Text>
<Card.Text className='text-muted'>
 {date}
</Card.Text>

        </Card.Body>
      </Card>
      <br />
      </Container>     
      </div>
    </div>
    
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          <Link to="/blog"><h3 style={{textDecoration:"underline", cursor:"pointer"}}>View All Articles</h3></Link>
        </div>
        <br></br>
        <Alert style={{backgroundColor: "#A9A9A9", color:"black", fontWeight: "bold", padding:10}}>
      <Alert.Heading style={{padding:2, color:"white", fontSize:30}}>A message from the CEO:</Alert.Heading>
      <hr />

        <figure>
        <blockquote class="blockquote">
        <p className="mb-5" style={{fontSize:25, color:"white"}}>
        "Contributing to the pool of resources out there is your own little way of improving the ecosystem and helping someone out there, with your article."
      </p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Favour Dgreat <cite title="Source Title">CEO/Founder The Complete Hub</cite>
        </figcaption>
      </figure>
      <Link to="https://github.com/The-Complete-Hub/writers-program"><button style={{backgroundColor: "#36CCF5", padding: 10, borderColor: "#36CCF5", borderStyle: "none", borderRadius: 5, cursor:"pointer", fontWeight:"bold", color: "white"}}>Contribute an Article Today!</button> </Link>   
    </Alert>
    <br></br>
      </div>
    </section>
  );
}
