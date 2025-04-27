import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    category: "Technologies & Frameworks",
    skills: [
      { name: "React JS", level: 80 },
      { name: "Node JS", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Web Development", level: 85 },
      { name: "Problem-Solving", level: 90 },
      { name: "Responsive Web Design", level: 80 },
      { name: "Data Structures & Algorithms", level: 85 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-pink-50 dark:bg-pink-900/20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Technical expertise and competencies I've developed
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
            >
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-gray-200 dark:bg-gray-700"
                        indicatorClassName="bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                  ))}
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
            fill="#ede9fe"
            fillOpacity="1"
            d="M0,96L48,106.7C96,117,192,139,288,170.7C384,203,480,245,576,234.7C672,224,768,160,864,149.3C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-indigo-900/20"
          ></path>
        </svg>
      </div>
    </section>
  )
}
