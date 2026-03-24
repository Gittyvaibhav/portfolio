//defines what the app renders


// Imports React state so the app can switch from the preloader to the main content.
import { useState } from 'react'
// Imports the navigation bar section.
import Navbar from './Components/Navbar/Navbar'
// Imports the hero section shown near the top of the page.
import Hero from './Components/Hero/Hero'
// Imports the about section.
import About from './Components/About/About'
// Imports the skills section.
import Skills from './Components/Skills/Skills'
// Imports the contact section.
import Contact from './Components/Contact/Contact'
// Imports the loading screen shown before the main page appears.
import Preloader from './Components/Preloader/Preloader'

// Main app component that controls whether the preloader or the page content is shown.
const App = () => {
  // Starts in the loading state so the preloader appears first.
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* If loading is true, show the preloader. When it finishes, switch loading off. */}
      {isLoading ? (
        <Preloader onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Main page sections shown after the preloader is done. */}
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Contact />
        </>
      )}
    </>
  )
}

export default App
