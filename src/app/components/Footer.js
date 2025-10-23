import React from 'react'
import Link from 'next/link'
import { Compass, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass size={24} />
              <span className="text-xl font-bold">LAP Lanka Tours</span>
            </div>
            <p className="text-gray-400">Your trusted companion for unforgettable journeys around the world.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>              
              <li><Link href="/tour-packages" className="hover:text-white transition-colors">Tour Packages</Link></li>             
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+94764944775" className="hover:text-white transition-colors">+94 76 494 4775</a>
              </li>
               <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:|+94777314775" className="hover:text-white transition-colors">+94 77 731 4775</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:laplankatours@gmail.com" className="hover:text-white transition-colors">laplankatours@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} LAP Lanka Tours. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
// import React from 'react'
// import Link from 'next/link'
// import { Compass } from 'lucide-react'
// export default function Footer() {
//   return (
//     <div>
//           {/* Footer */}
//       <footer className="bg-gray-800 text-white pt-16 pb-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <Compass size={24} />
//                 <span className="text-xl font-bold">LAP Lanka Tours</span>
//               </div>
//               <p className="text-gray-400">Your trusted companion for unforgettable journeys around the world.</p>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Company</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li><Link href="/about" className="hover:text-white">About Us</Link> </li>
//                 {/* <li><Link href="/about" className="hover:text-white">Careers</Link> </li> */}
//                 {/* <li><Link href="/about" className="hover:text-white">Press</Link> </li> */}
//                 {/* <li><Link href="/about" className="hover:text-white">Blog</Link> </li> */}
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Support</h3>
//               <ul className="space-y-2 text-gray-400">
//                 {/* <li><Link href="/about" className="hover:text-white">Help Center</Link> </li> */}
//                 <li><Link href="/about" className="hover:text-white">Contact Us</Link> </li>
//                 {/* <li><Link href="/about" className="hover:text-white">Privacy Policy</Link> </li> */}
//                 {/* <li><Link href="/about" className="hover:text-white">Terms of Service</Link> </li> */}
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Connect</h3>
//               <ul className="space-y-2 text-gray-400">
//                 {/* <li><Link href="/about" className="hover:text-white">Facebook</Link> </li> */}
//                 {/* <li><Link href="/about" className="hover:text-white">Twitter</Link> </li> */}
//                 <li><Link href="/about" className="hover:text-white">Instagram</Link> </li>
//                 {/* <li><Link href="/about" className="hover:text-white">YouTube</Link> </li> */}
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
//             <p>© {new Date().getFullYear()} LAP Lanka Tours. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }
