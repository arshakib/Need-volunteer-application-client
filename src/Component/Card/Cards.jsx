import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/posts").then((res) => {
        setCards(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="my-10">
      <div className="grid lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <button className="btn btn-outline btn-success">See All</button>
      </div>
    </div>
  );
};

export default Cards;
