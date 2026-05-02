import Hero from './components/Hero'
import Nav from './components/Nav'
import ProjectGrid from './components/ProjectGrid'
import About from './components/About'
import Education from './components/Education'
import Currently from './components/Currently'
import Connect from './components/Connect'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProjectGrid />
      <About />
      <Education />
      <Currently />
      <Connect />
    </main>
  )
}