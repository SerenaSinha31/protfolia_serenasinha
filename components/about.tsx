import { Card, CardContent } from "@/components/ui/card"
import { Code2, GraduationCap, Laptop } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Passionate about creating efficient solutions and building user-friendly web applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full mb-4">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Passionate about solving complex problems using data structures and algorithms. Completed extensive
                  training in DSA to enhance my problem-solving skills.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full mb-4">
                  <Laptop className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experienced in building responsive and user-friendly web applications using modern technologies like
                  React, Node.js, and MongoDB.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full mb-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Always eager to learn new technologies and improve my skills. Regularly complete courses and
                  certifications to stay updated with the latest trends.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#f3e8ff"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-purple-900/20"
          ></path>
        </svg>
      </div>
    </section>
  )
}
