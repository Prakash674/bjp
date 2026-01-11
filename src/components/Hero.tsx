import { ArrowRight, Shield, BookOpen, Users } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-school-light via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium">
              Admissions Open for 2024-25
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Where Your Child's Dreams
              <span className="gradient-text block mt-2">
                Take Flight
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 text-balance leading-relaxed">
              As parents, you want the best for your child. At Bihar Jyotipunj Pathshala, 
              we understand that trust. We provide a <span className="font-semibold text-school-blue">safe, nurturing environment</span> where 
              your child will grow academically, develop strong values, and build the confidence 
              to succeed in life.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-school-green/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-school-green" />
                </div>
                <span className="font-semibold text-gray-800">100% Safe</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-school-blue/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-school-blue" />
                </div>
                <span className="font-semibold text-gray-800">Proven Results</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-saffron-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-saffron-500" />
                </div>
                <span className="font-semibold text-gray-800">Caring Teachers</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('admission')}
                className="group bg-school-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-white text-school-blue px-8 py-4 rounded-lg font-semibold text-lg border-2 border-school-blue hover:bg-school-light transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-to-br from-school-blue via-blue-600 to-school-green rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift">
              <div className="bg-white rounded-xl p-8 text-center relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231e40af' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-school-light via-blue-100 to-green-100 rounded-full flex items-center justify-center animate-float shadow-lg">
                    <BookOpen className="w-16 h-16 text-school-blue" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    Pre-School to Class 8
                  </h3>
                  <p className="text-gray-600 mb-6 font-medium">
                    Complete educational journey under one roof
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold text-school-blue">3+</div>
                      <div className="text-xs text-gray-600 font-medium">Years</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold text-school-green">500+</div>
                      <div className="text-xs text-gray-600 font-medium">Students</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold text-saffron-500">50+</div>
                      <div className="text-xs text-gray-600 font-medium">Teachers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-saffron-200 rounded-full opacity-50 blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-green-200 rounded-full opacity-30 blur-lg animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
