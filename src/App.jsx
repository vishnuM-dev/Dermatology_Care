import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicLayout } from './components/layout/PublicLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Treatments } from './pages/Treatments';
import { TreatmentDetails } from './pages/TreatmentDetails';
import { Doctors } from './pages/Doctors';
import { DoctorProfile } from './pages/DoctorProfile';
import { Gallery } from './pages/Gallery';
import { Appointment } from './pages/Appointment';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
export const App = () => {
    return (<BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="treatments" element={<Treatments />}/>
          <Route path="treatments/:slug" element={<TreatmentDetails />}/>
          <Route path="doctors" element={<Doctors />}/>
          <Route path="doctors/:slug" element={<DoctorProfile />}/>
          <Route path="gallery" element={<Gallery />}/>
          <Route path="appointment" element={<Appointment />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>);
};
export default App;
