'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [name, setName] = useState("Baby");
  
  // Confetti configuration
  const confettiColors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
  const confettiCount = 100;
  const confettiElements = [];
  
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);
  
  for (let i = 0; i < confettiCount; i++) {
    confettiElements.push(
      <motion.div
        key={i}
        initial={{ 
          y: -20, 
          x: Math.random() * window.innerWidth, 
          opacity: 1, 
          scale: Math.random() * 0.5 + 0.5 
        }}
        animate={{ 
          y: window.innerHeight, 
          opacity: 0,
          rotate: Math.random() * 360
        }}
        transition={{ 
          duration: Math.random() * 2 + 3,
          ease: "linear" 
        }}
        className="fixed w-3 h-3 rounded-full z-50"
        style={{ backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)] }}
      />
    );
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      {showConfetti && confettiElements}
      
      <div className="max-w-md w-full">
        <motion.div 
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Card */}
          <motion.div
            className={`relative bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-2xl overflow-hidden ${isOpen ? 'h-96' : 'h-64'}`}
            animate={{ height: isOpen ? 400 : 250 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {/* Birthday text */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <motion.h2 
                  className="text-white text-3xl font-bold mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Tap to Open Your Birthday Surprise
                </motion.h2>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.6, times: [0, 0.7, 1] }}
                  className="text-6xl"
                >
                  🎁
                </motion.div>
              </div>
            </motion.div>
            
            {/* Inside card content */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, delay: isOpen ? 0.2 : 0 }}
            >
              <motion.h1 
                className="text-3xl font-bold mb-2 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={isOpen ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                Happy Birthday, {name}!
              </motion.h1>
              
              <motion.div
                className="space-y-4 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={isOpen ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xl text-center">
                  Every line of code I write reminds me of you - elegant, brilliant, and essential to my program. 
                </p>
            
                <p className="text-xl text-center">
                  Like the perfect function, your love executes flawlessly in my heart. Happy Birthday, my Charm!
                </p>
              </motion.div>
              
              <motion.div 
                className="flex space-x-4 mb-6"
                initial={{ scale: 0 }}
                animate={isOpen ? { scale: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                {[..."❤️🎉🎂"].map((emoji, i) => (
                  <motion.span 
                    key={i}
                    className="text-4xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      duration: 2,
                      delay: i * 0.3
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div className="flex flex-col items-center gap-4">
                <motion.button
                  className="bg-white text-purple-600 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={isOpen ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  onClick={() => setShowConfetti(true)}
                >
                  Celebrate Our Love!
                </motion.button>
                
                <motion.p
                  className="text-sm italic text-center text-white opacity-80"
                  initial={{ opacity: 0 }}
                  animate={isOpen ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  Forever yours, with all my heart ❤️
                </motion.p>
              </motion.div>
            </motion.div>
            
            {/* Tech elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Binary code background */}
              <div className="absolute inset-0 opacity-10">
                {Array(20).fill(0).map((_, i) => (
                  <motion.div 
                    key={i}
                    className="absolute text-xs text-white"
                    style={{ 
                      left: `${Math.random() * 100}%`, 
                      top: `${Math.random() * 100}%` 
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                    }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </motion.div>
                ))}
              </div>
              
              {/* Floating romantic and tech icons */}
              {["⚛️", "❤️", "💖", "🔷", "💌", "⚡"].map((icon, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  style={{ 
                    left: `${20 + i * 30}%`, 
                    top: '85%' 
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Customize section */}
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded font-medium hover:opacity-90 transition"
            >
              {isOpen ? "Close Card" : "Open Card"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}