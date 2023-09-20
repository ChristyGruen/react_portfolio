
import Card from 'react-bootstrap/Card';
import TechBlogImage from '../assets/TechBlog.jpg';
import CalendarAppImage from '../assets/calendar_data_retrieval.jpg';
import WeatherAppImage from '../assets/weather_app.png';
import CodingQuizImage from '../assets/codingQuiz.png';
import PWGeneratorImage from '../assets/PW_Generator.png';
import SudokuImage from '../assets/Screenshot-Sudoku.png'


export default function Portfolio(){


  
  return(
    <>
    <h1>Portfolio Page</h1>
    <div className = 'd-flex p-3'>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${TechBlogImage})` }}>
      <Card.Body>
        <Card.Title>Tech Blog</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Handlebars, Sequelize, Express, Heroku</Card.Subtitle>
        <Card.Img variant = 'bottom' src="TechBlog.jpg" />
        <Card.Text>
          <br></br>
          <br></br>
          <br></br>
          <br></br>          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Card.Text>
        <Card.Link href="https://github.com/ChristyGruen/tech_blog">gitHub repo</Card.Link>
        <Card.Link href="https://tech-blog-cgru-a07b953be274.herokuapp.com/">Heroku App</Card.Link>
      </Card.Body>
      
    </Card>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${CalendarAppImage})` }}>
      <Card.Body>
        <Card.Title>Calendar App</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">HTML, CSS, JQuery</Card.Subtitle>
        <Card.Text>
          <br></br>
          <br></br>
          <br></br>
          <br></br>          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Card.Text>
        <Card.Link href="https://github.com/ChristyGruen/calendar_app">gitHub repo</Card.Link>
        <Card.Link href="https://christygruen.github.io/calendar_app/">Calendar App</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className = 'd-flex p-3'>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${WeatherAppImage})` }}>
      <Card.Body>
        <Card.Title>Weather App</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dashboard, HTML, CSS, API</Card.Subtitle>
        <Card.Text>
        <br></br>
          <br></br>
          <br></br>
          <br></br>          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Card.Text>
        <Card.Link href="https://github.com/ChristyGruen/weather_app">gitHub repo</Card.Link>
        <Card.Link href="https://christygruen.github.io/weather_app/">Weather App</Card.Link>
      </Card.Body>
    </Card>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${CodingQuizImage})` }}>
      <Card.Body>
        <Card.Title>Coding Quiz</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">JavaScript, HTML, CSS</Card.Subtitle>
        <Card.Text>
        <br></br>
          <br></br>
          <br></br>
          <br></br>          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Card.Text>
        <Card.Link href="https://github.com/ChristyGruen/coding_quiz">gitHub repo</Card.Link>
        <Card.Link href="https://christygruen.github.io/coding_quiz/">Coding Quiz</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className = 'd-flex p-3'>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${PWGeneratorImage})` }}>
      <Card.Body>
        <Card.Title>Password Generator</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">JavaScript, CSS, HTML</Card.Subtitle>
        <Card.Text>
        <br></br>
          <br></br>
          <br></br>
          <br></br>          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Card.Text>
        <Card.Link href="https://github.com/ChristyGruen/password_generator">gitHub repo</Card.Link>
        <Card.Link href="https://christygruen.github.io/password_generator/">Password Generator</Card.Link>
      </Card.Body>
    </Card>
    <Card className = 'm-2 p-2'style={{ height: '25rem', width: '30rem', backgroundImage: `url(${SudokuImage})` }}>
      <Card.Body>
        <Card.Title>Sudoku</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Interactive game, JavaScript, HTML, CSS</Card.Subtitle>
        <Card.Text>
        <br></br>
          <br></br>
          <br></br>
          <br></br>          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Card.Text>
        <Card.Link href="https://github.com/ChristyGruen/fantastic-octo-sudoku">gitHub repo</Card.Link>
        <Card.Link href="https://ad31aid.github.io/fantastic-octo-sudoku/">Sudoku</Card.Link>
      </Card.Body>
    </Card>
    </div>
    
    </>
  )
}


