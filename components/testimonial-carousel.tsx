"use client"

import { useEffect, useState } from "react"

export function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "E-commerce Founder",
      company: "TechStyle Co.",
      testimonial: "Shain transformed our marketing strategy completely. Our sales increased by 340% in just 3 months!",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Marcus Johnson",
      role: "Startup CEO",
      company: "InnovateLab",
      testimonial:
        "His no-code solutions saved us thousands in development costs while delivering exceptional results.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      name: "Lisa Wang",
      role: "Marketing Director",
      company: "GrowthCorp",
      testimonial:
        "Incredible creativity and strategic thinking. Shain's campaigns consistently exceed our expectations.",
      rating: 5,
      avatar: "👩‍🎨",
    },
    {
      name: "David Rodriguez",
      role: "Brand Manager",
      company: "NextGen Brands",
      testimonial: "Working with Shain was a game-changer. His data-driven approach delivered measurable results.",
      rating: 5,
      avatar: "👨‍💼",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="text-center">
          <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>

          <div className="flex justify-center mb-4">
            {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">
                ⭐
              </span>
            ))}
          </div>

          <blockquote className="text-xl text-white/90 mb-6 italic">
            "{testimonials[currentTestimonial].testimonial}"
          </blockquote>

          <div className="text-white">
            <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
            <div className="text-white/70">
              {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTestimonial ? "bg-purple-400 scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
