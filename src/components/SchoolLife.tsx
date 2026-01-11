import { Sparkles } from 'lucide-react'
import EventsSlideshow from './EventsSlideshow'

export default function SchoolLife() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-school-light to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-school-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-school-green rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-school-blue via-blue-600 to-school-green rounded-2xl mb-6 shadow-xl animate-float">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            <span className="gradient-text">School Life</span> & Events
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-school-blue via-school-green to-saffron-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond academics, we celebrate learning through vibrant school functions, cultural events, 
            and activities that bring our school community together
          </p>
        </div>

        {/* Full Width Events Slideshow */}
        <div className="mb-16 animate-slide-up">
          <EventsSlideshow />
        </div>

        {/* Event Highlights */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-display font-bold text-center text-gray-900 mb-10">
            Types of Events We Organize
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Annual Day', desc: 'Grand celebration of the academic year with performances and awards', color: 'from-blue-50 to-blue-100' },
              { title: 'Cultural Festivals', desc: 'Celebrating diversity through traditional and cultural programs', color: 'from-green-50 to-green-100' },
              { title: 'Sports Day', desc: 'Competitions and activities promoting physical fitness and teamwork', color: 'from-orange-50 to-orange-100' },
              { title: 'Science Fair', desc: 'Showcasing students\' innovative projects and experiments', color: 'from-purple-50 to-purple-100' },
            ].map((event, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${event.color} p-6 rounded-2xl border-2 border-transparent hover:border-school-blue/50 hover:shadow-xl transition-all duration-300 text-center hover-lift group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-display font-bold text-xl text-school-blue mb-3 group-hover:text-school-green transition-colors">
                  {event.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
