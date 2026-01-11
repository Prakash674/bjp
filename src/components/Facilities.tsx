import { Building2, BookOpen, Dumbbell, Shield, Droplets, Wifi, Users, Sparkles } from 'lucide-react'

interface Facility {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export default function Facilities() {
  const facilities: Facility[] = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Clean & Spacious Classrooms',
      description: 'Well-ventilated, well-lit classrooms with modern furniture and learning aids for comfortable learning.',
      color: 'text-blue-600',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safe & Secure Campus',
      description: '24/7 security, CCTV surveillance, and strict entry protocols ensure your child\'s safety at all times.',
      color: 'text-green-600',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Well-Stocked Library',
      description: 'A rich collection of books, reference materials, and reading resources for all age groups.',
      color: 'text-purple-600',
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: 'Sports & Playground',
      description: 'Dedicated sports facilities and playground areas for physical activities and team sports.',
      color: 'text-orange-600',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Activity Areas',
      description: 'Specialized spaces for art, music, dance, and other creative activities to nurture talents.',
      color: 'text-pink-600',
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Hygiene & Cleanliness',
      description: 'Regular cleaning, sanitization, and clean drinking water facilities throughout the campus.',
      color: 'text-cyan-600',
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Digital Learning',
      description: 'Smart classrooms with digital boards and technology-enabled learning resources.',
      color: 'text-indigo-600',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Student Support',
      description: 'Counseling services, first-aid facilities, and dedicated support staff for student welfare.',
      color: 'text-red-600',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Facilities & Campus
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-school-blue to-school-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A modern, well-equipped campus designed to provide the best learning environment 
            and ensure your child's comfort, safety, and growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-school-blue/30 group animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`${facility.color} mb-4 inline-flex p-3 rounded-lg bg-gray-50 group-hover:scale-110 transition-transform`}>
                {facility.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Campus Highlights */}
        <div className="bg-gradient-to-r from-school-blue to-school-green rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Safe & Secure</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Security & Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Clean</div>
              <div className="text-lg opacity-90">Hygienic Environment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
