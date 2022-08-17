import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import {Button, Card, Row, Col, Container, Alert} from 'react-bootstrap'
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Introduction to Microsoft Power Platform',
    description: (
      <>
      Microsoft Power Platform applications allow you to automate processes, build solutions, analyze data, and create AI Poweredvirtual chat agents. 
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
    title: 'Focus on What Matters',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
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
    title: 'Powered by React',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
    title: 'Easy to Use',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
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
    title: 'Focus on What Matters',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
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
    title: 'Powered by React',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
];

function Feature({title, description, author, date}) {  return (
    <div style={{backgroundColor:"white", padding: 10, borderRadius:2}} className={clsx('col col--4')}>
     <div style={{margin: "0 auto", }}>
        <Container>
        <Card style={{padding: 10,}}>
        <Card.Img src="https://i.ibb.co/Y2ZHpD5/hero1.png/60px100" />
        <Card.Body className="body" style={{padding: 10,}}>
        <Card.Title style={{fontWeight:"bold", textTransform:"uppercase"}}><a href='src/pages/author/author.js'>{title}</a></Card.Title>
<Card.Text>
 {description}
</Card.Text>
<Card.Text style={{}}>
 Written By: <a href="">{author}</a> 
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
        "Contributing to the poll of resources out there is your own little way of improving the ecosystem and helping someone out there, with your article."
      </p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Favour Dgreat <cite title="Source Title">CEO/Founder The Complete Hub</cite>
        </figcaption>
      </figure>
      <Link to="https://github.com/The-Complete-Hub/writers-program"><button style={{backgroundColor: "#36CCF5", padding: 10, borderColor: "#36CCF5", borderStyle: "none", borderRadius: 5, cursor:"pointer", fontWeight:"bold"}}>Contribute an Article!</button> </Link>   
    </Alert>
    <br></br>
      </div>
    </section>
  );
}
