type Dictionary =
  typeof import("../dictionaries/en.json");

type Props = {
  dictionary: Dictionary;
};

const Experiences = ({
  dictionary,
}: Props) => {
  return (
    <section
      id="experiences"
      className="flex flex-col items-center bg-secondary pt-6 pb-12 xl:pb-36 xl:pt-16"
    >
      <h1 className="text-tertiary text-2xl xl:text-4xl font-bold border-b-4 xl:border-b-4 inline-block px-4 pb-1.5 border-primary mb-8 xl:mb-24">
        {dictionary.experiences.title}
      </h1>
      <div className="flex flex-col xl:grid xl:col-span-2 xl:grid-cols-2 xl:gap-y-16 w-full max-w-lg xl:max-w-6xl px-8">
        {dictionary.experiences.list.map(
          (exp, index) => (
            <div
              className="text-center xl:text-left xl:max-w-md"
              key={`experience-${index}`}
            >
              <div className="text-lg xl:text-2xl font-bold text-tertiary mb-1">
                {exp.position}
              </div>
              <div>{exp?.company}</div>
              <div className="text-sm text-tertiary mt-1">
                {exp.date.from} -{" "}
                {exp.date.to}
              </div>
              <div className="mt-4 text-base text-tertiary">
                {exp.description}
              </div>

              {index !==
                dictionary.experiences
                  .list.length -
                  1 && (
                <hr className="xl:hidden my-6" />
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};
export default Experiences;
