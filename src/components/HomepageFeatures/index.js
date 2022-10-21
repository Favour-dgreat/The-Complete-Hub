import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Button, Card, Row, Col, ListGroup, ListGroupItem, Container, Alert, CardImg} from 'react-bootstrap'
import Link from '@docusaurus/Link';

const myStyle = {
  backgroundColor: "#36CCF5",
  padding: "10px",
  borderStyle: "none",
  borderRadius: "20px",
  fontWeight:"bold"
}
const FeatureList = [
  {
    title: 'Introduction to Data Science and analysis',
    description: (
      <>
    Data science is all about extracting knowledge and insights from data. If you wish to enter the **Data Science** world here is a brief tutorial as an introduction to Data Science.  </>
    ),
    date: (
      <>
        21st October, 2022
      </>
    ),
    author: (
      <>
         Toluwalese
      </>
    ),
  },
  {
    title: 'A beginners guide to using webpack loaders',
    description: (
      <>
In this article,  we will learn about Webpack and how to use Webpack loaders to import external files while making use of Webpack.  </>
    ),
    date: (
      <>
        19th October, 2022
      </>
    ),
    author: (
      <>
         Favour
      </>
    ),
  },
  {
    title: 'FrontEnd Tools and Framework',
    description: (
      <>
    In this article, You will understand about Frontend tools and frameworks and helpful resources to assist you in learning.
    </>
    ),
    date: (
      <>
        18th October, 2022
      </>
    ),
    author: (
      <>
         Shubhi-Paul
      </>
    ),
    
  },
  // {
  //   title: 'Personality Test and Career Development',
  //   description: (
  //     <>
  //   This article is aimed at helping individuals, particularly youths in making the right decisions regarding their careers. </>
  //   ),
  //   date: (
  //     <>
  //       28th September, 2022
  //     </>
  //   ),
  //   author: (
  //     <>
  //        Tobi
  //     </>
  //   ),
  // },
  // {
  //   title: 'Laying the foundation:Data Engineers',
  //   description: (
  //     <>
  //   In this article, You will understand the steps in which data flows within an organization, who are data engineers, and their responsibilities. </>
  //   ),
  //   date: (
  //     <>
  //       14th September, 2022
  //     </>
  //   ),
  //   author: (
  //     <>
  //        Marvellous Amos
  //     </>
  //   ),
  // },
  // {
  //   title: 'A better understanding of Tech Communities',
  //   description: (
  //     <>
  //   In this article, I will be taking a deeper look into what tech communities are and how you can benefit from being in one. </>
  //   ),
  //   date: (
  //     <>
  //       14th September, 2022
  //     </>
  //   ),
  //   author: (
  //     <>
  //        Favour Adeshina
  //     </>
  //   ),
  // },
  // {
  //   title: 'Building an Inclusive Tech Community',
  //   description: (
  //     <>
  //   In this article I gave a deep dive into building an inclusive community, following the 7 P's for Community Building. </>
  //   ),
  //   date: (
  //     <>
  //       14th September, 2022
  //     </>
  //   ),
  //   author: (
  //     <>
  //        Marvellous Amos
  //     </>
  //   ),
  // },
  // {
  //   title: 'An Introduction to Carbon Programming Language',
  //   description: (
  //     <>
  //     In this article we will learn about various aspects of Carbon language and Carbon language basic syntax along with code samples to get started with Carbon Programming language </>
  //   ),
  //   date: (
  //     <>
  //       1st September, 2022
  //     </>
  //   ),
  //   author: (
  //     <>
  //        Isaac Ademiluyi
  //     </>
  //   ),
  // },
  // {
  //   title: 'Virtual Reality and Mental Health',
  //   description: (
  //     <>
  //     In this article you will find out the relevance of tech in promoting mental health
  //     amongst individuals of different age, sex and even race using Virtual Reality  </>
  //   ),
  //   date: (
  //     <>
  //       22nd August, 2022
  //     </>
  //   ),
  //   author: (
  //     <>
  //       Titilayo Oluwasesan
  //     </>
  //   ),
  // },
  // {
  //   title: 'Creating a Node.js web server with Express Framework',
  //   description: (
  //     <>
  //       In this article we will be learning about Node.JS and trying our hands at building a simple web server using a popular javascript framework called 'Express'.
  //     </>
  //   ),
    
  //   date: (
  //     <>
  //       19th August, 2022
  //     </>
  //   ),
  //   author: (
  //     <>
  //       Jesse Oluwadare
  //     </>
  //   ),
  // },

  // {
  //   title: 'Using Data Connectors with Microsoft Power Apps',
  //   description: (
  //     <>
  //       Data is very important while building every native application, and in this article we will be learning more about data and data connectors, and how to make use of them in a Power Apps Project. 
  //     </>
  //   ),
  //   date: (
  //     <>
  //       19th August, 2022
  //     </>
  //   ),
  //   author: (
  //     <>
  //       Favour Adeshina
  //     </>
  //   ),
  // },
  // {
  //   title: 'Setting up Azure AD B2C for user authentication in Microsoft Power Pages',
  //   description: (
  //     <>
  //      In this article, we will be learning how to use Microsoft Azure AD B2C as an identity provider in Power Pages, for setting up user authentication, while working on a project.
  //     </>
  //   ),
  //   date: (
  //     <>
  //       19th August, 2022
  //     </>
  //   ),
  //   author: (
  //     <>
  //       Favour Adeshina
  //     </>
  //   ),
  // },
];

function Feature({title, description, author, date}) {  return (
    <div style={{backgroundColor:"white", padding: 10, borderRadius:2}} className={clsx('col col--4')}>
     <div style={{margin: "0 auto", }}>
        <Container>
        <Card style={{padding: 10,}}>
        <Card.Img src= "https://i.ibb.co/hc8gnz2/new-article.png60px100"/>
        <Card.Body className="body" style={{padding: 10,}}>
        <Card.Title style={{fontWeight:"bold", textTransform:"uppercase"}}><a href='/blog'>{title}</a></Card.Title>
        <Button onClick={() => setShow(false)} style={myStyle}>
            Hacktoberfest-2022
          </Button>

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
        <div style={{backgroundColor:"white", color:"black"}}>
        <h3 className='text-info text-center text-dark' style={{padding:30,textAlign: "center", color: "black"}}>We are glad to announce that we are participating as a company in this Year's <span className='text-info fw-bold' style={{fontStyle: 'italic', color: "#7788FE"}}>Hacktoberfest in collaboration with <a href="https://twitter.com/osca_ado_ekiti" style={{fontStyle: 'italic', color: "#7788FE", textDecoration:"underline"}}>Open Source Community, Ado-Ekiti </a>.</span></h3>
        <h4 style={{padding: "10px"}}> To Participate: </h4>  
        <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Pick up an  <a href='https://github.com/The-Complete-Hub/writers-guide/issues' style={{color:"black", fontWeight: "bold", textDecoration:"underline"}}>Issue</a></ListGroup.Item>
      <ListGroup.Item as="li">Make your contribution</ListGroup.Item>
      <ListGroup.Item as="li">Send in a Pull Request </ListGroup.Item>
    </ListGroup> 
            <p style={{fontWeight:"bold", padding: "10px"}}>Make 5 successful Pull Request's and get a Tee from TC Hub.</p>
            </div>
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
