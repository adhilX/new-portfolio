"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Skill {
  name: string
  level: number
}

interface SkillCardProps {
  skill: Skill
  index: number
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setWidth(skill.level)
      },
      100 + index * 100,
    )

    return () => clearTimeout(timer)
  }, [skill.level, index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-gray-900 p-4 rounded-lg border border-gray-800"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-white">{skill.name}</h3>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>

      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </motion.div>
  )
}
