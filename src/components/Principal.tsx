import { Award, GraduationCap, Heart, Quote } from 'lucide-react'

export default function Principal() {
  return (
    <section id="principal" className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Message from Principal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-school-blue to-school-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading with vision, dedication, and a commitment to excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Principal Photo and Info */}
          <div className="order-2 lg:order-1 animate-slide-in">
            <div className="relative">
              {/* Photo Container */}
              <div className="relative bg-gradient-to-br from-school-blue to-school-green rounded-2xl p-2 shadow-2xl">
                <div className="bg-white rounded-xl p-4">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                    {/* Placeholder for Principal Photo - Replace with actual image */}
                    {/* <div className="text-center p-8">
                      <GraduationCap className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-sm font-medium">
                        Principal Photo
                      </p>
                      <p className="text-gray-400 text-xs mt-2">
                        Replace with actual image
                      </p>
                    </div> */}
                    {/* Uncomment below and add your image path when ready: */}
                    <img 
                      src="/principal-photo.png" 
                      alt="Principal" 
                      className="w-full h-full object-cover"
                    />
                   
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-saffron-200 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
              </div>

              {/* Principal Name and Title */}
              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  [Principal Name]
                </h3>
                <p className="text-lg text-school-blue font-semibold mb-2">
                  Principal
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-saffron-500" />
                    <span>M.A., B.Ed.</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4 text-school-blue" />
                    <span>20+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Principal Message */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border-l-4 border-school-blue">
              <div className="mb-6">
                <Quote className="w-12 h-12 text-school-blue/20 mb-4" />
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Welcome to Bihar Jyotipunj Pathshala
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  At Bihar Jyotipunj Pathshala, we believe that education is not just about 
                  academic excellence, but about nurturing the whole child. Our mission is to 
                  provide a learning environment where every child feels valued, safe, and 
                  inspired to reach their full potential.
                </p>
                <p>
                  We combine traditional values with modern teaching methodologies to ensure 
                  that our students develop not only strong academic foundations but also 
                  essential life skills, moral values, and the confidence to face future 
                  challenges.
                </p>
                <p>
                  As Principal, I am committed to maintaining the highest standards of education 
                  and ensuring that every child receives the individual attention they deserve. 
                  Together with our dedicated team of teachers, we work tirelessly to create 
                  an atmosphere of learning, growth, and excellence.
                </p>
                <p className="font-semibold text-school-blue">
                  We welcome you to join our school family and be part of your child's 
                  journey towards a bright and successful future.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-semibold text-gray-900">[Principal Name]</p>
                    <p className="text-sm text-gray-600">Principal, Bihar Jyotipunj Pathshala</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Principal's Vision Highlights */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: <Heart className="w-6 h-6" />,
              title: 'Student-Centered',
              description: 'Every decision is made with students\' best interests at heart',
              color: 'text-pink-600',
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: 'Excellence Driven',
              description: 'Committed to maintaining the highest educational standards',
              color: 'text-saffron-500',
            },
            {
              icon: <GraduationCap className="w-6 h-6" />,
              title: 'Holistic Growth',
              description: 'Focus on academic, emotional, and character development',
              color: 'text-school-blue',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className={`${item.color} inline-flex p-3 rounded-lg bg-gray-50 mb-4`}>
                {item.icon}
              </div>
              <h4 className="font-display font-bold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
