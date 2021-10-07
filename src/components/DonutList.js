import { useState } from "react";

const donuts = [
  {
    id: 1,
    name: "Carmel Glazed Doughnut",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    categories: ["glazed", "filled"],
  },
  {
    id: 1,
    name: "Carmel Glazed Doughnut",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    categories: ["glazed"],
  },
  {
    id: 1,
    name: "Carmel Glazed Doughnut",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    categories: ["glazed"],
  },
  {
    id: 1,
    name: "Carmel Iced Doughnut",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    categories: ["iced"],
  },
];

const categories = ["all", "iced", "glazed", "filled", "cake", "chocolate"];

export default function DonutList() {
  const [currentDonuts, setCurrentDonuts] = useState(donuts);
  const [currentCategory, setCurrentCategory] = useState("all");

  const setCategory = (category) => {
    setCurrentCategory(category);

    if (category === "all") {
      setCurrentDonuts(donuts);
      return;
    }

    let categoryDonuts = donuts.filter((donut) =>
      donut.categories.includes(category)
    );

    setCurrentDonuts(categoryDonuts);
  };

  return (
    <div className="w-full flex flex-col items-center max-w-6xl m-auto">
      <ul className="flex flex-wrap px-4 justify-center gap-10 pb-4 text-primary font-extrabold text-lg uppercase">
        {categories.map((category) => (
          <li
            onClick={() => setCategory(category)}
            className={`cursor-pointer select-none transition-all duration-500 hover:text-red-700 ${
              currentCategory === category ? "text-red-700 underline" : ""
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 md:grid-cols-3 p-10 text-center gap-10">
        {currentDonuts.map((donut) => (
          <div>
            <img
              src={donut.image}
              alt={donut.name}
              className="rounded-lg mb-2 transition-all duration-500 transform hover:scale-105"
            />
            <h1 className="text-primary font-bold uppercase text-xl">
              {donut.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
