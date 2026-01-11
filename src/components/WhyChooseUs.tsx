import { Users, Shield, BookOpen, Heart, Award, Target } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export default function WhyChooseUs() {
  const features: Feature[] = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Experienced & Caring Teachers',
      description: 'Our dedicated faculty brings years of experience and genuine care for each student\'s growth and success.',
      color: 'text-school-blue',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Strong Academic Foundation',
      description: 'Well-structured curriculum that builds solid foundations in all subjects, preparing students for future success.',
      color: 'text-school-green',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safe & Disciplined Environment',
      description: 'A secure campus with strict safety protocols and a disciplined atmosphere that promotes focused learning.',
      color: 'text-purple-600',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Individual Attention',
      description: 'Small class sizes ensure personalized attention, helping every child reach their full potential.',
      color: 'text-pink-600',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Focus on Values & Character',
      description: 'Beyond academics, we instill moral values, respect, and character building in every student.',
      color: 'text-saffron-500',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Confidence & Skills Development',
      description: 'Regular activities, presentations, and competitions build confidence and essential life skills.',
      color: 'text-indigo-600',
    },
  ]

  return (
    <section id="why-choose" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Why Choose Bihar Jyotipunj Pathshala?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-school-blue to-school-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As a parent, you want to know: <span className="font-semibold text-school-blue">Will my child be safe? 
            Will they learn well? Will they be happy?</span> We answer all these concerns with our proven 
            track record and commitment to excellence. Here's what makes us the right choice for your family:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-school-blue/20 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} mb-4 inline-flex p-3 rounded-lg bg-gray-50 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div className="mt-16 relative overflow-hidden bg-gradient-to-r from-school-blue via-blue-600 to-school-green rounded-2xl p-8 lg:p-12 text-white text-center shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
              Your Child's Success is Our Commitment
            </h3>
            <p className="text-lg lg:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">
              Every morning, when you drop off your child, you're entrusting us with their future. 
              We take that trust seriously. We partner with parents to ensure every child receives 
              the best education, care, and guidance needed to excel academically and grow into 
              confident, responsible individuals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>✓</span>
                <span>Parent-Teacher Partnership</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>✓</span>
                <span>Regular Progress Updates</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>✓</span>
                <span>Open Communication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
