// 'use client'

// import { useState, useEffect } from 'react'

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
//           ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
//           : 'bg-transparent'
//         }`}
//     >
//       <nav className="max-w-8xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
//         <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
//           <div className="px-4 py-2 bg-primary rounded-xl flex items-center justify-center font-bold text-white shadow-md group-hover:scale-105 group-hover:shadow-primary/50 transition-all duration-300 whitespace-nowrap">
//             KS Portfolio
//           </div>
//         </a>
//         <div className="flex items-center gap-4 md:gap-5">
//   <a
//     href="#hero"
//     className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary hover:shadow-md hover:scale-105 border border-transparent hover:border-primary transition-all duration-300"
//   >
//     Home
//   </a>

//   <a
//     href="#skills"
//     className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary hover:shadow-md hover:scale-105 border border-transparent hover:border-primary transition-all duration-300"
//   >
//     Skills
//   </a>

//   <a
//     href="#projects"
//     className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary hover:shadow-md hover:scale-105 border border-transparent hover:border-primary transition-all duration-300"
//   >
//     Projects
//   </a>

//   <a
//     href="#certifications"
//     className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary hover:shadow-md hover:scale-105 border border-transparent hover:border-primary transition-all duration-300"
//   >
//     Certifications
//   </a>

//   <a
//     href="#contact"
//     className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary hover:shadow-md hover:scale-105 border border-transparent hover:border-primary transition-all duration-300"
//   >
//     Contact
//   </a>
// </div>
//       </nav>
//     </header>
//   )
// }


//new code
// 'use client'
 
// import { useState, useEffect } from 'react'
 
// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
 
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])
 
//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20'
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="max-w-8xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
//         <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
//           <div className="px-4 py-2 bg-primary rounded-xl flex items-center justify-center font-bold text-primary-foreground shadow-md group-hover:scale-105 group-hover:shadow-primary/40 transition-all duration-300 whitespace-nowrap">
//             KS Portfolio
//           </div>
//         </a>
 
//         <div className="flex items-center gap-4 md:gap-5">
//           {['Home:#hero', 'Skills:#skills', 'Projects:#projects', 'Certifications:#certifications', 'Contact:#contact'].map((item) => {
//             const [label, href] = item.split(':')
//             return (
//               <a
//                 key={label}
//                 href={href}
//                 className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground
//                            hover:text-primary-foreground hover:bg-primary hover:shadow-md hover:scale-105
//                            border border-transparent hover:border-primary/60
//                            transition-all duration-300"
//               >
//                 {label}
//               </a>
//             )
//           })}
//         </div>
//       </nav>
//     </header>
//   )
// }

'use client'

import { useState, useEffect } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-8xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
         <div className="px-4 py-2 flex items-center justify-center font-bold text-white text-xl shadow-md group-hover:scale-105 group-hover:shadow-primary/50 transition-all duration-300 whitespace-nowrap">
           <b>Satya</b>
         </div>
        </a>
        <div className="flex items-center gap-4 md:gap-5">
  <a
    href="#hero"
    className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary hover:shadow-md hover:scale-105 border border-transparent hover:border-primary transition-all duration-300"
  >
    Home
  </a>

  <a
    href="#skills"
    className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary hover:shadow-md hover:scale-105 border border-transparent hover:border-primary transition-all duration-300"
  >
    Skills
  </a>

  <a
    href="#projects"
    className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary hover:shadow-md hover:scale-105 border border-transparent hover:border-primary transition-all duration-300"
  >
    Projects
  </a>

  <a
    href="#certifications"
    className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary hover:shadow-md hover:scale-105 border border-transparent hover:border-primary transition-all duration-300"
  >
    Certifications
  </a>

  <a
    href="#contact"
    className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-primary hover:shadow-md hover:scale-105 border border-transparent hover:border-primary transition-all duration-300"
  >
    Contact
  </a>
</div>
      </nav>
    </header>
  )
}