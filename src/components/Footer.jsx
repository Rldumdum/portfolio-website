const Footer = () => {
  return (
    <footer className="mt-28 rounded-lg  w-full h-80 bg-[#010101]">
      <div className="grid grid-cols-3 h-full">
        <section className="col-span-1 justify-center  items-center flex"></section>
        <section className="col-span-1 justify-center gap-10 items-center flex">
          <a
            href="https://github.com/Rldumdum"
            className="text-white cursor-pointer transition-all duration-500 text-2xl"
          >
            Github
          </a>
          <a
            href="https://www.facebook.com/Sevardon1"
            className="text-white cursor-pointer transition-all duration-500 text-2xl"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/rldumdum/"
            className="text-white cursor-pointer transition-all duration-500 text-2xl"
          >
            LinkedIn
          </a>
        </section>
        <section className="col-span-1 justify-center items-center flex"></section>
      </div>
    </footer>
  );
};

export default Footer;
