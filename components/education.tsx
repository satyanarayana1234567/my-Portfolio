// 'use client'

// import { Card } from '@/components/ui/card'

// const education = [
//   {
//     degree: 'Bachelor of Technology - Computer Science and Engineering',
//     school: 'Lovely Professional University',
//     location: 'Punjab, India',
//     period: 'August 2023 - Present',
//     achievement: 'CGPA: 6.9'
//   },
//   {
//     degree: 'Intermediate',
//     school: 'Narayana Junior College',
//     location: 'Tanuku, Andhra Pradesh',
//     period: 'May 2021 - March 2023',
//     achievement: 'Percentage: 93%'
//   },
//   {
//     degree: 'Secondary',
//     school: 'Bhashyam E.M High School',
//     location: 'Tanuku, Andhra Pradesh',
//     period: 'June 2020 - March 2021',
//     achievement: 'Percentage: 100%'
//   }
// ]

// export function Education() {
//   return (
//     <section id="education" className="px-6 md:px-12 py-20 md:py-32">
//       <div className="max-w-6xl mx-auto">
//         <div className="mb-16">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-1 h-12 bg-primary"></div>
//             <h2 className="text-3xl font-bold">Education</h2>
//           </div>
//         </div>

//         <div className="space-y-6">
//           {education.map((item, idx) => (
//             <Card key={idx} className="p-8 hover:border-primary/50 transition-colors">
//               <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
//                   <p className="text-primary font-semibold mb-1">{item.school}</p>
//                   <p className="text-sm text-muted-foreground/80">{item.location}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
//                   <p className="font-semibold text-accent">{item.achievement}</p>
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

// import { Card } from '@/components/ui/card'
// import {
//   FaGraduationCap,
//   FaSchool,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaStar
// } from 'react-icons/fa'

// const education = [
//   {
//     degree: 'Bachelor of Technology - Computer Science and Engineering',
//     school: 'Lovely Professional University',
//     location: 'Punjab, India',
//     period: 'August 2023 - Present',
//     achievement: 'CGPA: 7.1'
//   },
//   {
//     degree: 'Intermediate',
//     school: 'Narayana Junior College',
//     location: 'Tanuku, Andhra Pradesh',
//     period: 'May 2021 - March 2023',
//     achievement: 'Percentage: 93%'
//   },
//   {
//     degree: 'Secondary',
//     school: 'Bhashyam E.M High School',
//     location: 'Tanuku, Andhra Pradesh',
//     period: 'June 2020 - March 2021',
//     achievement: 'Percentage: 100%'
//   }
// ]

// export function Education() {
//   return (
//     <section id="education" className="px-6 md:px-12 py-16 md:py-24">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="mb-16">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-1 h-12 bg-primary"></div>
//             <h2 className="text-3xl font-bold">Education</h2>
//           </div>
//         </div>

//         {/* Timeline */}
//         <div className="relative border-l border-border pl-8 space-y-10">

//           {education.map((item, idx) => (
//             <div key={idx} className="relative group">

//               {/* Timeline Dot */}
//               <div className="absolute -left-[14px] top-4 w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/40 group-hover:scale-125 transition"></div>

//               <Card
//                 className="p-6 md:p-8 transition-all duration-300 
//                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50
//                 bg-card/80 backdrop-blur"
//               >

//                 <div className="flex flex-col md:flex-row md:justify-between gap-6">

//                   {/* LEFT */}
//                   <div className="flex-1 space-y-3">

//                     {/* Degree */}
//                     <div className="flex items-center gap-3">
//                       <FaGraduationCap className="text-primary text-xl group-hover:scale-110 transition" />
//                       <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition">
//                         {item.degree}
//                       </h3>
//                     </div>

//                     {/* School */}
//                     <div className="flex items-center gap-3 text-primary">
//                       <FaSchool />
//                       <span className="font-semibold">{item.school}</span>
//                     </div>

//                     {/* Location */}
//                     <div className="flex items-center gap-3 text-sm text-muted-foreground">
//                       <FaMapMarkerAlt />
//                       <span>{item.location}</span>
//                     </div>

//                   </div>

//                   {/* RIGHT */}
//                   <div className="space-y-3 text-left md:text-right">

//                     {/* Period */}
//                     <div className="flex items-center gap-2 md:justify-end text-sm text-muted-foreground">
//                       <FaCalendarAlt />
//                       <span>{item.period}</span>
//                     </div>

//                     {/* Achievement */}
//                     <div className="flex items-center gap-2 md:justify-end text-accent font-semibold">
//                       <FaStar className="text-yellow-400 group-hover:scale-110 transition" />
//                       <span>{item.achievement}</span>
//                     </div>

//                   </div>

//                 </div>

//               </Card>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   )
// }

'use client'
 
import { SectionReveal } from '@/components/section-reveal'
import {
  FaGraduationCap,
  FaSchool,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar
} from 'react-icons/fa'
 
const education = [
  {
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    school: 'Lovely Professional University',
    location: 'Punjab, India',
    period: 'August 2023 - Present',
    achievement: 'CGPA: 7.1'
  },
  {
    degree: 'Intermediate',
    school: 'Narayana Junior College',
    location: 'Tanuku, Andhra Pradesh',
    period: 'May 2021 - March 2023',
    achievement: 'Percentage: 93%'
  },
  {
    degree: 'Secondary',
    school: 'Bhashyam E.M High School',
    location: 'Tanuku, Andhra Pradesh',
    period: 'June 2020 - March 2021',
    achievement: 'Percentage: 100%'
  }
]
 
export function Education() {
  return (
    <section id="education" className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
 
          {/* Heading */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-12 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold text-foreground">Education</h2>
            </div>
          </div>
 
          {/* Timeline */}
          <div className="relative border-l border-border pl-8 space-y-10">
            {education.map((item, idx) => (
              <div key={idx} className="relative group">
 
                {/* Timeline Dot */}
                <div className="absolute left-[14px] top-4 w-6 h-6 rounded-full bg-primary
                                shadow-lg shadow-primary/30 group-hover:scale-125 transition-transform duration-300"></div>
 
                {/* Card with hover border */}
                <div className="timeline-card p-6 md:p-8 bg-card/80 backdrop-blur">
                  <div className="flex flex-col md:flex-row md:justify-between gap-6">
 
                    {/* LEFT */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <FaGraduationCap className="text-primary text-xl shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.degree}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 text-primary">
                        <FaSchool className="shrink-0" />
                        <span className="font-semibold">{item.school}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <FaMapMarkerAlt className="shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>
 
                    {/* RIGHT */}
                    <div className="space-y-3 text-left md:text-right shrink-0">
                      <div className="flex items-center gap-2 md:justify-end text-sm text-muted-foreground">
                        <FaCalendarAlt />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 md:justify-end font-semibold text-primary">
                        <FaStar className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                        <span>{item.achievement}</span>
                      </div>
                    </div>
 
                  </div>
                </div>
              </div>
            ))}
          </div>
 
        </SectionReveal>
      </div>
    </section>
  )
}