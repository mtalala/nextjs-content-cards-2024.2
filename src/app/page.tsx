import "./globals.css";
import CardRow from "../components/CardRow/CardRow";

const cardsrow = [
  {
      date: "October 21, 2024",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      author: "mtalala",
      tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
      link: "/"
    },
    {
      date: "October 22, 2024",
      title: "Phasellus nibh tellus, vehicula non condimentum ut",
      author: "mtalala",
      tags: ["Tag A", "Tag B", "Tag C", "Tag D"],
      link: "/"
    },
    {
      date: "October 23, 2024",
      title: "Nullam mattis faucibus lectus, in volutpat",
      author: "mtalala",
      tags: ["Tag X", "Tag Y", "Tag Z", "Tag W"],
      link: "/"
    },
    {
      date: "October 24, 2024",
      title: "Aenean in odio non mi blandit vulputate",
      author: "mtalala",
      tags: ["Tag I", "Tag II", "Tag III", "Tag IV"],
      link: "/"
    },
    {
      date: "October 25, 2024",
      title: "Maecenas tincidunt placerat ante",
      author: "mtalala",
      tags: ["Tag C", "Tag D", "Tag E", "Tag F"],
      link: "/"
    }
];

export default function Home() {
  return (
    <div>
      <CardRow cards={cardsrow} />
    </div>
  );
}
