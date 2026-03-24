
// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
//   SiMongodb,
//   SiMysql,
//   SiFigma,
//   SiGit,
//   SiCplusplus,
//   SiPython,
//   SiPhp,
//   SiHtml5,
//   SiCss,
//   SiBootstrap
// } from 'react-icons/si'

// const skillData = {
//   all: [
//     { name: 'C++', icon: SiCplusplus, color: 'text-blue-400', info: 'Strong in DSA & problem solving' },
//     { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', info: 'Core web development' },
//     { name: 'Python', icon: SiPython, color: 'text-green-400', info: 'Scripting & logic building' },
//     { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', info: 'Backend development' },
//     { name: 'React', icon: SiReact, color: 'text-cyan-400', info: 'Modern UI apps' },
//     { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', info: 'Backend APIs' },
//     { name: 'HTML', icon: SiHtml5, color: 'text-orange-500', info: 'Markup structure' },
//     { name: 'CSS', icon: SiCss, color: 'text-blue-500', info: 'Responsive styling' },
//     { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500', info: 'UI framework' },
//     { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', info: 'Relational DB' },
//     { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', info: 'NoSQL DB' },
//     { name: 'Figma', icon: SiFigma, color: 'text-pink-500', info: 'UI/UX design' },
//     { name: 'Git', icon: SiGit, color: 'text-red-500', info: 'Version control' }
//   ],

//   frontend: [
//     { name: 'React', icon: SiReact, color: 'text-cyan-400', info: 'UI development' },
//     { name: 'HTML', icon: SiHtml5, color: 'text-orange-500', info: 'Markup' },
//     { name: 'CSS', icon: SiCss, color: 'text-blue-500', info: 'Styling' },
//     { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500', info: 'Framework' }
//   ],

//   backend: [
//     { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', info: 'Server side' },
//     { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', info: 'Backend logic' }
//   ],

//   database: [
//     { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', info: 'Relational DB' },
//     { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', info: 'NoSQL DB' }
//   ],

//   programming: [
//     { name: 'C++', icon: SiCplusplus, color: 'text-blue-400', info: 'DSA' },
//     { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', info: 'Web core' },
//     { name: 'Python', icon: SiPython, color: 'text-green-400', info: 'Scripting' },
//     { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', info: 'Backend' }
//   ],

//   tools: [
//     { name: 'Figma', icon: SiFigma, color: 'text-pink-500', info: 'Design' },
//     { name: 'Git', icon: SiGit, color: 'text-red-500', info: 'Version control' }
//   ]
// }

// const filters = ['all', 'programming', 'frontend', 'backend', 'database', 'tools']

// export function Skills() {
//   const [active, setActive] = useState('all')
//   const [flipped, setFlipped] = useState<number | null>(null)

//   return (
//     <section id="skills" className="px-6 md:px-12 py-16 md:py-20">

//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="mb-10 text-center">
//           <h2 className="text-4xl font-bold mb-3">Technical Skills</h2>
//           <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
//             Tap on each skill to discover tools, technologies, and how I use them in real projects.
//           </p>
//         </div>

//         {/* FILTER BUTTONS (CENTERED) */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10">
//           {filters.map((item) => (
//             <button
//               key={item}
//               onClick={() => {
//                 setActive(item)
//                 setFlipped(null)
//               }}
//               className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-300
//               ${active === item
//                   ? 'bg-primary text-white border-primary shadow-md scale-105'
//                   : 'border-primary text-primary hover:bg-primary hover:text-white hover:scale-105'
//                 }`}
//             >
//               {item.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* SKILLS GRID */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
//           >
//             {skillData[active].map((skill, i) => {
//               const Icon = skill.icon
//               const isFlipped = flipped === i

//               return (
//                 <div
//                   key={i}
//                   className="perspective"
//                   onClick={() => setFlipped(isFlipped ? null : i)}
//                 >
//                   <motion.div
//                     className="relative w-full h-32 cursor-pointer"
//                     animate={{ rotateY: isFlipped ? 180 : 0 }}
//                     transition={{ duration: 0.5 }}
//                     style={{ transformStyle: 'preserve-3d' }}
//                   >

//                     {/* FRONT */}
//                     <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card
//                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//                       style={{ backfaceVisibility: 'hidden' }}
//                     >
//                       <Icon className={`${skill.color} text-3xl transition duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]`} />
//                       <span className="text-sm font-medium">{skill.name}</span>
//                     </div>

//                     {/* BACK */}
//                     <div className="absolute inset-0 flex items-center justify-center text-center p-3 rounded-xl border border-primary bg-primary text-white"
//                       style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
//                     >
//                       <p className="text-xs">{skill.info}</p>
//                     </div>

//                   </motion.div>
//                 </div>
//               )
//             })}
//           </motion.div>
//         </AnimatePresence>

