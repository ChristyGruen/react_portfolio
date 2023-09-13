import {useFormContext} from "./FormContext"



export default function InputGroup(props){

  //{} is destructuring from provided object
  const {formData, setFormData} = useFormContext()


  return(
    <div>
      <label>{props.label}</label>
      <input 
      type="text" 
      name={props.name} 
      placeholder = {props.placeholder}
      value ={formData[props.name]}
      onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
    </div>
  )
}