
// 'use client'

// const certifications = [
//   {
//     title: 'Cloud Computing',
//     issuer: 'NPTEL',
//     date: 'October 2024',
//     image: '/certificates/cloud.png',
//     link: 'https://drive.google.com/file/d/1koynxC4t15K_TIj-tolcqGVQ1y2pp_20/view',
//     description: 'Comprehensive training on cloud fundamentals, services, and deployment models.'
//   },
//   {
//     title: 'The Bits and Bytes Computer Networking',
//     issuer: 'Google',
//     date: 'September 2024',
//     image: '/certificates/google-network.png',
//     link: 'https://drive.google.com/file/d/1pkKkeP5E8p5ymqg9R0THVAJuk4M51i3w/view',
//     description: 'Understanding networking basics, protocols, and system communication.'
//   },
//   {
//     title: 'Operating Systems',
//     issuer: 'Google',
//     date: 'September 2024',
//     image: '/certificates/os.png',
//     link: 'https://drive.google.com/file/d/1-rXRmDzVtpF7JYTJxyss5fdbVmhYVEuo/view',
//     description: 'Core OS concepts including memory, processes, and scheduling.'
//   },
//   {
//     title: 'Software Development',
//     issuer: 'NPTEL',
//     date: 'April 2024',
//     image: '/certificates/sdp.png',
//     link: 'https://drive.google.com/file/d/1UFtk2isyfAE9gQIEXtKoE9F0_W9bGL1P/view',
//     description: 'Software development lifecycle and methodologies.'
//   }
// ]

// export function Certifications() {
//   return (
//     <section id="certifications" className="px-6 md:px-12 py-16 md:py-24">

//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="mb-10">
//           <div className="flex items-center gap-4 mb-3">
//             <div className="w-1 h-10 bg-primary"></div>
//             <h2 className="text-4xl font-bold">Certifications</h2>
//           </div>

//           <p className="text-muted-foreground text-base md:text-lg ml-6 md:ml-8">
//             Verified certifications that reflect my continuous learning journey.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {certifications.map((cert, idx) => (
//             <div key={idx} className="perspective group">

//               <div
//                 className="relative w-full h-64 transition-all duration-500 group-hover:[transform:rotateY(180deg)]"
//                 style={{ transformStyle: 'preserve-3d' }}
//               >

//                 {/* FRONT */}
//                 <div
//                   className="absolute inset-0 rounded-xl overflow-hidden border border-border"
//                   style={{ backfaceVisibility: 'hidden' }}
//                 >
//                   <img
//                     src={cert.image}
//                     alt={cert.title}
//                     className="w-full h-full object-cover"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-black/60"></div>

//                   {/* Text */}
//                   <div className="absolute bottom-0 p-5">
//                     <h3 className="text-xl font-semibold text-white mb-2">
//                       {cert.title}
//                     </h3>

//                     <p className="text-sm text-gray-300 mb-3 line-clamp-2">
//                       {cert.description}
//                     </p>

//                     <div className="flex justify-between text-sm text-gray-300">
//                       <span>{cert.issuer}</span>
//                       <span>{cert.date}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* BACK */}
//                 <div
//                   className="absolute inset-0 flex items-center justify-center rounded-xl bg-card border border-primary"
//                   style={{
//                     transform: 'rotateY(180deg)',
//                     backfaceVisibility: 'hidden'
//                   }}
//                 >
//                   <a
//                     href={cert.link}
//                     target="_blank"
//                     className="flex items-center gap-2 px-5 py-2 border border-primary text-primary rounded-full
//                     hover:bg-primary hover:text-white transition-all duration-300"
//                   >
//                     👁 View Certificate
//                   </a>
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   )
// }

// 'use client'

// import { useState } from 'react'
// import { FaEye } from 'react-icons/fa'

// const certifications = [
//   {
//     title: 'Cloud Computing',
//     issuer: 'NPTEL',
//     date: 'October 2024',
//     image: '/certificates/cloud.png',
//     link: 'https://drive.google.com/file/d/1koynxC4t15K_TIj-tolcqGVQ1y2pp_20/view',
//     description: 'Comprehensive training on cloud fundamentals, services, and deployment models.'
//   },
//   {
//     title: 'The Bits and Bytes Computer Networking',
//     issuer: 'Google',
//     date: 'September 2024',
//     image: '/certificates/google-network.png',
//     link: 'https://drive.google.com/file/d/1pkKkeP5E8p5ymqg9R0THVAJuk4M51i3w/view',
//     description: 'Understanding networking basics, protocols, and system communication.'
//   },
//   {
//     title: 'Operating Systems',
//     issuer: 'Google',
//     date: 'September 2024',
//     image: '/certificates/os.png',
//     link: 'https://drive.google.com/file/d/1-rXRmDzVtpF7JYTJxyss5fdbVmhYVEuo/view',
//     description: 'Core OS concepts including memory, processes, and scheduling.'
//   },
//   {
//     title: 'Software Development',
//     issuer: 'NPTEL',
//     date: 'April 2024',
//     image: '/certificates/sdp.png',
//     link: 'https://drive.google.com/file/d/1UFtk2isyfAE9gQIEXtKoE9F0_W9bGL1P/view',
//     description: 'Software development lifecycle and methodologies.'
//   }
// ]

