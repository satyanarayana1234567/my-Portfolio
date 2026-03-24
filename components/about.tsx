// 'use client'

// export function About() {
//   return (
//     <section id="about" className="px-6 md:px-12 py-16 md:py-24">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
//           {/* LEFT SIDE */}
//           <div className="md:col-span-1">
//             <div className="flex items-center gap-4 mb-8">
//               <div className="w-1 h-12 bg-primary"></div>
//               <h2 className="text-5xl font-bold mr-8">About</h2>
//             </div>

//             <p className="text-muted-foreground/80 mb-5">
//               Currently pursuing Computer Science Engineering at Lovely Professional University with a passion for creating user-centered digital solutions.
//             </p>

//             {/* 🔥 STATS SECTION */}
//             <div className="grid grid-cols-2 gap-4 mt-8">
//               <div className="p-4 rounded-xl bg-background/50 border border-border text-center hover:shadow-md transition">
//                 <h4 className="text-2xl font-bold text-primary">10+</h4>
//                 <p className="text-sm text-muted-foreground">Projects</p>
//               </div>

//               <div className="p-4 rounded-xl bg-background/50 border border-border text-center hover:shadow-md transition">
//                 <h4 className="text-2xl font-bold text-primary">5+</h4>
//                 <p className="text-sm text-muted-foreground">Technologies</p>
//               </div>

//               <div className="p-4 rounded-xl bg-background/50 border border-border text-center hover:shadow-md transition">
//                 <h4 className="text-2xl font-bold text-primary">2+</h4>
//                 <p className="text-sm text-muted-foreground">Internships</p>
//               </div>

//               <div className="p-4 rounded-xl bg-background/50 border border-border text-center hover:shadow-md transition">
//                 <h4 className="text-2xl font-bold text-primary">100%</h4>
//                 <p className="text-sm text-muted-foreground">Dedication</p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="md:col-span-2 space-y-6">

//             {/* CARD 1 */}
//             <div className="p-6 rounded-xl border border-border bg-background/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//               <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
//                 <span className="text-primary text-lg">●</span> Technical Expertise
//               </h3>
//               <p className="text-muted-foreground/80 leading-relaxed">
//                 I specialize in full-stack web development with expertise in JavaScript, React, Node.js, and PHP. I'm experienced in building responsive interfaces using HTML, CSS, and Bootstrap, with solid backend knowledge in MySQL and MongoDB databases. My toolkit also includes design tools like Figma for creating intuitive user experiences.
//               </p>
//             </div>

//             {/* CARD 2 */}
//             <div className="p-6 rounded-xl border border-border bg-background/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//               <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
//                 <span className="text-accent text-lg">●</span> Design Thinking Approach
//               </h3>
//               <p className="text-muted-foreground/80 leading-relaxed">
//                 Trained in Design Thinking methodologies, I approach problems by understanding user needs first. This enables me to create solutions that are not only technically sound but also intuitive and user-centered. I apply research, ideation, and prototyping to deliver high-quality digital experiences.
//               </p>
//             </div>

//          {/* CARD 3 */}
//             <div className="p-6 rounded-xl border border-border bg-background/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//               <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
//                 <span className="text-primary text-lg">●</span> Soft Skills
//               </h3>
//               <p className="text-muted-foreground/80 leading-relaxed">
//                 Problem-solver, team player, and adaptable collaborator. I excel in project management and communication, making me effective in cross-functional teams. My passion for learning keeps me updated with the latest technologies and best practices.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
 
import { SectionReveal } from '@/components/section-reveal'
 
export function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
 
            {/* LEFT SIDE */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-primary rounded-full"></div>
                <h2 className="text-5xl font-bold text-foreground">About</h2>
              </div>
 
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Currently pursuing Computer Science Engineering at Lovely Professional University
                with a passion for creating user-centered digital solutions.
              </p>
 
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: '2+', label: 'Projects' },
                  { value: '5+', label: 'Technologies' },
                  { value: '1', label: 'Training' },
                  { value: '100%', label: 'Dedication' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl bg-card border border-border text-center
                               hover:border-primary/40 hover:shadow-md hover:shadow-primary/10
                               transition-all duration-300"
                  >
                    <h4 className="text-2xl font-bold text-primary">{value}</h4>
                    <p className="text-sm text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
 
            {/* RIGHT SIDE */}
            <div className="md:col-span-2 space-y-5">
 
              {/* CARD 1 */}
              <div className="about-card p-6 bg-card/70 backdrop-blur">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 text-foreground">
                  <span className="text-primary text-lg">●</span> Technical Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in full-stack web development with expertise in JavaScript, React,
                  Node.js, and PHP. I'm experienced in building responsive interfaces using HTML,
                  CSS, and Bootstrap, with solid backend knowledge in MySQL and MongoDB databases.
                  My toolkit also includes design tools like Figma for creating intuitive user
                  experiences.
                </p>
              </div>
 
              {/* CARD 2 */}
              <div className="about-card p-6 bg-card/70 backdrop-blur">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 text-foreground">
                  <span className="text-accent text-lg">●</span> Design Thinking Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trained in Design Thinking methodologies, I approach problems by understanding
                  user needs first. This enables me to create solutions that are not only
                  technically sound but also intuitive and user-centered. I apply research,
                  ideation, and prototyping to deliver high-quality digital experiences.
                </p>
              </div>
 
              {/* CARD 3 */}
              <div className="about-card p-6 bg-card/70 backdrop-blur">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-3 text-foreground">
                  <span className="text-primary text-lg">●</span> Soft Skills
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Problem-solver, team player, and adaptable collaborator. I excel in project
                  management and communication, making me effective in cross-functional teams.
                  My passion for learning keeps me updated with the latest technologies and
                  best practices.
                </p>
              </div>
 
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}