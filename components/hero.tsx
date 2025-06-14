interface HeroSectionProps {
    title: string
    backgroundImage?: string
  }
  
  export function HeroSection({ title, backgroundImage }: HeroSectionProps) {
    return (
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10" />
        {backgroundImage && (
          <div className="absolute inset-0">
            <img src={backgroundImage || "/placeholder.svg"} alt="Background" className="object-cover h-full w-full" />
          </div>
        )}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">{title}</h1>
          <div className="w-24 h-1 bg-white/80 mx-auto mt-4 rounded-full" />
        </div>
      </div>
    )
  }
  