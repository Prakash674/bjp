import { Target, Eye, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            About Bihar Jyotipunj Pathshala
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-school-blue to-school-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A school committed to nurturing young minds with excellence, values, and holistic development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-school-light to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-slide-in border border-blue-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-school-blue to-blue-600 p-4 rounded-xl shadow-md">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To provide quality education that combines academic excellence with strong moral values, 
              preparing students to become confident, responsible, and successful individuals who 
              contribute positively to society.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-green-50 to-school-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-slide-in border border-green-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-school-green to-green-600 p-4 rounded-xl shadow-md">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To be a leading educational institution that shapes future leaders through innovative 
              teaching methods, character building, and a nurturing environment where every child 
              can discover and realize their full potential.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Award className="w-6 h-6 text-saffron-500" />
              <h3 className="text-2xl font-display font-bold text-gray-900">Our Core Values</h3>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Excellence', desc: 'Striving for the highest standards in academics and character' },
              { title: 'Discipline', desc: 'Building self-control and respect for rules and authority' },
              { title: 'Values', desc: 'Instilling moral principles and ethical behavior' },
              { title: 'Care', desc: 'Creating a warm, supportive, and safe learning environment' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100 hover:border-school-blue/30 group"
              >
                <h4 className="font-display font-bold text-lg text-school-blue mb-2 group-hover:text-school-green transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
