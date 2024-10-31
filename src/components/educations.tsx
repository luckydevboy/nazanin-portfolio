"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

type Dictionary = typeof import("@/src/dictionaries/en.json");

type Props = {
  dictionary: Dictionary;
};

const Educations = ({ dictionary }: Props) => {
  return (
    <section
      id="educations"
      className="bg-white py-12 xl:py-36 max-w-3xl xl:max-w-6xl mx-auto px-8 xl:px-0"
    >
      <h1 className="font-extrabold text-3xl mb-12">
        {dictionary.educations.title}
      </h1>
      <div className="space-y-8">
        {dictionary.educations.list.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4"
          >
            <GraduationCap className="h-5 w-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold">{edu.title}</h3>
              <p className="text-sm mb-2">{edu.name}</p>
              <p className="text-sm text-gray-500">
                {edu.date.from} - {edu.date.to}
              </p>
              <p className="text-sm text-gray-500">{edu.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Educations;
