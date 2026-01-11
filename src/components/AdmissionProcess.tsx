import { FileText, MessageCircle, ClipboardCheck, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'

interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function AdmissionProcess() {
  const steps: Step[] = [
    {
      number: '01',
      title: 'Inquiry',
      description: 'Contact us via phone, email, or visit our campus to learn more about admissions.',
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      number: '02',
      title: 'School Visit',
      description: 'Schedule a campus tour to see our facilities and meet our team. (Optional but recommended)',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      number: '03',
      title: 'Registration',
      description: 'Fill out the admission form and submit required documents along with registration fee.',
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
      number: '04',
      title: 'Enrollment',
      description: 'Complete the admission process, pay fees, and welcome your child to Bihar Jyotipunj Pathshala!',
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ]

  const requiredDocuments = [
    'Birth Certificate',
    'Previous School Records (if applicable)',
    'Aadhaar Card',
    'Passport Size Photos',
    'Medical Certificate',
    'Parent/Guardian ID Proof',
  ]

  return (
    <section id="admission" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Admission Process
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-school-blue to-school-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A simple, transparent admission process designed to make it easy for parents 
            to enroll their children in our school
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -right-4 bg-school-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              <div className="bg-school-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-school-blue group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Required Documents */}
          <div className="bg-gradient-to-br from-school-light to-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Required Documents
            </h3>
            <ul className="space-y-3">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-school-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-600 italic">
              * Additional documents may be required based on specific circumstances
            </p>
          </div>

          {/* Contact for Admission */}
          <div className="bg-gradient-to-br from-school-blue to-school-green rounded-2xl p-8 shadow-lg text-white">
            <h3 className="text-2xl font-display font-bold mb-6">
              Ready to Get Started?
            </h3>
            <p className="mb-6 opacity-90 leading-relaxed">
              We're here to help you through every step of the admission process. 
              Contact us today to begin your child's educational journey with us.
            </p>
            
            <div className="space-y-4 mb-6">
              <a
                href="tel:+917488649507"
                className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+91 74886 49507</span>
              </a>
              <a
                href="mailto:info@biharjyotipunjpathshala.com"
                className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">info@biharjyotipunjpathshala.com</span>
              </a>
            </div>

            <button
              onClick={() => {
                // Scroll to final CTA or trigger contact form
                const element = document.getElementById('final-cta')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="w-full bg-white text-school-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
