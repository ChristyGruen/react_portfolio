import { FormProvider } from "../components/form/FormContext"
import Form from "../components/form/Form"
import Input from "../components/form/Input"
import Label from "../components/form/Label"
import InputGroup from "../components/form/InputGroup"


export default function Contact() {
  //manual create form  
  async function handleSubmitForm(data) {
    //do all the form stuff
    const resp = await fetch("/api/submit",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
    return resp.json()
  }

  return (
    <>
      <h1>Contact Page</h1>
      {/* using context to create form */}
      <FormProvider data={{ name: "PJ", email: "pjcatticus@email.com", location: "ThePorch" }} onSubmit={handleSubmitForm}
      >
        <Form>
          <InputGroup name='name' label="Name" placeholder="John Doe" />
          <InputGroup name='email' label="Email" placeholder="jdoe@email.com" />
          <InputGroup name='location' label="Location" placeholder="Phoenix" />
          <button type='submit'>Submit</button>
        </Form>
      </FormProvider>



    </>

  )
}

// {/* using context to create form */ }
// <FormProvider data={{ name: "gary", email: "blah", location: "blah" }} onSubmit={handleSubmitForm}
// >
//   <Form>
//     <InputGroup name='name' label="Name" placeholder="John Doe" />
//     <InputGroup name='email' label="Email" placeholder="jdoe@email.com" />
//     <InputGroup name='location' label="Location" placeholder="Phoenix" />
//     <button type='submit'>Submit</button>
//   </Form>
// </FormProvider>


