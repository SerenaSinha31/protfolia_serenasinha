import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "One-Stop",
    description:
      "A feature-rich e-commerce platform with seamless route management, product filtering, authentication, and checkout functionality.",
    image: "/image/Screenshot (518).png",
    tags: ["React", "CSS", "React-Router-Dom", "React-Hooks"],
    github: "https://github.com/SerenaSinha31/One-Stop",
    demo: "#",
  },
  {
    title: "Online Food Delivery Website",
    description:
      "A MERN stack food ordering website with dynamic data from MongoDB, responsive design, user authentication, and individual user data storage.",
    image: "/image/Screenshot (519).png",
    tags: ["MongoDB", "Express", "React", "Node.js", "Responsive Design"],
    github: "https://github.com/SerenaSinha31/BackenedProject_OnlineFoodDelivery",
    demo: "#",
  },
  {
    title: "Tic Tac Toe with AI",
    description:
      "Implemented a Tic Tac Toe game with unbeatable AI using the Minimax algorithm, which analyzes all possible moves and selects the optimal one.",
    image: "/image/tic.png",
    tags: ["Data Structures", "Algorithms", "Minimax", "Game Development"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-purple-50 dark:bg-purple-900/20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Showcasing my technical skills through real-world applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 dark:text-purple-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                  >
                    <Github size={16} /> Code
                  </Button>
                </Link>
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    <ExternalLink size={16} /> Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#fdf4ff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-pink-900/20"
          ></path>
        </svg>
      </div>
    </section>
  )
}
