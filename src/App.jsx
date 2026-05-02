import { useEffect, useState } from "react"
import Loader from "./components/loader/Loader";
import Home from "./components/home/Home";


function App() {
 
  const [loader, setLoader] = useState(true)

  // Se ejecuta una sola vez al montar el componente (por el array vacío []).
  useEffect(()=>{
   const time = setTimeout(() => {
      setLoader(false)
    }, 3000);
    
    return ()=> clearTimeout(time)
  }, [])

  return (
    <>
      {loader ? <Loader/> : <Home/>}
    </>
  )
}

export default App
