// export function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="border-t border-border py-12 px-6 md:px-12">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <h3 className="font-bold mb-4">Kamireddy Satyanarayana</h3>
//             <p className="text-sm text-muted-foreground/80">
//               Full-Stack Developer & UI/UX Designer crafting elegant digital experiences
//             </p>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">
//                   Education
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4 text-sm">Connect</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="https://github.com/satyanarayana1234567" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
//                   GitHub
//                 </a>
//               </li>
//               <li>
//                 <a href="https://www.linkedin.com/in/satyanarayana03/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
//                   LinkedIn
//                 </a>
//               </li>
//               <li>
//                 <a href="mailto:kamireddysatyanarayana1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
//                   Email
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4 text-sm">Contact Info</h4>
//             <ul className="space-y-2 text-sm text-muted-foreground/80">
//               <li>📧 kamireddysatyanarayana1@gmail.com</li>
//               <li>📱 +91-9573513344</li>
//               <li>📍 India</li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60">
//           <p>&copy; {currentYear} Kamireddy Satyanarayana. All rights reserved.</p>
//           <p>Crafted with code and creativity</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

//new code

export function Footer() {
  const currentYear = new Date().getFullYear()
 
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
 
          <div>
            <h3 className="font-bold mb-4 text-foreground">Kamireddy Satyanarayana</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Developer & UI/UX Designer crafting elegant digital experiences
            </p>
          </div>
 
          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[['About', '#about'], ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
 
          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/satyanarayana1234567" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/satyanarayana03/" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:kamireddysatyanarayana1@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Email
                </a>
              </li>
            </ul>
          </div>
 
          <div>
            <h4 className="font-semibold mb-4 text-sm text-foreground">Contact Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 kamireddysatyanarayana1@gmail.com</li>
              <li>📱 +91-9573513344</li>
              <li>📍 India</li>
            </ul>
          </div>
 
        </div>
 
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60">
          <p>&copy; {currentYear} Kamireddy Satyanarayana. All rights reserved.</p>
          <p>Crafted with code and creativity</p>
        </div>
      </div>
    </footer>
  )
}