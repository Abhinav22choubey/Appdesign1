import { useState } from 'react'
import Hero from "./components/Hero.jsx";
import About from "./components/about.jsx";
import Feature from "./components/Features.jsx";
import Screenshots from './components/Screenshot.jsx';
import UseBefore from './components/UseBefore.jsx';
import TeamReviews from './components/Team.jsx';

export default function App() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Feature></Feature>
      <Screenshots></Screenshots>
      <UseBefore></UseBefore>
      <Team></Team>
    </>

  )
}

