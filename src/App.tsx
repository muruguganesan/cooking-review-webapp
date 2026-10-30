import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './_components/Header'
import { headerLinks } from './_constants'

function App() {
  // https://www.figma.com/community/file/1645987467372488202/5-page-website-design
  return (
    <>
      <BrowserRouter>

        {/* Navigation */}
        <Header />

        {/* Routes */}
        <main className="wrapper">
          <Routes>
            {
              headerLinks.map((ele) => <Route path={ele.link} element={ele.element} />)
            }
          </Routes>
        </main>

      </BrowserRouter>
    </>
  )
}

export default App
