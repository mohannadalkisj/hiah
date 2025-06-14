import Image from "next/image"
import React from "react"

interface LogoSectionProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function LogoSection({ src, alt, width, height, className = "" }: LogoSectionProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="relative">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="object-contain drop-shadow-sm"
          priority
        />
      </div>
    </div>
  )
}
