import {useState} from "react"
import {useFormContext} from "./FormContext"


export default function Form(props){

  const {formData, setFormData, onSubmit} = useFormContext()


    ///this is set up to show a local use, would probably put this in as a global stateful state in real use
  const[formError, setFormError] = useState(false)

  async function submitTheForm(e){
    e.preventDefault()
    try{
    const result = await onSubmit(formData)
    } catch(err){
      console.log("Error!!!")
      setFormError(true)
    }

  }

  return(
    <form onSubmit = {submitTheForm}>
    {props.children}
    {formError === true &&(
      <p> Error - please try again</p>
    )
    }
    </form>
  )
}