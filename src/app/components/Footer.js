import React from 'react'
import Link from 'next/link'
import { Compass } from 'lucide-react'
export default function Footer() {
  return (
    <div>
          {/* Footer */}
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
                <li><Link href="/about" className="hover:text-white">About Us</Link> </li>
                <li><Link href="/about" className="hover:text-white">Careers</Link> </li>
                <li><Link href="/about" className="hover:text-white">Press</Link> </li>
                <li><Link href="/about" className="hover:text-white">Blog</Link> </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">Help Center</Link> </li>
                <li><Link href="/about" className="hover:text-white">Contact Us</Link> </li>
                <li><Link href="/about" className="hover:text-white">Privacy Policy</Link> </li>
                <li><Link href="/about" className="hover:text-white">Terms of Service</Link> </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">Facebook</Link> </li>
                <li><Link href="/about" className="hover:text-white">Twitter</Link> </li>
                <li><Link href="/about" className="hover:text-white">Instagram</Link> </li>
                <li><Link href="/about" className="hover:text-white">YouTube</Link> </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} LAP Lanka Tours. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
