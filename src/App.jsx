import { useState } from "react"
import Navbar from "./componants/Navbar"
import NewsBourd from "./componants/NewsBourd"
// https://news-app-react-eight.vercel.app/
function App() {

  const [category, setCategory] = useState("general")

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBourd category={category} />
    </>
  )
}

export default App
