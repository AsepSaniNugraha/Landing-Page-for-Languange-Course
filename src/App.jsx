import React from 'react';
import Navbar from '../src/components/layouts/Navbar';
import Hero from '../src/components/sections/Hero';
import Banner from './components/sections/Banner';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import Approach from './components/sections/Approach';
import Quote from './components/sections/Quote';
import Location from './components/sections/Location';
import CTA from './components/sections/CTA';
import Footer from './components/layouts/Footer';
import NotifBanner from './components/modal/NotifBanner';

const App = () => {
  return (
    <div className='bg-linear-210 from-(--purple-deep) to-(--purple) max-w-screen min-h-screen'>
      <NotifBanner />
      <Navbar />
      <Hero />
      <Banner />
      <Stats />
      <About />
      <Programs />
      <Approach />
      <Quote />
      <Location />
      <CTA />
      <Footer />
    </div>
  )
}

export default App