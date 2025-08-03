import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Stethoscope, Droplets, Briefcase, Home, Utensils } from "@/components/icons"

export function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education for All",
      description:
        "Providing quality education to underprivileged children through schools, scholarships, and digital learning centers.",
      beneficiaries: "15,000+ children",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Access",
      description: "Mobile health clinics, vaccination drives, and health awareness programs in rural and urban slums.",
      beneficiaries: "25,000+ patients",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Droplets,
      title: "Clean Water Initiative",
      description: "Installing water purification systems and building wells in water-scarce communities.",
      beneficiaries: "8,000+ families",
      image:
        "https://images.unsplash.com/photo-1541544181051-e46607bc22a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Briefcase,
      title: "Skill Development",
      description: "Vocational training programs to help youth and women gain employment and start businesses.",
      beneficiaries: "3,500+ trainees",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Home,
      title: "Housing Support",
      description: "Building affordable homes and improving living conditions for homeless and displaced families.",
      beneficiaries: "1,200+ families",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Utensils,
      title: "Nutrition Program",
      description: "Daily meal programs for children and emergency food distribution during crises.",
      beneficiaries: "20,000+ meals daily",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ]

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We run comprehensive programs addressing the most critical needs of underprivileged communities across
            India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={program.image || "/placeholder.jpg"}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full">
                  <program.icon className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{program.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-orange-500">{program.beneficiaries}</span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
