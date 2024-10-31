"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";

type Dictionary = typeof import("@/src/dictionaries/en.json");

type Props = {
  dictionary: Dictionary;
};

const Skills = ({ dictionary }: Props) => {
  return (
    <section
      className="py-12 xl:py-36 max-w-3xl xl:max-w-6xl mx-auto px-8 xl:px-0"
      id="skills"
    >
      <h1 className="font-extrabold text-3xl mb-12">
        {dictionary.skills.title}
      </h1>
      <div className="flex flex-col max-h-80 text-start justify-start">
        {dictionary.skills.list.map((skill, index) => (
          <motion.div
            key={`skill-${index}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-tertiary my-2 flex items-center gap-x-2"
          >
            <Languages className="h-5 w-5 mt-1 flex-shrink-0" />
            <div className="font-bold">{skill}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
