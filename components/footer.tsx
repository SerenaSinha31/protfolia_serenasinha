import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-purple-200">© {currentYear} Serena Sinha. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
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
            <Link href="mailto:serena31may@gmail.com">
              <Button variant="ghost" size="icon" className="text-purple-200 hover:text-white hover:bg-purple-800/50">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
