import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "@/components/icons"

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Volunteer since 2019",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "Working with Ghai Organisation has been the most rewarding experience of my life. Seeing children's faces light up when they receive education materials is priceless.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Beneficiary Parent",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "My daughter now goes to school because of Ghai Organisation's education program. They didn't just provide books, they gave her a future.",
      rating: 5,
    },
    {
      name: "Dr. Anita Patel",
      role: "Medical Volunteer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197852?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "The mobile health clinics reach the most remote areas. I've seen how this organization truly cares about making healthcare accessible to everyone.",
      rating: 5,
    },
    {
      name: "Suresh Gupta",
      role: "Community Leader",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content:
        "Ghai Organisation doesn't just provide aid, they empower communities. The skill development programs have helped many youth in our village find employment.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Stories of Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our volunteers, beneficiaries, and community partners about the difference we're making together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-orange-500 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
