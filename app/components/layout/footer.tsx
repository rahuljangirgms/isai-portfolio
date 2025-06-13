"use client";

import * as React from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/app/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/app/components/ui/card"; // ShadCN card component

function Footer() {
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  return (
    <footer className="bg-gradient-to-r from-palette-1/10 to-palette-2/20 text-palette-2/70 py-12">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Stay Connected Section */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-palette-2">Stay Connected</h2>
            <p className="mb-6 text-palette-3">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-palette-2 text-neutral-800 border-2 border-palette-4 focus:outline-none focus:ring-0"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-palette-4 text-palette-3 hover:bg-palette-4/70 hover:scale-105 transition-all duration-300"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-neutral-900/10 blur-2xl" />
          </div>


          {/* Quick Links Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-palette-2">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors text-palette-3 hover:underline hover:text-palette-4 ">
                Home
              </a>
              <a href="#" className="block transition-colors text-palette-3 hover:underline hover:text-palette-4">
                About Us
              </a>
              <a href="#" className="block transition-colors text-palette-3 hover:underline hover:text-palette-4">
                Services
              </a>
              <a href="#" className="block transition-colors text-palette-3 hover:underline hover:text-palette-4">
                Products
              </a>
              <a href="#" className="block transition-colors text-palette-3 hover:underline hover:text-palette-4">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-palette-2">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-palette-3">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>

          {/* Social Media Follow Section */}
          <div className="relative bg-gradient-to-r from-palette-1/10 to-palette-2/20 p-6 rounded-lg">
            <h3 className="mb-4 text-lg font-semibold text-palette-2">Follow Us</h3>
            <TooltipProvider>
              <div className="mb-6 flex space-x-4">
                {/* Facebook Button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-palette-2 bg-opacity-50 backdrop-blur-lg p-2 transition-all duration-300 hover:bg-palette-4/20 hover:border-palette-4/40"
                    >
                      <Facebook className="h-4 w-4 text-palette-3" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>

                {/* Twitter Button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-palette-2 bg-opacity-50 backdrop-blur-lg p-2 transition-all duration-300 hover:bg-palette-4/20 hover:border-palette-4/40"
                    >
                      <Twitter className="h-4 w-4 text-palette-3" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>

                {/* Instagram Button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-palette-2 bg-opacity-50 backdrop-blur-lg p-2 transition-all duration-300 hover:bg-palette-4/20 hover:border-palette-4/40"
                    >
                      <Instagram className="h-4 w-4 text-palette-3" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>

                {/* LinkedIn Button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-palette-2 bg-opacity-50 backdrop-blur-lg p-2 transition-all duration-300 hover:bg-palette-4/20 hover:border-palette-4/40"
                    >
                      <Linkedin className="h-4 w-4 text-palette-3" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>


        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-palette-3">
            © 2024 Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors text-palette-3 hover:underline hover:text-palette-4">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors text-palette-3 hover:underline hover:text-palette-4">
              Terms of Service
            </a>
            <a href="#" className="transition-colors text-palette-3 hover:underline hover:text-palette-4">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
