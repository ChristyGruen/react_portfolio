import {useFormContext} from "./FormContext"


export default function Input(props){

  //{} is destructuring from provided object
  const {FormData, setFormData} = useFormContext()


  return(
    <input/>
  )
}