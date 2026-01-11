import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'What age groups does the school cater to?',
      answer: 'We welcome children from Pre-School (Play Group, Nursery, LKG, UKG) through Class 8. Our programs are designed to meet the developmental needs of children aged 3 to 14 years, with age-appropriate curriculum and teaching methods for each level.',
    },
    {
      question: 'How do you ensure my child\'s safety?',
      answer: 'Safety is our top priority. We have 24/7 security, CCTV surveillance throughout the campus, strict entry protocols, and trained staff. All our teachers and staff undergo background checks. We also have first-aid facilities and emergency response procedures in place.',
    },
    {
      question: 'What is the teacher-to-student ratio?',
      answer: 'We maintain small class sizes to ensure individual attention. Our average teacher-to-student ratio is 1:25, allowing teachers to understand each child\'s unique learning style and provide personalized support.',
    },
    {
      question: 'How do you handle children who need extra support?',
      answer: 'We believe every child learns at their own pace. Our teachers provide additional support through remedial classes, one-on-one attention, and regular parent-teacher meetings. We work closely with parents to ensure each child receives the help they need to succeed.',
    },
    {
      question: 'What extracurricular activities are available?',
      answer: 'We offer a wide range of activities including sports (cricket, football, athletics), arts and crafts, music, dance, drama, debate, and various clubs. These activities help develop creativity, teamwork, and confidence beyond academics.',
    },
    {
      question: 'How do you communicate with parents?',
      answer: 'We maintain regular communication through parent-teacher meetings, progress reports, school newsletters, and a parent portal. Our teachers are always available to discuss your child\'s progress. We also have an open-door policy for parent concerns.',
    },
    {
      question: 'What are the school timings and academic calendar?',
      answer: 'School operates Monday to Friday from 8:00 AM to 3:00 PM, and Saturday from 8:00 AM to 12:00 PM. We follow the standard academic calendar with regular holidays. Detailed academic calendar is shared at the beginning of each academic year.',
    },
    {
      question: 'What documents are required for admission?',
      answer: 'Required documents include: Birth Certificate, Previous School Records (if applicable), Aadhaar Card, Passport Size Photos, Medical Certificate, and Parent/Guardian ID Proof. Additional documents may be required based on specific circumstances.',
    },
    {
      question: 'Do you provide transportation facilities?',
      answer: 'Transportation facilities are available based on routes and availability. We ensure safe and reliable transport with trained drivers and GPS tracking. Please contact our administration office for route details and availability.',
    },
    {
      question: 'How do you instill values and discipline?',
      answer: 'Values and discipline are integrated into our daily curriculum. We have regular value education sessions, celebrate cultural and national events, and maintain a structured environment that promotes respect, responsibility, and ethical behavior. Our teachers lead by example.',
    },
  ]

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gradient-to-b from-white via-school-light to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-school-blue to-school-green rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-school-blue to-school-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We know you have questions. Here are answers to the most common questions 
            parents ask us about our school.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <span className="font-display font-semibold text-gray-900 pr-8 group-hover:text-school-blue transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-school-blue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 bg-gradient-to-r from-school-blue to-school-green rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-display font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="mb-6 opacity-90">
            We're here to help! Contact us and we'll be happy to answer any questions 
            you may have about our school, admission process, or your child's education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917488649507"
              className="bg-white text-school-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@biharjyotipunjpathshala.com"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
