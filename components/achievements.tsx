import { Card, CardContent } from "@/components/ui/card"
import { Award, Code, Trophy } from "lucide-react"

const achievements = [
  {
    icon: <Trophy className="h-6 w-6 text-white" />,
    title: "HackerRank Assessments",
    description: "Completed assessments for Python Basic and JavaScript Intermediate skills via HackerRank.",
  },
  {
    icon: <Code className="h-6 w-6 text-white" />,
    title: "Coding Practice",
    description: "Completed 80+ questions on LeetCode and 300+ questions on GeeksForGeeks.",
  },
  {
    icon: <Award className="h-6 w-6 text-white" />,
    title: "Event Coordinator",
    description:
      "Held the role of Coordinator for CODE STORM 36 Hours Hackathon – Spirit Organization & MLSA (Microsoft Learn Student Ambassadors).",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-violet-50 dark:bg-fuchsia-900/20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Achievements
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Recognitions and accomplishments I've earned along my journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 overflow-hidden"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
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
            fill="#fbcfe8"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,154.7C672,149,768,171,864,176C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-pink-900/20"
          ></path>
        </svg>
      </div>
    </section>
  )
}
