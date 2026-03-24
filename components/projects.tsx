// 'use client'

// import { Badge } from '@/components/ui/badge'
// import { Card } from '@/components/ui/card'

// const projects = [
//   {
//     title: 'Sambhasha',
//     subtitle: 'Web-Based Language Learning Platform',
//     description: 'Interactive language learning platform with lessons, quizzes, and progress tracking. Built with a responsive frontend and robust PHP backend.',
//     tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
//     highlights: [
//       'Responsive mobile-friendly design',
//       'User authentication system',
//       'Course management backend',
//       'Progress tracking database'
//     ],
//     date: 'July 2025'
//   },
//   {
//     title: 'Habit Tracker',
//     subtitle: 'Mobile App UI/UX Design',
//     description: 'Complete mobile app prototype designed in Figma to help users build and maintain daily habits with streak visualization and reminders.',
//     tech: ['Figma', 'Prototyping', 'UI/UX Design'],
//     highlights: [
//       'Interactive prototype with 20+ screens',
//       'Habit creation and tracking flows',
//       'Streak visualization system',
//       'Modern UI principles'
//     ],
//     date: 'April 2025'
//   }
// ]

// export function Projects() {
//   return (
//     <section id="projects" className="px-6 md:px-12 py-20 md:py-32 bg-card/50 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="mb-16">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-1 h-12 bg-primary"></div>
//             <h2 className="text-3xl font-bold">Projects</h2>
//           </div>
//           <p className="text-muted-foreground/80 max-w-2xl">
//             Showcase of recent projects combining technical skills with design thinking methodology
//           </p>
//         </div>

//         <div className="space-y-8">
//           {projects.map((project, idx) => (
//             <Card key={idx} className="overflow-hidden hover:border-primary/50 transition-colors">
//               <div className="p-8 md:p-10">
//                 <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
//                   <div className="flex-1">
//                     <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
//                     <p className="text-lg text-primary font-semibold mb-2">{project.subtitle}</p>
//                     <p className="text-sm text-muted-foreground">{project.date}</p>
//                   </div>
//                 </div>

//                 <p className="text-muted-foreground/80 mb-6 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div className="mb-6">
//                   <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h4>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                     {project.highlights.map((highlight, i) => (
//                       <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/80">
//                         <span className="text-accent mt-1 font-bold">•</span>
//                         <span>{highlight}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, i) => (
//                     <Badge key={i} variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// 'use client'

// import { Badge } from '@/components/ui/badge'
// import { Card } from '@/components/ui/card'

// const projects = [
//   {
//     title: 'Sambhasha',
//     subtitle: 'Language Learning Platform',
//     description: 'Web app with lessons, quizzes, and progress tracking.',
//     tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
//     date: 'July 2025',
//     image: '/sambhasha1.png',
//     live: 'https://www.linkedin.com/feed/update/urn:li:activity:7320119568729804800/',
//     github: 'https://github.com/satyanarayana1234567/Languagelearning'
//   },
//   {
//     title: 'Habit Tracker',
//     subtitle: 'UI/UX Design',
//     description: 'Figma-based habit tracking app with modern UI.',
//     tech: ['Figma', 'UI/UX'],
//     date: 'April 2025',
//     image: '/habit.png',
//     live: '#',
//     github: '#'
//   },
//   {
//     title: 'AI Chef',
//     subtitle: 'AI Recipe Generator',
//     description: 'Suggests recipes using AI based on ingredients.',
//     tech: ['React', 'API', 'AI'],
//     date: '2025',
//     image: '/aichef.png',
//     live: 'https://ai-chef-one.vercel.app/',
//     github: 'https://github.com/katkarpranav2004/AIChef'
//   }
// ]

