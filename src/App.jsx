import { useState } from "react"
import Navbar from "./componants/Navbar"
import NewsBourd from "./componants/NewsBourd"
// https://news-app-react-eight.vercel.app/
function App() {

  const [category, setCategory] = useState("general")
  const [country,setCountry] = useState("in")

  return (
    <>
      <Navbar setCategory={setCategory} setCountry={setCountry}/>
      <NewsBourd category={category} country={country} />
    </>
  )
}

export default App
