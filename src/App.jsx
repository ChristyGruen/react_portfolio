import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home, Portfolio, Contact, Resume, PageNotFound } from "./pages"
import Header from './components/Header';
import Footer from './components/Footer';
import { AppProvider } from './utils/AppContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import image from './assets/lakebackground.jpg'
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap.min.css';
import './App.css'



function App() {
  return (
    <>
      <AppProvider >
      <div style ={{height: '100vh', width: '100vw'}}>
        <Header/>
        
        <Container className = 'mt-5 p-5' fluid style = {{height: 'auto'}}>
        <Row >
       

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
          </Row>
          </Container>
         
        <Footer />
        </div>
      </AppProvider>
    </>
  )
}

export default App


/*
react bootstrap - flat button in header: https://react-bootstrap.netlify.app/docs/getting-started/theming

https://aguidehub.com/blog/how-to-add-a-background-image-to-my-navigation-bar-in-bootstrap/?expand_article=1

<Container className = 'bg-dark bg-gradient text-light'>
            <Container className = 'bg-dark bg-gradient text-light'>

https://stackoverflow.com/questions/53360673/add-background-image-in-react-with-bootstrap  //worked!

https://modus-react-bootstrap.trimble.com/foundations/color-palette/

https://modus-react-bootstrap.trimble.com/getting-started/

https://stackoverflow.com/questions/25225682/difference-between-width100-and-width100vw
*/


//original header
// {/* <header>
// <Container className = 'text-light w-auto p-3 h-auto d-inline-block' style = {{backgroundImage: `url(${image})`}}>
//   <Row>
//     <Stack direction='horizontal' gap={3}>
//       <h1>Chris Gruenhagen</h1>
//       <div className='p-1 bg-selected'><style type="text/css">
//         {`.btn-flat {background-color:purple; color: white;}.btn-xxl{padding: 1rem 1.5rem;font-size: 1rem;}`}
//       </style>
//         <Button variant="flat" size="xxl">About me</Button>
//       </div>
//       <div className='p-1 bg-selected'><style type="text/css">
//         {`.btn-flat {background-color:#0e416c; color: white;}.btn-xxl{padding: 1rem 1.5rem;font-size: 1rem;}`}
//       </style>
//         <Button variant="flat" size="xxl">Portfolio</Button>
//       </div>
//       <div className='p-1 bg-selected'><style type="text/css">
//         {`.btn-flat {background-color: #dcedf9;color: white;}.btn-xxl{padding: 1rem 1.5rem;font-size: 1rem;}`}
//       </style>
//         <Button variant="flat" size="xxl">Contact me</Button>
//       </div>
//       <div className='p-1 bg-selected'><style type="text/css">
//         {`.btn-flat {background-color: #0063a3;color: white;}.btn-xxl{padding: 1rem 1.5rem;font-size: 1rem;}`}
//       </style>
//         <Button variant="flat" size="xxl">Resume</Button>
//       </div>
//     </Stack>
//   </Row>
// </Container>
// </header> */}

// {/* <Route path='/aboutme' element={<AboutMe />} /> */}

// className='text-light w-auto p-3 h-auto d-inline-block'