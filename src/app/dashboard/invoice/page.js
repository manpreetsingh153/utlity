import React from "react";
import Dash from "@/components/Dashboard/Dash";
import card1 from "@/assets/images/pexels-vlada-karpovich-4050300.jpg";
import card2 from "@/assets/images/card-2.jpg";
import card3 from "@/assets/images/card-3.jpg";
import card4 from "@/assets/images/card-4.jpg";
import card5 from "@/assets/images/card-4.jpg";
const data = [
  {
    id: 1,
    img: card1,
    text: "Pro forma Invoice",
    href: "/forma-invoice",
  },
  {
    id: 2,
    img: card2,
    text: "Commercial Invoice",
    href: "/commercial-invoice",
  },
  {
    id: 3,
    img: card3,
    text: "Credit Notes ",
    href: "credit-notes",
  },
  {
    id: 4,
    img: card4,
    text: "Timesheet Invoice",
    href: "/timesheet-invoice",
  },
  {
    id: 5,
    img: card5,
    text: "Recurring Invoice",
    href: "/recurring-invoice",
  },
];
const Invoicepage = () => {
  return (
    <div>
      <Dash data={data} />
    </div>
  );
};

export default Invoicepage;
