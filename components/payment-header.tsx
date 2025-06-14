"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function PaymentHeader() {
  const router = useRouter()

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold" dir="rtl">
            تأكيد الدفع
          </h1>
          <Button onClick={() => router.back()} variant="ghost" size="sm" className="text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 ml-1" />
            العودة
          </Button>
        </div>
      </div>
    </header>
  )
}
