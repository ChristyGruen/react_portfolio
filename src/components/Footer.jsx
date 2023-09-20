import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function Footer() {

  return (
    <>
    <MDBFooter className='fixed-bottom bg-dark bg-gradient text-center text-white'>

      <div className='footer text-center p-2'>
          <a  href='https://github.com/ChristyGruen'>
            <MDBIcon fab icon="github">GitHub</MDBIcon>
          </a>
      </div>
    </MDBFooter>
    </>
  )
}



/*
https://mdbootstrap.com/docs/react/content-styles/icons/
*/