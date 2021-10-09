import { useState } from "react";
import { useQuery } from "react-query";

// Default data if needed

const donuts = [
  {
    donutid: 1,
    name: "Original Glazed",
    image:
      "https://www.krispykreme.com/getattachment/1aa956f7-e7ca-4e27-bcc6-a603211d7c68/Original-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "glazed",
  },
  {
    donutid: 2,
    name: "Chocolate Iced Glazed",
    image:
      "https://www.krispykreme.com/getattachment/0c798364-6391-471d-95eb-e0e5fb4e38e4/Chocolate-Iced-Glazed.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "glazed",
  },
  {
    donutid: 3,
    name: "Glazed Raspberry Filled",
    image:
      "https://www.krispykreme.com/getattachment/2453215a-619a-40bd-a64b-1696f533d199/Glazed-Raspberry-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "glazed",
  },
  {
    donutid: 4,
    name: "Glazed Lemon Filled",
    image:
      "https://www.krispykreme.com/getattachment/0bd48216-d5a8-4838-885e-1e643a3a0e36/Glazed-Lemon-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "glazed",
  },
  {
    donutid: 5,
    name: "Chocolate Iced Cake",
    image:
      "https://www.krispykreme.com/getattachment/1d5b486e-45b0-4771-ab56-f44a2426baf7/Chocolate-Iced-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "iced",
  },
  {
    donutid: 6,
    name: "Chocolate Iced Glazed Cruller",
    image:
      "https://www.krispykreme.com/getattachment/9e6fd86b-c813-46ef-be32-6526422998b5/Chocolate-Iced-Glazed-Cruller.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "iced",
  },
  {
    donutid: 7,
    name: "Maple Iced Glazed",
    image:
      "https://www.krispykreme.com/getattachment/dc92076b-0766-42c2-b6f4-63000e0f7af9/Maple-Iced-Glazed.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "iced",
  },
  {
    donutid: 8,
    name: "Strawberry Iced",
    image:
      "https://www.krispykreme.com/getattachment/7ab68d1c-aa89-445a-9828-11bedd5817e2/Strawberry-Iced.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "iced",
  },
  {
    donutid: 9,
    name: "Original Filled Original Kreme",
    image:
      "https://www.krispykreme.com/getattachment/1818f984-fd98-44f9-b37c-c067adc63ce4/Original-Filled-Chocolate-Kreme%E2%84%A2.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "filled",
  },
  {
    donutid: 10,
    name: "Cinnamon Apple Filled",
    image:
      "https://www.krispykreme.com/getattachment/63312c7f-ff3a-4391-b35e-270852fa6717/Cinnamon-Apple-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "filled",
  },
  {
    donutid: 11,
    name: "Double Dark Chocolate",
    image:
      "https://www.krispykreme.com/getattachment/7137f4fe-f3b2-4b87-9d4f-55ed8cf6d85d/Double-Dark-Chocolate.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "filled",
  },
  {
    donutid: 12,
    name: "Traditional Cake",
    image:
      "https://www.krispykreme.com/getattachment/d4841d35-ba1e-4708-9549-4dc52793ed39/Traditional-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "cake",
  },
  {
    donutid: 13,
    name: "Powdered Cake",
    image:
      "https://www.krispykreme.com/getattachment/fb68570f-4549-45ae-a269-e45023b64695/Powdered-Cake.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "cake",
  },
  {
    donutid: 14,
    name: "Glazed Cake Donut Holes",
    image:
      "https://www.krispykreme.com/getattachment/8e641aa4-836f-4726-b5e6-2a11464af93e/Glazed-Cake-Doughnut-Holes.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "cake",
  },
  {
    donutid: 15,
    name: "Chocolate Glazed Donut",
    image:
      "https://www.krispykreme.com/getattachment/9041db26-95ee-40e4-a069-1b6ca8d13b13/Chocolate-Glazed-Doughnut.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "chocolate",
  },
  {
    donutid: 16,
    name: "Chocolate Iced Custard Filled",
    image:
      "https://www.krispykreme.com/getattachment/2921a3c7-350a-4077-8194-5c8900a9a940/Chocolate-Iced-Custard-Filled.aspx?width=310&height=310&mode=max&quality=60&format=jpg",
    category: "chocolate",
  },
];

const categories = ["all", "iced", "glazed", "filled", "cake", "chocolate"];

export default function DonutList() {
  const [allDonuts, setAllDonuts] = useState([]);
  const [currentDonuts, setCurrentDonuts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");

  const setCategory = (category) => {
    setCurrentCategory(category);

    if (category === "all") {
      setCurrentDonuts(donuts);
      return;
    }

    let categoryDonuts = allDonuts.filter(
      (donut) => donut.category === category
    );
    // let categoryDonuts = donuts.filter((donut) =>
    //   donut.categories.includes(category)
    // );

    setCurrentDonuts(categoryDonuts);
  };

  const { isLoading, error, data } = useQuery(
    "donutData",
    () => fetch("http://52.15.100.211:3000/"),
    {
      onSuccess: async (data) => {
        let donutData = await data.json();

        setAllDonuts(donutData);
        setCurrentDonuts(donutData);
      },
    }
  );

  return (
    <div className="w-full flex flex-col items-center max-w-7xl m-auto">
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

      {isLoading && (
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-primary text-2xl mb-5 font-bold">
            Doughnuts Loading
          </h1>
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-primary"></div>
        </div>
      )}
      {error && <div>Sorry, an error has occurred. Please try again.</div>}
      {data && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 text-center gap-3 md:gap-10">
          {currentDonuts.map((donut) => (
            <div key={donut.donutid}>
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
      )}
    </div>
  );
}
