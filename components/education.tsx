import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "Since September 2022",
    location: "Jalandhar, Punjab",
    grade: "CGPA: 7.61",
  },
  {
    institution: "St. Maria Goretti Inter College",
    degree: "12th with Science",
    duration: "2021 - 2022",
    location: "Bareilly, Uttar Pradesh",
    grade: "Percentage: 82%",
  },
  {
    institution: "St. Maria Goretti Inter College",
    degree: "10th with Science",
    duration: "2019 - 2020",
    location: "Bareilly, Uttar Pradesh",
    grade: "Percentage: 87%",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-violet-50 dark:bg-indigo-900/20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          My academic journey and qualifications
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>{item.institution}</CardTitle>
                  <CardDescription>{item.degree}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:justify-between text-gray-500 dark:text-gray-400">
                  <span>{item.duration}</span>
                  <span>{item.location}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">{item.grade}</span>
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
            fill="#faf5ff"
            fillOpacity="1"
            d="M0,32L48,58.7C96,85,192,139,288,144C384,149,480,107,576,112C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-violet-900/20"
          ></path>
        </svg>
      </div>
    </section>
  )
}
