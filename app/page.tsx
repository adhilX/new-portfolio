"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ThreeScene from "@/components/three-scene";
import ProjectCard from "@/components/project-card";
import SkillCard from "@/components/skill-card";
import ContactForm from "@/components/contact-form";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacitySection2 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    [0, 1, 1]
  );
  const opacitySection3 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 1]
  );
  const opacitySection4 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 1]
  );
  const opacitySection5 = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 1]
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "ShutterCart",
      description:
        "A full-stack e-commerce platform built with MERN stack featuring user authentication, product management, and payment integration.",
      image: "./shuttercart.png",
      tags: ["EJS", "Node.js", "MongoDB", "Express"],
      link: "https://shuttercart.adhi.live",
    },
    // {
    //   id: 2,
    //   title: "Real-time Chat Application",
    //   description:
    //     "A real-time messaging application with features like user presence, message status, and file sharing.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
    //   link: "#",
    // },
    // {
    //   id: 3,
    //   title: "Task Management System",
    //   description:
    //     "A collaborative task management system with real-time updates, task assignment, and progress tracking.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    //   link: "#",
    // },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Express", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Redux", level: 80 },
    { name: "Next.js", level: 35 },
    // { name: "Three.js", level: 75 },
    // { name: "GraphQL", level: 70 },
    // { name: "Docker", level: 65 },
  ];

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ThreeScene />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500">
              <Image
                src="./ADHIL.jpg"
                alt="Developer Avatar"
                fill
                className="object-cover"
              />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              ADHIL P
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              MERN Stack Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center space-x-4"
            >
              <Link
                href="https://github.com/adhilX"
                target="_blank"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-700 transition-colors"
              >
                <GitHub className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/adhil-p-a6a836311"
                target="_blank"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:adhi23996@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-700 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <ArrowDown className="w-8 h-8 text-purple-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        style={{ opacity: opacitySection2 }}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            About <span className="text-purple-500">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                Who I Am
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate MERN Stack Developer with hands-on experience
                in building modern, scalable web applications. I specialize in
                MongoDB, Express.js, React, and Node.js, crafting seamless and
                responsive user interfaces backed by efficient server-side
                logic. With a strong foundation in full-stack development, I
                focus on delivering high-quality code, clean architecture, and
                great user experiences.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey in web development began 1 year ago, and since then,
                I’ve built a wide range of projects—from dynamic e-commerce
                platforms to real-time web applications. I’m always exploring
                new technologies, frameworks, and best practices to expand my
                skill set and stay up-to-date in the ever-evolving tech
                landscape.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Contact Me
                </Link>
                <a
                
                  href="./Adhil_resume.pdf"
                  download
                  className="px-6 py-3 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-900 hover:bg-opacity-20 transition-colors"
                >
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Developer Working"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        style={{ opacity: opacitySection3 }}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            My <span className="text-purple-500">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="#"
              className="px-8 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        style={{ opacity: opacitySection4 }}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            My <span className="text-purple-500">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        style={{ opacity: opacitySection5 }}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Get In <span className="text-purple-500">Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-purple-400">
                Contact Information
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Feel free to reach out to me for any inquiries, project
                collaborations, or just to say hello. I'm always open to
                discussing new projects and opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-900 bg-opacity-50 rounded-full">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">adhi23996@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-900 bg-opacity-50 rounded-full">
                    <Linkedin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white">linkedin.com/in/adhil-p</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-900 bg-opacity-50 rounded-full">
                    <GitHub className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-white">github.com/adhilX</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container px-4 mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Adhil. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              href="https://github.com/adhilX"
              target="_blank"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <GitHub className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/adhil-p-a6a836311/"
              target="_blank"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:adhi23996@gmail.com"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
