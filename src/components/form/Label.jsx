import {useFormContext} from "./FormContext"


export default function Label(props){


  const {FormData, setFormData} = useFormContext()
  
  return(
    <label>
    {props.children}
    </label>
  )
}