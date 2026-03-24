

// 'use client'

// import { Card } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import {
//   FaEnvelope,
//   FaPhone,
//   FaGithub,
//   FaLinkedin
// } from 'react-icons/fa'

// export function Contact() {
//   return (
//     <section id="contact" className="px-6 md:px-12 py-20 md:py-32">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="mb-16">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-1 h-12 bg-primary"></div>
//             <h2 className="text-3xl font-bold">Get In Touch</h2>
//           </div>

//           <p className="text-muted-foreground max-w-2xl">
//             I'm open to opportunities, collaborations, and exciting projects.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {/* Email */}
//           <Card className="p-6 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 transition-all">
//             <FaEnvelope className="text-3xl text-primary mx-auto mb-4" />
//             <h3 className="font-bold mb-2">Email</h3>
//             <p className="text-sm text-muted-foreground mb-3">
//               For collaborations
//             </p>
//             <a href="mailto:kamireddysatyanarayana1@gmail.com" className="text-primary font-semibold hover:underline">
//               Send Mail
//             </a>
//           </Card>

//           {/* Phone */}
//           <Card className="p-6 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 transition-all">
//             <FaPhone className="text-3xl text-primary mx-auto mb-4" />
//             <h3 className="font-bold mb-2">Phone</h3>
//             <p className="text-sm text-muted-foreground mb-3">
//               Available for calls
//             </p>
//             <a href="tel:+919573513344" className="text-primary font-semibold hover:underline">
//               Call Now
//             </a>
//           </Card>

//           {/* Social */}
//           <Card className="p-6 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 transition-all">
//             <div className="flex justify-center gap-4 mb-4">
//               <FaGithub className="text-2xl text-primary hover:scale-110 transition" />
//               <FaLinkedin className="text-2xl text-primary hover:scale-110 transition" />
//             </div>

//             <h3 className="font-bold mb-2">Connect</h3>

//             <div className="space-y-2 text-sm">
//               <a href="https://github.com/" target="_blank" className="block hover:text-primary transition">
//                 GitHub →
//               </a>
//               <a href="https://linkedin.com/" target="_blank" className="block hover:text-primary transition">
//                 LinkedIn →
//               </a>
//             </div>
//           </Card>

//         </div>

//         {/* CTA */}
//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-bold mb-3">
//             Let’s Build Something Amazing 🚀
//           </h3>

//           <Button className="mt-4 px-6 py-3 text-lg hover:scale-105 transition">
//             <a href="mailto:kamireddysatyanarayana1@gmail.com">
//               Start a Project
//             </a>
//           </Button>
//         </div>

//       </div>
//     </section>
//   )
// }

// 'use client'

// import { Button } from '@/components/ui/button'
// import { Card } from '@/components/ui/card'
// import { useState } from 'react'
// import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

// export function Contact() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e: any) => {
//     e.preventDefault()
//     alert('Message sent! (connect backend later)')
//   }

//   return (
//     <section id="contact" className="px-6 md:px-12 py-16 md:py-24">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="mb-16 text-center md:text-left">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-1 h-12 bg-primary"></div>
//             <h2 className="text-3xl font-bold">Get In Touch</h2>
//           </div>
//           <p className="text-muted-foreground max-w-2xl mr-auto">
//             Interested in working together or just want to say hi? Fill out the form and I’ll get back to you!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

//           {/* LEFT — FORM */}
//           <Card className="p-8 shadow-lg hover:shadow-xl transition">
//             <h3 className="text-xl font-bold mb-6">Send a Message</h3>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg bg-transparent focus:outline-none focus:border-primary"
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg bg-transparent focus:outline-none focus:border-primary"
//                 required
//               />

//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows={5}
//                 value={form.message}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg bg-transparent focus:outline-none focus:border-primary"
//                 required
//               />

