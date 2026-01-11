import { Baby, GraduationCap, BookOpen, Sparkles } from 'lucide-react'

interface ClassGroup {
  title: string
  classes: string[]
  description: string
  icon: React.ReactNode
  color: string
  bgColor: string
}

export default function ClassesOffered() {
  const classGroups: ClassGroup[] = [
    {
      title: 'Pre-School',
      classes: ['Play Group', 'Nursery', 'LKG', 'UKG'],
      description: 'Early childhood education focusing on play-based learning, social skills, and foundational concepts in a nurturing environment.',
      icon: <Baby className="w-8 h-8" />,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
    },
    {
      title: 'Primary Section',
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
      description: 'Building strong academic foundations with interactive learning, developing reading, writing, and mathematical skills.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'text-school-blue',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Middle School',
      classes: ['Class 6', 'Class 7', 'Class 8'],
      description: 'Advanced learning with subject specialization, critical thinking development, and preparation for higher education.',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'text-school-green',
      bgColor: 'bg-green-100',
    },
  ]

  return (
    <section id="classes" className="py-16 lg:py-24 bg-gradient-to-b from-white to-school-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-saffron-500" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900">
              Classes Offered
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-school-blue to-school-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive education from early childhood to middle school, 
            designed to nurture every stage of your child's learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {classGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className={`${group.bgColor} p-6 text-center`}>
                <div className={`${group.color} inline-flex p-4 rounded-full bg-white mb-4 group-hover:scale-110 transition-transform`}>
                  {group.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {group.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {group.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Classes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.classes.map((className, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {className}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md text-center">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-school-blue">Age-Appropriate Learning:</span> Each section 
            is designed with age-appropriate curriculum, teaching methods, and activities to ensure 
            optimal learning and development.
          </p>
          <p className="text-gray-600">
            Our experienced teachers understand the unique needs of each age group and provide 
            personalized attention to help every child thrive.
          </p>
        </div>
      </div>
    </section>
  )
}
