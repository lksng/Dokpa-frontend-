import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

const initialMemories = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/TawangMonastery-ArunachalPradesh-1.jpg",
    caption: "Peaceful morning at Tawang Monastery 🕊️",
    user: "Sarah J.",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/TawangMonastery-ArunachalPradesh-1.jpg",
    caption: "Magical sunsets in the valley 🌄",
    user: "Michael C.",
  },
  {
    id: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/TawangMonastery-ArunachalPradesh-1.jpg",
    caption: "Sharing laughter with new friends 🤗",
    user: "Emma R.",
  },
];

const MemoryWall = () => {
  const [memories, setMemories] = useState(initialMemories);

  const handleAddMemory = () => {
    // For now, just add a placeholder memory
    const newMemory = {
      id: memories.length + 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/TawangMonastery-ArunachalPradesh-1.jpg",
      caption: "New memory shared 💚",
      user: "Guest",
    };
    setMemories([newMemory, ...memories]);
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-3">
          Memory Wall
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A wall of memories shared by our travelers — moments that last a
          lifetime.
        </p>
      </div>

      {/* Grid of Memories */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Add Memory Card */}
        <div
          onClick={handleAddMemory}
          className="flex flex-col items-center justify-center border-2 border-dashed border-green-700 rounded-2xl p-8 cursor-pointer hover:bg-green-50 transition duration-300"
        >
          <PlusCircle className="w-12 h-12 text-green-700 mb-4" />
          <p className="text-green-900 font-semibold text-lg">
            Share Your Memory
          </p>
        </div>

        {/* Memory Cards */}
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={memory.image}
              alt={memory.caption}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <p className="text-gray-800 text-base leading-relaxed">
                “{memory.caption}”
              </p>
              <span className="block mt-3 text-sm text-gray-500">
                — {memory.user}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemoryWall;
