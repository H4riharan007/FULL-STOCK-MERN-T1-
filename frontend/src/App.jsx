import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Parent from './components/Parent'
import Abouts from './Pages/Abouts'
import Contacts from './Pages/Contacts'
import Homes from './Pages/Homes'
import Service from './Pages/Service'
import {Routes,Route}from'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <route path='/about' element={<About/>}></route>
       <route path='/contact' element={<Contact/>}></route>
       <route path='/service' element={<Service/>}></route>
       <route path='/parent' element={<parent/>}></route>
       <route path='/useState' element={<Counter/>}></route>
       <route path='/useEffect' element={<Effect/>}></route>
    </Routes>
    </>
  )
}

export default App