//       </div>
//     </section>
//   )
// }

// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
//   SiMongodb,
//   SiMysql,
//   SiFigma,
//   SiGit,
//   SiCplusplus,
//   SiPython,
//   SiPhp,
//   SiHtml5,
//   SiCss,
//   SiBootstrap
// } from 'react-icons/si'

// const skillData = {
//   all: [
//     { name: 'C++', icon: SiCplusplus, color: 'text-blue-400', info: 'Strong in DSA & problem solving' },
//     { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', info: 'Core web development' },
//     { name: 'Python', icon: SiPython, color: 'text-green-400', info: 'Scripting & logic building' },
//     { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', info: 'Backend development' },
//     { name: 'React', icon: SiReact, color: 'text-cyan-400', info: 'Modern UI apps' },
//     { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', info: 'Backend APIs' },
//     { name: 'HTML', icon: SiHtml5, color: 'text-orange-500', info: 'Markup structure' },
//     { name: 'CSS', icon: SiCss, color: 'text-blue-500', info: 'Responsive styling' },
//     { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500', info: 'UI framework' },
//     { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', info: 'Relational DB' },
//     { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', info: 'NoSQL DB' },
//     { name: 'Figma', icon: SiFigma, color: 'text-pink-500', info: 'UI/UX design' },
//     { name: 'Git', icon: SiGit, color: 'text-red-500', info: 'Version control' }
//   ],
//   frontend: [
//     { name: 'React', icon: SiReact, color: 'text-cyan-400', info: 'UI development' },
//     { name: 'HTML', icon: SiHtml5, color: 'text-orange-500', info: 'Markup' },
//     { name: 'CSS', icon: SiCss, color: 'text-blue-500', info: 'Styling' },
//     { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500', info: 'Framework' }
//   ],
//   backend: [
//     { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', info: 'Server side' },
//     { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', info: 'Backend logic' }
//   ],
//   database: [
//     { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', info: 'Relational DB' },
//     { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', info: 'NoSQL DB' }
//   ],
//   programming: [
//     { name: 'C++', icon: SiCplusplus, color: 'text-blue-400', info: 'DSA' },
//     { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', info: 'Web core' },
//     { name: 'Python', icon: SiPython, color: 'text-green-400', info: 'Scripting' },
//     { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', info: 'Backend' }
//   ],
//   tools: [
//     { name: 'Figma', icon: SiFigma, color: 'text-pink-500', info: 'Design' },
//     { name: 'Git', icon: SiGit, color: 'text-red-500', info: 'Version control' }
//   ]
// }

// const filters = ['all', 'programming', 'frontend', 'backend', 'database', 'tools']

// export function Skills() {
//   const [active, setActive] = useState('all')
//   const [flipped, setFlipped] = useState<number | null>(null)

//   return (
//     <section id="skills" className="px-6 md:px-12 py-16 md:py-26">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="mb-10 text-center">
//           <h2 className="text-4xl font-bold mb-3">Technical Skills</h2>
//           <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
//             Tap on each skill to discover tools, technologies, and how I use them in real projects.
//           </p>
//         </div>

//         {/* FILTER BUTTONS */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10">
//           {filters.map((item) => (
//             <button
//               key={item}
//               onClick={() => {
//                 setActive(item)
//                 setFlipped(null)
//               }}
//               className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-300
//                 ${active === item
//                   ? 'bg-primary text-white border-primary shadow-md scale-105'
//                   : 'border-primary text-primary hover:bg-primary hover:text-white hover:scale-105'
//                 }`}
//             >
//               {item.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* SKILLS GRID */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
//           >
//             {skillData[active].map((skill, i) => {
//               const Icon = skill.icon
//               const isFlipped = flipped === i

//               return (
//                 <div
//                   key={i}
//                   className="perspective"
//                   onClick={() => setFlipped(isFlipped ? null : i)}
//                   onMouseLeave={() => setFlipped(null)} // ✅ FLIP BACK ON MOUSE LEAVE
//                 >
//                   <motion.div
//                     className="relative w-full h-32 cursor-pointer"
//                     animate={{ rotateY: isFlipped ? 180 : 0 }}
//                     transition={{ duration: 0.5 }}
//                     style={{ transformStyle: 'preserve-3d' }}
//                   >

//                     {/* FRONT */}
//                     <div
//                       className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card
//                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//                       style={{ backfaceVisibility: 'hidden' }}
//                     >
//                       <Icon className={`${skill.color} text-3xl transition duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]`} />
//                       <span className="text-sm font-medium">{skill.name}</span>
//                     </div>

//                     {/* BACK */}
//                     <div
//                       className="absolute inset-0 flex items-center justify-center text-center p-3 rounded-xl border border-primary bg-primary text-white"
//                       style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
//                     >
//                       <p className="text-xs">{skill.info}</p>
//                     </div>

