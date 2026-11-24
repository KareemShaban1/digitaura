import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Youtube } from "lucide-react";
import { socialLinks } from "@/data/site";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Digitaura" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building innovative digital solutions that transform ideas into
              reality. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              {[
                { href: socialLinks.github, label: "GitHub", Icon: Github },
                { href: socialLinks.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: socialLinks.instagram, label: "Instagram", Icon: Instagram },
                { href: socialLinks.youtube, label: "YouTube", Icon: Youtube },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Services", "Projects", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
                "UI/UX Design",
              ].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={18} className="text-primary" />
                hello@devarena.io
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={18} className="text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-primary mt-0.5" />
                123 Tech Street, Silicon Valley, CA 94000
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Digitaura. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
