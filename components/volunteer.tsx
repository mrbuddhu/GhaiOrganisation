"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Clock, Award } from "@/components/icons"

export function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    skills: "",
    availability: "",
    interests: [] as string[],
    experience: "",
  })

  const volunteerAreas = [
    "Education & Teaching",
    "Healthcare Support",
    "Community Development",
    "Fundraising",
    "Digital Marketing",
    "Event Management",
    "Administrative Support",
    "Field Work",
  ]

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== interest),
      }))
    }
  }

  return (
    <section id="volunteer" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Join Our Volunteer Family</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of the change you want to see. Join thousands of volunteers who are making a real difference in
            communities across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p className="text-gray-600">
                Work directly with communities and see the immediate impact of your efforts.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Timing</h3>
              <p className="text-gray-600">Choose volunteer opportunities that fit your schedule and availability.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
              <p className="text-gray-600">Gain valuable experience and develop new skills while helping others.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Volunteer Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, availability: value }))}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekends">Weekends Only</SelectItem>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                      <SelectItem value="full-time">Full Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-medium">Areas of Interest</Label>
                  <div className="grid md:grid-cols-2 gap-3 mt-2">
                    {volunteerAreas.map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Checkbox
                          id={area}
                          checked={formData.interests.includes(area)}
                          onCheckedChange={(checked) => handleInterestChange(area, checked as boolean)}
                        />
                        <Label htmlFor={area} className="text-sm">
                          {area}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="skills">Skills & Expertise</Label>
                  <Textarea
                    id="skills"
                    placeholder="Tell us about your skills, qualifications, and what you can contribute..."
                    value={formData.skills}
                    onChange={(e) => setFormData((prev) => ({ ...prev, skills: e.target.value }))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Previous Volunteer Experience (Optional)</Label>
                  <Textarea
                    id="experience"
                    placeholder="Share any previous volunteer or social work experience..."
                    value={formData.experience}
                    onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                    className="mt-2"
                  />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-6">Submit Application</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
