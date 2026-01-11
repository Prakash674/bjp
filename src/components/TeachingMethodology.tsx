import { Activity, Lightbulb, ClipboardCheck, Palette, Trophy, Book } from 'lucide-react'

interface Method {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export default function TeachingMethodology() {
  const methods: Method[] = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Activity-Based Learning',
      description: 'Hands-on activities, experiments, and interactive sessions make learning fun and memorable, especially for early classes.',
      color: 'text-orange-600',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Concept Clarity',
      description: 'Focus on understanding concepts deeply rather than rote learning, ensuring students truly grasp what they study.',
      color: 'text-yellow-600',
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: 'Regular Assessment',
      description: 'Continuous evaluation through tests, quizzes, and assignments helps track progress and identify areas for improvement.',
      color: 'text-blue-600',
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Balanced Curriculum',
      description: 'Equal emphasis on academics, sports, arts, and extracurricular activities for holistic development.',
      color: 'text-green-600',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Creative Expression',
      description: 'Art, music, drama, and creative writing opportunities help students express themselves and discover talents.',
      color: 'text-pink-600',
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Sports & Physical Education',
      description: 'Regular sports activities and physical education classes promote fitness, teamwork, and healthy competition.',
      color: 'text-red-600',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-school-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Teaching Methodology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-school-blue to-school-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A balanced approach that combines traditional values with modern teaching techniques 
            to ensure comprehensive learning and development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-school-blue group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${method.color} mb-4 inline-flex p-3 rounded-lg bg-gray-50`}>
                {method.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Methodology Overview */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                How We Teach
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-school-blue font-bold mt-1">✓</span>
                  <span>Interactive classroom sessions with multimedia support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-school-blue font-bold mt-1">✓</span>
                  <span>Practical demonstrations and hands-on learning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-school-blue font-bold mt-1">✓</span>
                  <span>Regular homework and revision to reinforce learning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-school-blue font-bold mt-1">✓</span>
                  <span>Parent-teacher meetings for continuous feedback</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-school-blue font-bold mt-1">✓</span>
                  <span>Remedial classes for students needing extra support</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-school-light to-blue-50 rounded-xl p-8">
              <h4 className="text-xl font-display font-bold text-gray-900 mb-4">
                Learning Outcomes
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our methodology ensures students develop:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Critical Thinking', 'Problem Solving', 'Communication', 'Creativity', 'Confidence', 'Teamwork'].map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-school-green rounded-full"></div>
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
