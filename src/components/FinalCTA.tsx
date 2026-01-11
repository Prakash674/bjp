import { ArrowRight, Calendar, Phone, Mail, MapPin } from 'lucide-react'

export default function FinalCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="final-cta" className="py-16 lg:py-24 bg-gradient-to-br from-school-blue via-blue-700 to-school-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 animate-fade-in">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed">
            Every parent wants the best for their child. You've read about our values, 
            our approach, and heard from other parents. Now it's time to take the next step. 
            Join hundreds of satisfied parents who trust Bihar Jyotipunj Pathshala for their 
            child's education and future success.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('admission')}
            className="group bg-white text-school-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a School Visit</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('admission')}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Apply for Admission</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="tel:+917488649507"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300 hover-lift group"
          >
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">Call Us</div>
            <div className="text-sm opacity-90">+91 74886 49507</div>
          </a>
          <a
            href="mailto:info@biharjyotipunjpathshala.com"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300 hover-lift group"
          >
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">Email Us</div>
            <div className="text-sm opacity-90">info@biharjyotipunjpathshala.com</div>
          </a>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">Visit Us</div>
            <div className="text-sm opacity-90">High School Road, Jadopur,<br />Gopalganj, Bihar</div>
          </div>
        </div>

        {/* Trust Message */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-lg">
            <span className="font-semibold">Admissions Open for Academic Year 2024-25</span>
            <br />
            Limited seats available. Apply early to secure your child's place.
          </p>
        </div>
      </div>
    </section>
  )
}
