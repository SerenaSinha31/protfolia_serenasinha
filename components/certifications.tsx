import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Safe and Responsible AI",
    issuer: "NPTEL",
    date: "July 2024 - August 2024",
    link: "#",
  },
  {
    title: "Mastering Data Structure and Algorithms using C and C++",
    issuer: "Udemy",
    date: "Dec 2023 - Feb 2024",
    link: "#",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-purple-100 dark:bg-violet-900/20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Certifications
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Professional certifications and courses I've completed
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400">{cert.date}</span>
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="gap-2 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                      <ExternalLink size={16} /> View Certificate
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#f5f3ff"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-fuchsia-900/20"
          ></path>
        </svg>
      </div>
    </section>
  )
}
