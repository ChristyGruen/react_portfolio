import {useParams} from "react-router-dom"

export default function Resume(){

  const {id} = useParams()
  console.log(id)

  
  return(
    <h1>Resume Page</h1>
  
  )
}