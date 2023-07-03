const handleScroll = (id: string) => {
  document
    .querySelector(id)
    ?.scrollIntoView({
      behavior: "smooth",
    });
};

export default handleScroll;
