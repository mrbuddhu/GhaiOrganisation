"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, CreditCard, Smartphone, Building } from "@/components/icons"

export function Donation() {
  const [amount, setAmount] = useState("1000")
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const predefinedAmounts = ["500", "1000", "2500", "5000"]

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Make a Difference Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation can transform lives. Every rupee counts towards building a better future for those in need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="font-semibold text-orange-800">₹500 can provide</div>
                  <div className="text-orange-700">School supplies for 5 children for a month</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-blue-800">₹1,000 can provide</div>
                  <div className="text-blue-700">Healthcare for a family of 4 for a month</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="font-semibold text-green-800">₹2,500 can provide</div>
                  <div className="text-green-700">Clean water access for 10 families</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="font-semibold text-purple-800">₹5,000 can provide</div>
                  <div className="text-purple-700">Vocational training for 2 youth</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ghai Organisation is registered under Section 80G of the Income Tax Act. Your donations are eligible
                  for 50% tax deduction. We provide official receipts for all donations.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Donate Now</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium">Select Amount</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {predefinedAmounts.map((amt) => (
                    <Button
                      key={amt}
                      variant={amount === amt ? "default" : "outline"}
                      onClick={() => {
                        setAmount(amt)
                        setCustomAmount("")
                      }}
                      className={amount === amt ? "bg-orange-500 hover:bg-orange-600" : ""}
                    >
                      ₹{amt}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="custom-amount">Custom Amount</Label>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setAmount("")
                  }}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-medium">Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      UPI
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Net Banking
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="pt-4">
                <div className="text-lg font-semibold mb-4">Total: ₹{customAmount || amount || "0"}</div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-6">
                  Donate ₹{customAmount || amount || "0"}
                </Button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                Your donation is secure and encrypted. You will receive a receipt via email.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