//                   </motion.div>
//                 </div>
//               )
//             })}
//           </motion.div>
//         </AnimatePresence>

//       </div>
//     </section>
//   )
// }

//new code 

'use client'
 
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiMysql,
  SiFigma, SiGit, SiCplusplus, SiPython, SiPhp, SiHtml5, SiCss, SiBootstrap
} from 'react-icons/si'
import { SectionReveal } from '@/components/section-reveal'
 
const skillData: Record<string, { name: string; icon: any; color: string; info: string }[]> = {
  all: [
    { name: 'C++',        icon: SiCplusplus,  color: 'text-blue-400',   info: 'Strong in DSA & problem solving' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', info: 'Core web development' },
    { name: 'Python',     icon: SiPython,     color: 'text-green-400',  info: 'Scripting & logic building' },
    { name: 'PHP',        icon: SiPhp,        color: 'text-indigo-400', info: 'Backend development' },
    { name: 'React',      icon: SiReact,      color: 'text-cyan-400',   info: 'Modern UI apps' },
    { name: 'Node.js',    icon: SiNodedotjs,  color: 'text-green-500',  info: 'Backend APIs' },
    { name: 'HTML',       icon: SiHtml5,      color: 'text-orange-500', info: 'Markup structure' },
    { name: 'CSS',        icon: SiCss,        color: 'text-blue-500',   info: 'Responsive styling' },
    { name: 'Bootstrap',  icon: SiBootstrap,  color: 'text-purple-500', info: 'UI framework' },
    { name: 'MySQL',      icon: SiMysql,      color: 'text-blue-400',   info: 'Relational DB' },
    { name: 'MongoDB',    icon: SiMongodb,    color: 'text-green-600',  info: 'NoSQL DB' },
    { name: 'Figma',      icon: SiFigma,      color: 'text-pink-500',   info: 'UI/UX design' },
    { name: 'Git',        icon: SiGit,        color: 'text-red-500',    info: 'Version control' },
  ],
  frontend:    [
    { name: 'React',     icon: SiReact,     color: 'text-cyan-400',   info: 'UI development' },
    { name: 'HTML',      icon: SiHtml5,     color: 'text-orange-500', info: 'Markup' },
    { name: 'CSS',       icon: SiCss,       color: 'text-blue-500',   info: 'Styling' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500', info: 'Framework' },
  ],
  backend:     [
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500',  info: 'Server side' },
    { name: 'PHP',     icon: SiPhp,       color: 'text-indigo-400', info: 'Backend logic' },
  ],
  database:    [
    { name: 'MySQL',   icon: SiMysql,   color: 'text-blue-400',  info: 'Relational DB' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', info: 'NoSQL DB' },
  ],
  programming: [
    { name: 'C++',        icon: SiCplusplus,  color: 'text-blue-400',   info: 'DSA' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', info: 'Web core' },
    { name: 'Python',     icon: SiPython,     color: 'text-green-400',  info: 'Scripting' },
    { name: 'PHP',        icon: SiPhp,        color: 'text-indigo-400', info: 'Backend' },
  ],
  tools: [
    { name: 'Figma', icon: SiFigma, color: 'text-pink-500', info: 'Design' },
    { name: 'Git',   icon: SiGit,   color: 'text-red-500',  info: 'Version control' },
  ],
}
 
const filters = ['all', 'programming', 'frontend', 'backend', 'database', 'tools']
 
export function Skills() {
  const [active, setActive] = useState('all')
  const [flipped, setFlipped] = useState<number | null>(null)
 
  return (
    <section id="skills" className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
 
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold mb-3 text-foreground">Technical Skills</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              Tap on each skill to discover tools, technologies, and how I use them in real projects.
            </p>
          </div>
 
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => { setActive(item); setFlipped(null) }}
                className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-300
                  ${active === item
                    ? 'bg-primary text-primary-foreground border-primary shadow-md scale-105'
                    : 'border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105'
                  }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
 
          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
            >
              {skillData[active].map((skill, i) => {
                const Icon = skill.icon
                const isFlipped = flipped === i
                return (
                  <div
                    key={i}
                    className="perspective cursor-pointer"
                    onClick={() => setFlipped(isFlipped ? null : i)}
                    onMouseLeave={() => setFlipped(null)}
                  >
                    <motion.div
                      className="relative w-full h-32"
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* FRONT */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl
                                   border border-border bg-card hover:border-primary/40
                                   hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <Icon className={`${skill.color} text-3xl`} />
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
 
                      {/* BACK */}
                      <div
                        className="absolute inset-0 flex items-center justify-center text-center p-3
                                   rounded-xl border border-primary bg-primary text-primary-foreground"
                        style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                      >
                        <p className="text-xs font-medium">{skill.info}</p>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
 
        </SectionReveal>
      </div>
    </section>
  )
}
 