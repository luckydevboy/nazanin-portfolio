"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type Dictionary = typeof import("@/src/dictionaries/en.json");

type Props = {
  dictionary: Dictionary;
};

const Experiences = ({ dictionary }: Props) => {
  return (
    <section
      id="experiences"
      className="bg-secondary py-12 xl:py-36 px-8 xl:px-0"
    >
      <div className="max-w-3xl xl:max-w-6xl mx-auto">
        <h1 className="font-extrabold text-3xl mb-12">
          {dictionary.experiences.title}
        </h1>
        <div className="space-y-8">
          {dictionary.experiences.list.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <Briefcase className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold">{exp.position}</h3>
                <p className="text-sm mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500">
                  {exp.date.from} - {exp.date.to}
                </p>
                <p className="text-sm text-gray-500">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experiences;