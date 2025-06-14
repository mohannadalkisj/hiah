"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageHeaderProps {
  title: string
  onBack?: () => void
}

export function PageHeader({ title, onBack }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>
          {onBack && (
            <Button onClick={onBack} variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-5 h-5 ml-2" />
              العودة
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
