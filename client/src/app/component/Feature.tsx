import { features } from "../constants/index";

const Feature = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Orange Glow Patch */}
        <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-orange-500 blur-[120px] opacity-20 pointer-events-none" />

        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Why sync with AfterHours?
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          Experience seamless, social listening wherever you are.
        </p>

        {/* Feature Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-orange-500/10 transition duration-200"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-orange-400">
                {f.title}
              </h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
