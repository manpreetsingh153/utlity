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
    text: "Offer letter ",
    href: "/offerlettertemp",
  },
  {
    id: 2,
    img: card2,
    text: "Offer with Salary",
    href: "/offer-with-salary",
  },
  {
    id: 3,
    img: card3,
    text: "Internship ",
    href: "/internal-letter-templete",
  },
  {
    id: 4,
    img: card4,
    text: "Part Time to Fulltime ",
    href: "/part-time-to-fulltime",
  },
  {
    id: 5,
    img: card5,
    text: "Remote Work ",
    href: "/remote-work",
  },
];
const Offerpage = () => {
  return (
    <>
      <Dash data={data} />
    </>
  );
};

export default Offerpage;
