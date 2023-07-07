import React from "react";

type Dictionary = typeof import("../dictionaries/en.json");

type Props = {
  dictionary: Dictionary;
};

const Skills = ({ dictionary }: Props) => {
  return (
    <section
      className="pt-6 pb-12 xl:pb-36 xl:pt-16 max-w-xl xl:max-w-6xl mx-auto text-center"
      id="skills"
    >
      <h1 className="text-tertiary text-2xl xl:text-4xl font-bold border-b-4 xl:border-b-4 inline-block px-4 pb-1.5 border-primary mb-8 xl:mb-24">
        {dictionary.skills.title}
      </h1>
      <div className="flex justify-center xl:flex-col flex-wrap xl:max-h-80 xl:text-left xl:justify-start">
        {dictionary.skills.list.map((skill, index) => (
          <React.Fragment key={`skill-${index}`}>
            <div className="text-tertiary text-2xl font-semibold my-2 hidden xl:block">
              {skill}
            </div>
            <span className="px-3 py-1 xl:hidden bg-quaternary m-1 rounded-full text-center text-tertiary">
              {skill}
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Skills;
