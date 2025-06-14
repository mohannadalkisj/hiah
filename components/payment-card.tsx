"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Shield, Clock } from "lucide-react"
import Link from "next/link"

interface PaymentCardProps {
  serviceName: string
  amount: string
  onPayment: () => void
}

export function PaymentCard({ serviceName, amount, onPayment }: PaymentCardProps) {
  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
      <CardContent className="p-8">
        {/* Service Confirmation */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2" dir="rtl">
            تم استلام طلبكم بنجاح
          </h2>
          <p className="text-lg text-gray-600" dir="rtl">
            طلب {serviceName}
          </p>
        </div>

        {/* Payment Amount */}
        <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
          <div className="text-center">
            <p className="text-sm text-blue-600 mb-2" dir="rtl">
              المبلغ المطلوب للتأكيد
            </p>
            <p className="text-3xl font-bold text-blue-800" dir="rtl">
              {amount} فلس
            </p>
          </div>
        </div>

        {/* Payment Features */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center text-sm text-gray-600" dir="rtl">
            <Shield className="w-4 h-4 text-green-500 ml-2" />
            <span>دفع آمن ومشفر</span>
          </div>
          <div className="flex items-center text-sm text-gray-600" dir="rtl">
            <Clock className="w-4 h-4 text-blue-500 ml-2" />
            <span>معالجة فورية للطلب</span>
          </div>
          <div className="flex items-center text-sm text-gray-600" dir="rtl">
            <CreditCard className="w-4 h-4 text-purple-500 ml-2" />
            <span>جميع وسائل الدفع مقبولة</span>
          </div>
        </div>

        {/* Payment Button */}
        <Link href="/kent" className="block">
          <Button
            onClick={onPayment}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            dir="rtl"
          >
            <CreditCard className="w-5 h-5 ml-2" />
            ادفع الآن
          </Button>
        </Link>

        <p className="text-xs text-gray-500 text-center mt-4" dir="rtl">
          بالضغط على "ادفع الآن" فإنك توافق على شروط وأحكام الخدمة
        </p>
      </CardContent>
    </Card>
  )
}