// export function Certifications() {
//   const [flipped, setFlipped] = useState<number | null>(null)

//   return (
//     <section id="certifications" className="px-6 md:px-12 py-16 md:py-24">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <div className="mb-10">
//           <div className="flex items-center gap-4 mb-3">
//             <div className="w-1 h-10 bg-primary"></div>
//             <h2 className="text-4xl font-bold">Certifications</h2>
//           </div>
//           <p className="text-muted-foreground text-base md:text-lg ml-5 md:ml-6">
//             Verified certifications that reflect my continuous learning journey.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {certifications.map((cert, idx) => {
//             const isFlipped = flipped === idx
//             return (
//               <div
//                 key={idx}
//                 className="group perspective cursor-pointer"
//                 onClick={() => setFlipped(isFlipped ? null : idx)}
//                 onMouseLeave={() => setFlipped(null)}
//               >
//                 <div
//                   className="relative w-full h-72 md:h-96 transition-all duration-500"
//                   style={{
//                     transformStyle: 'preserve-3d',
//                     transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
//                   }}
//                 >
//                   {/* FRONT - IMAGE + HOVER DETAILS */}
//                   <div
//                     className="absolute inset-0 rounded-xl overflow-hidden border border-border"
//                     style={{ backfaceVisibility: 'hidden' }}
//                   >
//                     <img
//                       src={cert.image}
//                       alt={cert.title}
//                       className="w-full h-full object-cover"
//                     />

//                     {/* Hover Details */}
//                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                       <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
//                       <p className="text-sm text-gray-300 mb-2 line-clamp-2">{cert.description}</p>
//                       <div className="flex justify-between text-sm text-gray-300">
//                         <span>{cert.issuer}</span>
//                         <span>{cert.date}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* BACK - VIEW CERTIFICATE */}
//                   <div
//                     className="absolute inset-0 flex items-center justify-center rounded-xl bg-card border border-primary"
//                     style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
//                   >
//                     <a
//                       href={cert.link}
//                       target="_blank"
//                       className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full
//                       hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 text-lg font-semibold"
//                     >
//                       <FaEye /> View Certificate
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

//new code

'use client'
 
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { SectionReveal } from '@/components/section-reveal'
 
const certifications = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'October 2024',
    image: '/certificates/cloud.png',
    link: 'https://drive.google.com/file/d/1koynxC4t15K_TIj-tolcqGVQ1y2pp_20/view',
    description: 'Comprehensive training on cloud fundamentals, services, and deployment models.'
  },
  {
    title: 'The Bits and Bytes Computer Networking',
    issuer: 'Google',
    date: 'September 2024',
    image: '/certificates/google-network.png',
    link: 'https://drive.google.com/file/d/1pkKkeP5E8p5ymqg9R0THVAJuk4M51i3w/view',
    description: 'Understanding networking basics, protocols, and system communication.'
  },
  {
    title: 'Operating Systems',
    issuer: 'Google',
    date: 'September 2024',
    image: '/certificates/os.png',
    link: 'https://drive.google.com/file/d/1-rXRmDzVtpF7JYTJxyss5fdbVmhYVEuo/view',
    description: 'Core OS concepts including memory, processes, and scheduling.'
  },
  {
    title: 'Software Development',
    issuer: 'NPTEL',
    date: 'April 2024',
    image: '/certificates/sdp.png',
    link: 'https://drive.google.com/file/d/1UFtk2isyfAE9gQIEXtKoE9F0_W9bGL1P/view',
    description: 'Software development lifecycle and methodologies.'
  }
]
 
export function Certifications() {
  const [flipped, setFlipped] = useState<number | null>(null)
 
  return (
    <section id="certifications" className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
 
          {/* Heading */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-1 h-10 bg-primary rounded-full"></div>
              <h2 className="text-4xl font-bold text-foreground">Certifications</h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg ml-5 md:ml-6">
              Verified certifications that reflect my continuous learning journey.
            </p>
          </div>
 
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => {
              const isFlipped = flipped === idx
              return (
                <div
                  key={idx}
                  className="group perspective cursor-pointer"
                  onClick={() => setFlipped(isFlipped ? null : idx)}
                  onMouseLeave={() => setFlipped(null)}
                >
                  <div
                    className="relative w-full h-72 md:h-96 transition-all duration-500"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* FRONT */}
                    <div
                      className="absolute inset-0 rounded-xl overflow-hidden border border-border"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                        <p className="text-sm text-gray-300 mb-2 line-clamp-2">{cert.description}</p>
                        <div className="flex justify-between text-sm text-gray-300">
                          <span>{cert.issuer}</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
 
                    {/* BACK */}
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-xl bg-card border border-primary"
                      style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                    >
                      <a
                        href={cert.link}
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full
                                   hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300
                                   text-lg font-semibold"
                      >
                        <FaEye /> View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
 
        </SectionReveal>
      </div>
    </section>
  )
}