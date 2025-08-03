import { Card, CardContent } from "@/components/ui/card"

export function Impact() {
  const stats = [
    { number: "50,000+", label: "Lives Transformed", color: "text-blue-600" },
    { number: "1,200+", label: "Active Volunteers", color: "text-green-600" },
    { number: "25+", label: "Programs Running", color: "text-purple-600" },
    { number: "15", label: "States Covered", color: "text-red-600" },
    { number: "₹2.5 Cr+", label: "Funds Raised", color: "text-orange-600" },
    { number: "100+", label: "Partner Organizations", color: "text-indigo-600" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Every number represents real lives touched, communities empowered, and hope restored.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-8">
              <CardContent className="space-y-2">
                <div className={`text-4xl lg:text-5xl font-bold text-white`}>{stat.number}</div>
                <div className="text-orange-100 text-lg font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
