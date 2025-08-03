"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { MapPin, Phone, Mail, Clock } from "@/components/icons"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 Gandhi Nagar, New Delhi - 110001, India",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ghaiorganisation.org",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our work or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  Instagram
                </Button>
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-subject">Subject *</Label>
                  <Input
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="mt-2"
                  />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
