import Link from "next/link"
import { Linkedin, Facebook, Mail, Phone } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "For Candidates", href: "#candidates" },
  { label: "For Employers", href: "#employers" },
  { label: "About Us", href: "#about" },
  { label: "smart.R", href: "#smartr" },
  { label: "Contact Us", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Social */}
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              Recruitment.bg
            </Link>
            <p className="mt-4 text-background/60 leading-relaxed">
              Connecting great IT people with great tech companies since 2009.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <a
                  href="mailto:hello@recruitment.bg"
                  className="hover:text-background transition-colors"
                >
                  hello@recruitment.bg
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <a
                  href="tel:+35928888888"
                  className="hover:text-background transition-colors"
                >
                  +359 2 888 8888
                </a>
              </li>
              <li className="mt-4 pt-4 border-t border-background/10">
                <p>Working hours:</p>
                <p>Mon - Fri: 9:00 - 18:00</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>© 2026 Recruitment.bg. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="hover:text-background transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Cookies
            </Link>
          </div>
          <p>Made with honesty in Bulgaria</p>
        </div>
      </div>
    </footer>
  )
}
