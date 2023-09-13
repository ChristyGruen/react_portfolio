/*
We tell React that this component will be used for Context
We tell React we need a special hook made so other components can subscribe to what we publish
We build the Provider which publishes the data we want to share
*/

import {createContext, useContext, useState} from "react"

const AppContext = createContext({})
export const useAppContext = () => useContext(AppContext)   //this is the hook

// export const AppProvider = () =>{
//   const [ user, setUser] = useState({id: 1, name: "Gary"})

//   return(
//     <AppContext.Provider>
//      { children}
//     </AppContext.Provider>
//   )

// }

// or


///this is the publisher
export function AppProvider(props){
  const [ user, setUser] = useState({id: 1, name: "Gary"})
  const [ darkMode, setDarkMode] = useState(true) 

return(
  <AppContext.Provider value = {{user, darkMode, setDarkMode}}>
   { props.children}
  </AppContext.Provider>
)

}