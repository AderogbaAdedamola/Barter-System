import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostService() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Design",
    offer: "",
    need: "",
    duration: "",
    location: "Ibadan",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("POST SERVICE:", form);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="px-4 py-10 md:py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Post a Service
          </h1>
          <p className="text-gray-500 mt-2">
            Share your skills and find what you need in exchange
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Service Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Service Title *
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g., Professional Logo Design for Your Brand"
                className="w-full h-12 border border-gray-200 rounded-xl px-4 text-[15px] text-gray-900 placeholder:text-gray-400
                           focus:outline-none focus:ring-4 focus:ring-emerald-50 focus:border-emerald-300 transition"
                required
              />
            </div>

            {/* Service Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={6}
                placeholder="Describe what you're offering and what makes your service valuable..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400
                           focus:outline-none focus:ring-4 focus:ring-emerald-50 focus:border-emerald-300 transition"
                required
              />
            </div>

            {/* Service Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Category *
              </label>

              <div className="relative">
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full h-12 border border-gray-200 rounded-xl  text-[15px] bg-white
                             focus:outline-none focus:ring-4 focus:ring-emerald-50 focus:border-emerald-300 transition"
                  required
                >
                  <option value="category">Select a Category</option>
                  <option value="Design">Design</option>
                  <option value="Tech">Tech</option>
                  <option value="Education">Education</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home Services">Home Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Service Offering/Need */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Skill You're Offering *
                </label>
                <input
                  name="offer"
                  value={form.offer}
                  onChange={handleChange}
                  placeholder="e.g., Logo Design"
                  className="w-full h-12 border border-gray-200 rounded-xl px-4 text-[15px]
                             focus:outline-none focus:ring-4 focus:ring-emerald-50 focus:border-emerald-300 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Skill You Need *
                </label>
                <input
                  name="need"
                  value={form.need}
                  onChange={handleChange}
                  placeholder="e.g., Web Development"
                  className="w-full h-12 border border-gray-200 rounded-xl px-4 text-[15px]
                             focus:outline-none focus:ring-4 focus:ring-emerald-50 focus:border-emerald-300 transition"
                  required
                />
              </div>
            </div>

            {/* Service Duration/Location */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Estimated Duration *
                </label>
                <input
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  placeholder="e.g., 5-7 days"
                  className="w-full h-12 border border-gray-200 rounded-xl px-4 text-[15px]
                             focus:outline-none focus:ring-4 focus:ring-emerald-50 focus:border-emerald-300 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Location *
                </label>
                <select
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full h-12 border border-gray-200 rounded-xl px-4 text-[15px] bg-white
                             focus:outline-none focus:ring-4 focus:ring-emerald-50 focus:border-emerald-300 transition"
                  required
                >
                  <option value="Ibadan">Ibadan</option>
                  <option value="Lagos">Ogbomosho</option>
                  <option value="Abuja">Saki</option>
                  <option value="Oyo">Oyo Town</option>
                  <option value="Remote">Iseyin</option>
                </select>
              </div>
            </div>

            {/* Tip box */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-emerald-800">
              <span className="font-semibold">Tip:</span>{" "}
              Be clear and specific about what you're offering and what you need. This helps you find the perfect match faster!
            </div>

            {/* Buttons */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <button
                type="button"
                onClick={handleCancel}
                className="h-12 rounded-xl border border-gray-200 bg-white text-gray-800 font-semibold
                           hover:bg-gray-50 active:scale-[0.99] transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="h-12 rounded-xl bg-emerald-600 text-white font-semibold
                           hover:opacity-95 active:scale-[0.99] transition flex items-center justify-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/40">
                  +
                </span>
                Post Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}