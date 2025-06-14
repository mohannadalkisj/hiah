"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  icon: React.ReactNode
  onClick: () => void
  isLoading?: boolean
}

export function ServiceCard({ title, icon, onClick, isLoading }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 border-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <CardContent className="p-6">
        <Button
          onClick={onClick}
          disabled={isLoading}
          className="w-full h-auto p-0 bg-transparent hover:bg-white/10 border-0 text-white justify-between items-center group-hover:scale-[1.02] transition-transform"
          variant="ghost"
        >
          <span className="text-lg font-medium text-right flex-1">{title}</span>
          <div className="mr-4 group-hover:scale-110 transition-transform">{icon}</div>
        </Button>
      </CardContent>
    </Card>
  )
}
