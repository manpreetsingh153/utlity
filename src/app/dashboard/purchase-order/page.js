import React from "react";
import Dash from "@/components/Dashboard/Dash";
import card1 from "@/assets/images/card-1.jpg";
import card2 from "@/assets/images/card-2.jpg";
import card3 from "@/assets/images/card-3.jpg";
import card4 from "@/assets/images/card-4.jpg";
import card5 from "@/assets/images/card-4.jpg";
const data = [
  {
    id: 1,
    img: card1,
    text: "Purchase order",
    href: "/purchase-order",
  },
  // {
  //   id: 2,
  //   img: card2,
  //   text: "Heading",
  //   href: "/",
  // },
  // {
  //   id: 3,
  //   img: card3,
  //   text: "Heading",
  //   href: "/",
  // },
  // {
  //   id: 4,
  //   img: card4,
  //   text: "Heading ",
  //   href: "/",
  // },
  // {
  //   id: 5,
  //   img: card5,
  //   text: "Heading ",
  //   href: "/",
  // },
];
const Popage = () => {
  return (
    <>
      <Dash data={data} />
    </>
  );
};

export default Popage;
