// 'use client'

// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import { useState } from 'react'

// export function Hero() {
//   const [isHovering, setIsHovering] = useState(false)

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-between px-6 md:px-12 pt-32 md:pt-20 pb-20 md:pb-0 relative overflow-hidden">
//       {/* Animated gradient background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-red-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Left Side Content */}
//       <div className="max-w-2xl flex flex-col justify-center flex-1 z-10">
//         <div className="mb-8 md:mb-12 space-y-2">
//           <p className="text-2xl md:text-4xl font-medium text-primary">Hello, I'm</p>
//           <h1 className="text-5xl md:text-7xl font-bold text-foreground">
//             Kamireddy
//             <br />
//             Satyanarayana
//           </h1>
//           <p className="text-2xl md:text-3xl font-bold text-primary mt-4">
//             Full-Stack Developer & UI/UX Designer
//           </p>
//           <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
//             I build beautiful, scalable digital experiences combining clean code with thoughtful design. Passionate about creating solutions that solve real problems.
//           </p>
//         </div>

//         <div className="flex flex-wrap gap-4 mt-8">
//           <a
//             href="/resume.pdf"
//             download="Kamireddy_Satyanarayana_Resume.pdf"
//             className="group relative inline-block"
//           >
//             {/* <button className="relative px-8 py-3 bg-primary text-white rounded-lg font-bold text-base flex items-center gap-2 hover:bg-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"> */}
//             <button className="relative px-8 py-3 bg-primary text-white rounded-xl font-semibold text-base flex items-center gap-2 shadow-md border border-primary/30 hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300">
//             <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//               </svg>
//               Get My CV
//             </button>
//           </a>

//           <a
//             href="#projects"
//             className="group relative inline-block"
//           >
//             {/* <button className="relative px-8 py-3 border-2 border-primary text-primary rounded-lg font-bold text-base hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"> */}
//             <button className="relative px-8 py-3 border border-primary text-primary rounded-xl font-semibold text-base backdrop-blur-sm hover:bg-primary hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300">
//             <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>
//               View My Work
//             </button>
//           </a>
//         </div>

//         <div className="mt-12 flex items-center gap-6 text-sm">
//           <a
//             href="https://github.com/satyanarayana1234567"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
//           >
          
          
//             <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//               </svg>
//             </div>
//             <span>GitHub</span>
//           </a>

//           <a
//             href="https://www.linkedin.com/in/satyanarayana03/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300"
//           >
//             <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.776-2.237-1.088 0-1.735.733-2.019 1.442-.104.252-.13.604-.13.956v5.408h-3.555V9h3.555v1.561h.05c.477-.9 1.637-2.185 3.37-2.185 3.517 0 4.164 2.312 4.164 5.324v6.752zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
//               </svg>
//             </div>
//             <span>LinkedIn</span>
//           </a>

//           <a
//             href="mailto:kamireddysatyanarayana1@gmail.com"
//             className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300"
//           >
//             <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </div>
//             <span>Email</span>
//           </a>
//         </div>
//       </div>

//       {/* Right Side - Profile Photo */}
//       <div className="hidden lg:flex flex-1 items-center justify-center relative min-h-screen">
//         <div
//           className="relative"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           {/* Gradient Background Circle */}
//           <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary blur-3xl transition-all duration-500 ${isHovering ? 'opacity-100 scale-110' : 'opacity-60'}`}></div>

//           {/* Profile Image Container */}
//           <div className={`relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl transition-all duration-500 ${isHovering ? 'shadow-2xl shadow-primary/50 scale-105' : ''}`}>
//             <Image
//               src='/profile.png'
//               alt="Kamireddy Satyanarayana"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

//new code

'use client'
 
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'
 
export function Hero() {
  const [isHovering, setIsHovering] = useState(false)
 
  return (
    <section id="hero" className="min-h-screen flex items-center justify-between px-6 md:px-12 pt-32 md:pt-20 pb-20 md:pb-0 relative overflow-hidden">
 
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/15 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
 
      {/* Left Side */}
      <div className="max-w-2xl flex flex-col justify-center flex-1 z-10">
        <div className="mb-8 md:mb-12 space-y-2">
          <p className="text-2xl md:text-4xl font-medium text-primary">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Kamireddy
            <br />
            Satyanarayana
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-primary mt-4">
            Full-Stack Developer & UI/UX Designer
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            I build beautiful, scalable digital experiences combining clean code with thoughtful
            design. Passionate about creating solutions that solve real problems.
          </p>
        </div>
 
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/resume.pdf" download="Kamireddy_Satyanarayana_Resume.pdf" className="group relative inline-block">
            <button className="relative px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-base flex items-center gap-2 shadow-md border border-primary/30 hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Get My CV
            </button>
          </a>
 
          <a href="#projects" className="group relative inline-block">
            <button className="relative px-8 py-3 border border-primary text-primary rounded-xl font-semibold text-base backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              View My Work
            </button>
          </a>
        </div>
 
        <div className="mt-12 flex items-center gap-6 text-sm">
          <a href="https://github.com/satyanarayana1234567" target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <span>GitHub</span>
          </a>
 
          <a href="https://www.linkedin.com/in/satyanarayana03/" target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.776-2.237-1.088 0-1.735.733-2.019 1.442-.104.252-.13.604-.13.956v5.408h-3.555V9h3.555v1.561h.05c.477-.9 1.637-2.185 3.37-2.185 3.517 0 4.164 2.312 4.164 5.324v6.752zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </div>
            <span>LinkedIn</span>
          </a>
 
          <a href="mailto:kamireddysatyanarayana1@gmail.com"
            className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span>Email</span>
          </a>
        </div>
      </div>
 
      {/* Right Side – Profile Photo */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative min-h-screen">
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary blur-3xl transition-all duration-500 ${isHovering ? 'opacity-80 scale-110' : 'opacity-40'}`}></div>
          <div className={`relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl transition-all duration-500 ${isHovering ? 'shadow-2xl shadow-primary/40 scale-105' : ''}`}>
            <Image src='/profile.png' alt="Kamireddy Satyanarayana" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}