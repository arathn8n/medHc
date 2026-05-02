import { useEffect, useState } from "react"


function App() {
 
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
   const time = setTimeout(() => {
      setLoader(false)
    }, 3000);

    return ()=> clearTimeout(time)
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
