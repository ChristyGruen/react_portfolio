import {createContext, useContext, useState, useEffect} from "react"

const FormContext = createContext({})  //naming the created context
export const useFormContext = () => useContext(FormContext)   //create a hook that can be used in other components

//need to export out the provider
export function FormProvider(props){
  //... this is where we define the data, functions, etc being shared
  console.log(props)
  //create stateful content
  const [ formData, setFormData] = useState({})


  //gives us a wrapper component that wraps around whatever needs this
  return(
    <FormContext.Provider value = {{formData, setFormData, onSubmit: props.onSubmit}}>
      {props.children}
    </FormContext.Provider>
  )

}