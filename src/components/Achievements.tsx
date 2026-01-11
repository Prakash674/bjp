import { Award, Users, Calendar, Star, TrendingUp, Heart, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  child: string
  text: string
  rating: number
}

export default function Achievements() {
  const testimonials: Testimonial[] = [
    {
      name: 'Priya Sharma',
      role: 'Parent',
      child: 'Class 5',
      text: 'Bihar Jyotipunj Pathshala has been a blessing for our family. The teachers are caring, the academics are strong, and most importantly, my child feels safe and happy here.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent',
      child: 'Class 3',
      text: 'The discipline and values taught here are exactly what we wanted. Our child has improved not just academically but also in confidence and behavior.',
      rating: 5,
    },
    {
      name: 'Sunita Devi',
      role: 'Parent',
      child: 'UKG',
      text: 'The teachers give individual attention to each child. My daughter loves going to school every day. The school truly cares about holistic development.',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-school-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Trusted by Parents
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-school-blue to-school-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from parents who have trusted us with their children's 
            education. Their stories reflect our commitment to excellence and your child's success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow animate-slide-up">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-school-blue" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Years of Excellence</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-school-green" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Happy Students</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Expert Teachers</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-saffron-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-saffron-500" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600 font-medium">Parent Satisfaction</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold text-center text-gray-900 mb-8">
            What Parents Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-school-blue/30 hover-lift group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-saffron-500 text-saffron-500 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 0.05}s` }} />
                  ))}
                </div>
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-school-blue/20 mb-2" />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-base">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-school-blue to-school-green w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} • {testimonial.child}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-display font-bold text-gray-900">
                Our Commitment
              </h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Academic Excellence</h4>
              <p className="text-gray-600">
                Consistently strong academic results and student achievements
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Character Building</h4>
              <p className="text-gray-600">
                Focus on values, discipline, and holistic personality development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
