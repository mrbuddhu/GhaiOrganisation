import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Users, Leaf } from "@/components/icons"

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We believe in treating every individual with dignity and respect, understanding their unique challenges.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong, self-reliant communities through collaborative efforts and local partnerships.",
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Empowering through knowledge and skills development for sustainable growth and independence.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Creating long-term solutions that protect the environment and ensure lasting positive impact.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Ghai Organisation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2010, Ghai Organisation has been at the forefront of social change in India, working tirelessly
            to bridge the gap between privilege and poverty.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="NGO team working with community"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To create sustainable change in the lives of underprivileged communities across India by providing access
              to quality education, healthcare, clean water, and livelihood opportunities. We believe that every person
              deserves the chance to live with dignity and hope.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through our comprehensive programs and dedicated volunteers, we work directly with communities to identify
              their needs and develop solutions that create lasting impact. Our approach is holistic, addressing not
              just immediate needs but building foundations for long-term prosperity.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <value.icon className="h-12 w-12 text-orange-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
