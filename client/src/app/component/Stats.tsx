const Stats = () => {
  const stats = [
    { label: "Total Songs Played", value: "1.2M+" },
    { label: "Active Rooms Created", value: "78k+" },
    { label: "Global Users", value: "150k+" },
    { label: "Hours Synced", value: "900k+" },
  ];

  return (
    <div className="bg-black py-10 px-4 flex flex-wrap justify-center gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-44 lg:w-64 px-6 py-4 lg:py-8 border border-white/10 rounded-2xl backdrop-blur-3xl bg-white/6 text-white shadow-xl hover:shadow-orange-500/10"
        >
          <p className="text-2xl font-serif lg:text-4xl font-bold mt-2 text-center pointer-events-none">
            {stat.value}
          </p>
          <h2 className="text-sm sm:text-md font-medium text-orange-500 text-center pt-2 pointer-events-none">
            {stat.label}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Stats;
