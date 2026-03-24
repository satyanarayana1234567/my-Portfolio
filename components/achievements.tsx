// // 'use client'

// // import { Card } from '@/components/ui/card'

// // const achievements = [
// //   {
// //     title: 'Hackathon Top 10',
// //     description: 'Ranked in top 10 out of 50+ teams in college hackathon',
// //     details: 'Delivered an innovative web-based solution under tight deadlines with a strong team effort'
// //   }
// // ]

// // export function Achievements() {
// //   return (
// //     <section className="px-6 md:px-12 py-20 md:py-32 bg-secondary/30">
// //       <div className="max-w-6xl mx-auto">
// //         <div className="mb-16">
// //           <div className="flex items-center gap-4 mb-4">
// //             <div className="w-1 h-12 bg-accent"></div>
// //             <h2 className="text-3xl font-bold">Achievements</h2>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {achievements.map((achievement, idx) => (
// //             <Card key={idx} className="p-8 hover:border-accent/50 transition-colors relative overflow-hidden group">
// //               <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="relative z-10">
// //                 <div className="flex items-start gap-4 mb-4">
// //                   <div className="text-3xl font-bold text-accent/30">★</div>
// //                   <div className="flex-1">
// //                     <h3 className="text-xl font-bold">{achievement.title}</h3>
// //                   </div>
// //                 </div>
// //                 <p className="text-muted-foreground/80 font-semibold mb-3">{achievement.description}</p>
// //                 <p className="text-sm text-muted-foreground/70">{achievement.details}</p>
// //               </div>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // 'use client'

// // import { Card } from '@/components/ui/card'
// // import { FaTrophy } from 'react-icons/fa'

// // const achievements = [
// //   {
// //     title: 'Hackathon Top 10',
// //     description: 'Ranked in top 10 out of 50+ teams',
// //     details: 'Built an innovative solution under tight deadlines with strong teamwork'
// //   }
// // ]

// // export function Achievements() {
// //   return (
// //     <section className="px-6 md:px-12 py-16 md:py-24 bg-secondary/30">
// //       <div className="max-w-6xl mx-auto">

// //         {/* Heading */}
// //         <div className="mb-16">
// //           <div className="flex items-center gap-4 mb-4">
// //             <div className="w-1 h-12 bg-accent"></div>
// //             <h2 className="text-3xl font-bold">Achievements</h2>
// //           </div>
// //         </div>

// //         {/* Timeline Style */}
// //         <div className="relative border-l border-border pl-8 space-y-10">

// //           {achievements.map((item, idx) => (
// //             <div key={idx} className="relative group">

// //               {/* Dot */}
// //               <div className="absolute -left-[14px] top-4 w-6 h-6 rounded-full bg-accent shadow-lg shadow-accent/40 group-hover:scale-125 transition"></div>

// //               <Card
// //                 className="p-6 md:p-8 transition-all duration-300 
// //                 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 hover:border-accent/50"
// //               >
// //                 <div className="flex items-start gap-4">

// //                   <FaTrophy className="text-2xl text-accent group-hover:scale-110 transition" />

// //                   <div>
// //                     <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition">
// //                       {item.title}
// //                     </h3>

// //                     <p className="text-muted-foreground font-semibold mb-2">
// //                       {item.description}
// //                     </p>

// //                     <p className="text-sm text-muted-foreground/70">
// //                       {item.details}
// //                     </p>
// //                   </div>

// //                 </div>
// //               </Card>
// //             </div>
// //           ))}

// //         </div>

// //       </div>
// //     </section>
// //   )
// // }

// //new code 
// 'use client'
 
// import { SectionReveal } from '@/components/section-reveal'
// import { FaTrophy } from 'react-icons/fa'
 
// const achievements = [
//   {
//     title: 'Hackathon Top 10',
//     description: 'Ranked in top 10 out of 50+ teams',
//     details: 'Built an innovative solution under tight deadlines with strong teamwork'
//   }
// ]
 
// export function Achievements() {
//   return (
//     <section className="px-6 md:px-12 py-16 md:py-24 bg-secondary/20">
//       <div className="max-w-6xl mx-auto">
//         <SectionReveal>
 
//           {/* Heading */}
//           <div className="mb-16">
//             <div className="flex items-center gap-4 mb-4">
//               <div className="w-1 h-12 bg-accent rounded-full"></div>
//               <h2 className="text-3xl font-bold text-foreground">Achievements</h2>
//             </div>
//           </div>
 
//           {/* Timeline */}
//           <div className="relative border-l border-border pl-8 space-y-10">
//             {achievements.map((item, idx) => (
//               <div key={idx} className="relative group">
 
//                 {/* Dot */}
//                 <div className="absolute -left-[14px] top-4 w-6 h-6 rounded-full bg-accent
//                                 shadow-lg shadow-accent/30 group-hover:scale-125 transition-transform duration-300"></div>
 
//                 {/* Card with hover border */}
//                 <div className="timeline-card p-6 md:p-8 bg-card/80 backdrop-blur">
//                   <div className="flex items-start gap-4">
//                     <FaTrophy className="text-2xl text-accent shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5" />
//                     <div>
//                       <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
//                         {item.title}
//                       </h3>
//                       <p className="text-muted-foreground font-semibold mb-2">
//                         {item.description}
//                       </p>
//                       <p className="text-sm text-muted-foreground/70">
//                         {item.details}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
 
//               </div>
//             ))}
//           </div>
 
//         </SectionReveal>
//       </div>
//     </section>
//   )
// }
