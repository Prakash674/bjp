import { useState } from 'react'
import { Phone, MessageCircle, X, Mail } from 'lucide-react'

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      <div className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <a
          href="tel:+917488649507"
          className="bg-school-green text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110 animate-slide-up"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/917488649507"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="mailto:info@biharjyotipunjpathshala.com"
          className="bg-school-blue text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
          aria-label="Email us"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-school-blue to-school-green text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
        aria-label="Toggle contact options"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6" />
        )}
      </button>
    </div>
  )
}
