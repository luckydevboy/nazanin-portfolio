type Dictionary = typeof import("../dictionaries/en.json");

type Props = {
  dictionary: Dictionary;
};

const Educations = ({ dictionary }: Props) => {
  return (
    <section
      id="educations"
      className="flex flex-col items-center bg-white pt-6 pb-12 xl:pb-36 xl:pt-16"
    >
      <h1 className="text-tertiary text-2xl xl:text-4xl font-bold border-b-4 xl:border-b-4 inline-block px-4 pb-1.5 border-primary mb-8 xl:mb-24">
        {dictionary.educations.title}
      </h1>
      <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-y-16 w-full max-w-lg xl:max-w-6xl px-8">
        {dictionary.educations.list.map((edu, index) => (
          <div
            className="text-center xl:text-left xl:w-96 xl:justify-self-center"
            key={`educations-${index}`}
          >
            <div className="text-lg xl:text-2xl font-bold text-tertiary">
              {edu.name}
            </div>
            <div className="text-md font-semibold  text-tertiary mt-1">
              {edu.title}
            </div>
            <div className="text-sm text-tertiary mt-1">
              {edu.date.from} - {edu.date.to}
            </div>
            <div className="text-sm  text-tertiary mt-1">{edu.location}</div>

            {index !== dictionary.educations.list.length - 1 && (
              <hr className="xl:hidden my-6" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Educations;
