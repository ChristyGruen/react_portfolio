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
    <MDBFooter className='fixed-bottom bg-dark text-center text-white'>

      <div className='footer text-center p-1'>
          <a  href='https://github.com/ChristyGruen'>
            GitHub<MDBIcon fab icon="github" />
          </a>
      </div>
    </MDBFooter>
  )
}



/*
https://mdbootstrap.com/docs/react/content-styles/icons/
*/