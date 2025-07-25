const Hero = () => {
  return (
    <section className="relative bg-black text-white px-6 py-20 md:py-32">
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        {/* Tagline or badge */}
        <div className="pointer-events-none text-orange-500 uppercase tracking-widest text-sm mb-4">
          Sync. Share. Vibe.
        </div>
        {/* Orange Glow Patch */}
        <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-orange-500 blur-[120px] opacity-30 pointer-events-none" />

        {/* Main Heading */}
        <h1 className="pointer-events-none text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Stream in sync. Feel the moment. Welcome to 3am Session.
        </h1>

        {/* Subheading */}
        <p className="pointer-events-none mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Create music rooms with your friends, your crew, or the whole
          internet. Whether it's late-night vibing or workday energy. You're
          synced in.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition duration-200">
            Start Listening
          </button>
          <button className="cursor-pointer border border-gray-500 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-full transition duration-200">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
