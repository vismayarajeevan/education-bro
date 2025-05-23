import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LocationsPage from './Pages/LocationsPage'
import CollegesPage from './Pages/CollegesPage'
import CoursesPage from './Pages/CoursesPage'
import { EnquiryForm } from './Pages/EnquiryForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LocationsPage />} />
        <Route path="/location/:locationId" element={<CoursesPage />} />
        <Route path="/location/:locationId/course/:courseId" element={<CollegesPage />} />
        <Route path="/enquiry/:collegeId" element={<EnquiryForm />} />
      </Routes>
    </>
  )
}

export default App
