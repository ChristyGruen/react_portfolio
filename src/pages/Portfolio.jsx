
import Card from 'react-bootstrap/Card';
import TechBlogImage from '../assets/TechBlog.jpg';
import lakeimage from '../assets/IMG_9493.jpg';

export default function Portfolio(){


  
  return(
    <>
    <h1>Portfolio Page</h1>
    <row className = 'd-flex'>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${TechBlogImage})` }}>
      <Card.Body>
        <Card.Title>Tech Blog</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Handlebars, Sequelize, Express, Heroku</Card.Subtitle>
        <Card.Img variant = 'bottom' src="TechBlog.jpg" />
        <Card.Link href="#">Github Repo</Card.Link>
        <Card.Link href="https://tech-blog-cgru-a07b953be274.herokuapp.com/">Heroku App</Card.Link>
      </Card.Body>
      
    </Card>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${lakeimage})` }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </row>
    <row className = 'd-flex'>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${TechBlogImage})` }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${lakeimage})` }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </row>
    <row className = 'd-flex'>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${TechBlogImage})` }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${lakeimage})` }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </row>
    
    </>
  )
}


