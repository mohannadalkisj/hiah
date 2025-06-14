"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormFieldProps {
  id: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  type?: string
  maxLength?: number
  placeholder?: string
}

export function FormField({
  id,
  name,
  label,
  value,
  onChange,
  required = false,
  type = "text",
  maxLength,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="space-y-3">
      <Label htmlFor={id} className="text-right block text-lg font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="text-right border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-lg py-3"
        dir="rtl"
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </div>
  )
}
