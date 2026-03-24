import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Certifications } from '@/components/certifications'
import { Education } from '@/components/education'
// import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        {/* <Achievements /> */}
        <Contact />
        <Footer />
      </main>
    </>
  )
}