// export function Projects() {
//   return (
//     <section id="projects" className="px-6 md:px-12 py-16 md:py-24">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="mb-8">
//           <div className="flex items-center gap-4 mb-2">
//             <div className="w-1 h-10 bg-primary"></div>
//             <h2 className="text-4xl font-bold mr-5">Projects</h2>
//           </div>
//           <p className="text-muted-foreground text-base md:text-lg ml-5">
//             My selected works with real-world implementation
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           {projects.map((project, idx) => (
//             <Card
//   key={idx}
//   className="group p-0 gap-0 overflow-hidden border border-border rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/60"
// >

//               {/* Image */}
//               <div className="w-full h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-5">

//                 <h3 className="text-xl font-semibold">{project.title}</h3>
//                 <p className="text-primary text-sm mb-1">{project.subtitle}</p>

//                 <p className="text-sm text-muted-foreground mb-3">
//                   {project.description}
//                 </p>

//                 {/* Tech */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, i) => (
//                     <Badge key={i} className="text-xs bg-primary/20 text-primary">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>

//                 {/* Buttons */}
//                <div className="flex gap-3 mt-4">
//                 <a
//                 href={project.live}
//                 target="_blank"
//                 //className="px-4 py-1.5 text-sm font-medium bg-primary text-white rounded-full shadow-sm hover:shadow-md hover:scale-105 hover:bg-primary/90 transition-all duration-300"
//                 className="px-4 py-1.5 text-sm font-medium border border-primary text-primary rounded-full hover:bg-primary hover:text-white hover:shadow-md hover:scale-105 transition-all duration-300"
//                 >
//                   Live 
//                   </a>
//                   <a
//                   href={project.github}
//                   target="_blank"
//                   className="px-4 py-1.5 text-sm font-medium border border-primary text-primary rounded-full hover:bg-primary hover:text-white hover:shadow-md hover:scale-105 transition-all duration-300">
//                     Code 
//                     </a>
//                     </div>

//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

//new code

'use client'
 
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { SectionReveal } from '@/components/section-reveal'
 
const projects = [
  {
    title: 'Sambhasha',
    subtitle: 'Language Learning Platform',
    description: 'Web app with lessons, quizzes, and progress tracking.',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    date: 'July 2025',
    image: '/sambhasha1.png',
    live: 'https://www.linkedin.com/feed/update/urn:li:activity:7320119568729804800/',
    github: 'https://github.com/satyanarayana1234567/Languagelearning'
  },
  {
    title: 'Habit Tracker',
    subtitle: 'UI/UX Design',
    description: 'Figma-based habit tracking app with modern UI.',
    tech: ['Figma', 'UI/UX'],
    date: 'April 2025',
    image: '/habit.png',
    live: '#',
    github: '#'
  },
  {
    title: 'AI Chef',
    subtitle: 'AI Recipe Generator',
    description: 'Suggests recipes using AI based on ingredients.',
    tech: ['React', 'API', 'AI'],
    date: '2025',
    image: '/aichef.png',
    live: 'https://ai-chef-one.vercel.app/',
    github: 'https://github.com/katkarpranav2004/AIChef'
  }
]
 
export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
 
          {/* Heading */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-1 h-10 bg-primary rounded-full"></div>
              <h2 className="text-4xl font-bold text-foreground">Projects</h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg ml-5">
              My selected works with real-world implementation
            </p>
          </div>
 
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="group p-0 gap-0 overflow-hidden border border-border rounded-xl
                           transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                           hover:border-primary/50 hover:shadow-primary/10 bg-card"
              >
                {/* Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
 
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-primary text-sm mb-1">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
 
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} className="text-xs bg-primary/15 text-primary border-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>
 
                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href={project.live}
                      target="_blank"
                      className="px-4 py-1.5 text-sm font-medium border border-primary text-primary rounded-full
                                 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:scale-105
                                 transition-all duration-300"
                    >
                      Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-1.5 text-sm font-medium border border-primary text-primary rounded-full
                                 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:scale-105
                                 transition-all duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
 
        </SectionReveal>
      </div>
    </section>
  )
}
