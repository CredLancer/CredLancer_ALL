import React, { useEffect, useState } from "react";

interface BoxData {
  title: string;
  reward: number;
}

const BoxGrid: React.FC = () => {
  const [boxData, setBoxData] = useState<BoxData[]>([]);

  useEffect(() => {
    // Simulate fetching data from the backend
    const fetchData = async () => {
      const dataFromBackend: BoxData[] = [
        { title: "Breakfast", reward: 10 },
        { title: "Lunch", reward: 15 },
        { title: "Dinner", reward: 20 },
        { title: "Snacks", reward: 5 },
        { title: "Dessert", reward: 8 },
      ];
      setBoxData(dataFromBackend);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 w-full mt-4 mx-4">
      {boxData.map((item, index) => (
        <div
          key={index}
          className="h-48 flex flex-col justify-center items-center text-white text-2xl font-bold rounded-lg"
          style={{
            backgroundColor: "#E4FBF7", // Card color
            boxShadow: "0 0 15px rgba(0,0,0,0.2)", // Previous shadow style
          }}
        >
          {item.title}
          <div className="text-xl mt-2">Reward: {item.reward}</div>
        </div>
      ))}
    </div>
  );
};

export default BoxGrid;
