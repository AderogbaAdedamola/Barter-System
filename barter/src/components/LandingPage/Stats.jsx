

const Stats = () => {
  const statData = [
    { label: "Active Users", value: "500+", color: "text-red-600" },
    { label: "Skills Exchanged", value: "1,200+", color: "text-green-600" },
    { label: "Skill Categories", value: "50+", color: "text-red-600" },
    { label: "Satisfaction Rate", value: "95%", color: "text-green-600" }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statData.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className={`text-4xl md:text-5xl font-extrabold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;