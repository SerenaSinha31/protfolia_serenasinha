"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section id="home" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-800" />

      {/* Animated shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Serena Sinha</h1>
          <h2 className="text-xl md:text-3xl text-purple-200 mb-6 h-10">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="max-w-2xl text-purple-100 mb-8 text-lg">
            Computer Science and Engineering student at Lovely Professional University with a passion for web
            development and problem-solving.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="#projects">
              <Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none text-white">
                View Projects <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 border-purple-300 text-purple-100 hover:bg-purple-800/30">
                Download Resume <Download size={16} />
              </Button>
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href="https://github.com/SerenaSinha31/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-purple-200 hover:text-white hover:bg-purple-800/50">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/serena-sinha" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-purple-200 hover:text-white hover:bg-purple-800/50">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  )
}