//               {/* <Button className="w-full mt-2 bg-primary hover:bg-primary/90 transition-all">
//                 Send Message 🚀
//               </Button> */}
//               <button 
//   type="submit"
//   className="w-full mt-6 py-3 px-6 rounded-lg font-bold transition-all duration-300 
//              bg-white text-black hover:bg-white/90 hover:scale-[1.02] 
//              active:scale-95 shadow-lg flex items-center justify-center gap-2 group"
// >
//   Send Message 
//   <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//     🚀
//   </span>
// </button>
//             </form>
//           </Card>

//           {/* RIGHT — INFO PANEL */}
//           <div className="flex flex-col justify-center h-full bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
//             <h3 className="text-2xl font-bold mb-6 text-primary">Contact Info</h3>

//             <div className="flex items-center gap-4 mb-4">
//               <FaEnvelope className="text-2xl text-primary" />
//               <p className="text-lg font-medium">kamireddysatyanarayana1@gmail.com</p>
//             </div>

//             <div className="flex items-center gap-4 mb-4">
//               <FaPhone className="text-2xl text-primary" />
//               <p className="text-lg font-medium">+91-9573513344</p>
//             </div>

//             <div className="flex items-center gap-4 mb-4">
//               <FaGithub className="text-2xl text-primary" />
//               <a href="https://github.com/" target="_blank" className="text-lg font-medium hover:underline">
//                 GitHub
//               </a>
//             </div>

//             <div className="flex items-center gap-4 mb-4">
//               <FaLinkedin className="text-2xl text-primary" />
//               <a href="https://linkedin.com/" target="_blank" className="text-lg font-medium hover:underline">
//                 LinkedIn
//               </a>
//             </div>

//             <p className="text-muted-foreground/80 mt-6">
//               Feel free to reach out for collaborations, projects, or just a friendly chat!
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

//new code

'use client'
 
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SectionReveal } from '@/components/section-reveal'
 
export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! (connect backend later)')
  }
 
  return (
    <section id="contact" className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
 
          {/* Heading */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-12 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Interested in working together or just want to say hi? Fill out the form and I'll get back to you!
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
 
            {/* LEFT — FORM */}
            <Card className="p-8 shadow-lg bg-card border border-border hover:border-primary/30 hover:shadow-primary/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-foreground">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text" name="name" placeholder="Your Name"
                  value={form.name} onChange={handleChange}
                  className="w-full p-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground
                             focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
                <input
                  type="email" name="email" placeholder="Your Email"
                  value={form.email} onChange={handleChange}
                  className="w-full p-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground
                             focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
                <textarea
                  name="message" placeholder="Your Message" rows={5}
                  value={form.message} onChange={handleChange}
                  className="w-full p-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground
                             focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full mt-2 py-3 px-6 rounded-lg font-bold transition-all duration-300
                             bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]
                             active:scale-95 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">🚀</span>
                </button>
              </form>
            </Card>
 
            {/* RIGHT — INFO */}
            <div className="flex flex-col justify-center h-full bg-card p-8 rounded-xl border border-border
                            hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Info</h3>
 
              {[
                { icon: <FaEnvelope className="text-2xl text-primary" />, content: 'kamireddysatyanarayana1@gmail.com' },
                { icon: <FaPhone className="text-2xl text-primary" />, content: '+91-9573513344' },
              ].map(({ icon, content }) => (
                <div key={content} className="flex items-center gap-4 mb-4">
                  {icon}
                  <p className="text-lg font-medium text-foreground">{content}</p>
                </div>
              ))}
 
              <div className="flex items-center gap-4 mb-4">
                <FaGithub className="text-2xl text-primary" />
                <a href="https://github.com/satyanarayana1234567" target="_blank"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <FaLinkedin className="text-2xl text-primary" />
                <a href="https://www.linkedin.com/in/satyanarayana03/" target="_blank"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </div>
 
              <p className="text-muted-foreground mt-6">
                Feel free to reach out for collaborations, projects, or just a friendly chat!
              </p>
            </div>
 
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}