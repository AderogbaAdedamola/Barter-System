const Stats = () => (
  <section className="py-16 bg-white px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { label: 'Active Users', value: '500+', color: 'text-red-600' },
        { label: 'Skills Exchanged', value: '1,200+', color: 'text-green-600' },
        { label: 'Skill Categories', value: '50+', color: 'text-red-600' },
        { label: 'Satisfaction Rate', value: '95%', color: 'text-green-600' },
      ].map((stat, i) => (
        <div key={i}>
          <div className={`text-4xl font-extrabold ${stat.color}`}>{stat.value}</div>
          <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
)

export default Stats