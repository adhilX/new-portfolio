"use client";

import type React from "react";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";


export default function ContactForm() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = {
    name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
    email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
    subject: (form.elements.namedItem("subject") as HTMLInputElement)?.value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
  };
setIsSubmitting(true)
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({formData}),
    });
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Message Sent!
          </h3>
          <p className="text-gray-400">
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              required
              className="bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              required
              className="bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500"
              placeholder="Subject of your message"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              className="bg-gray-800 border-gray-700 text-white focus:ring-purple-500 focus:border-purple-500 min-h-[120px]"
              placeholder="Your message"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
              Send Message<Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
