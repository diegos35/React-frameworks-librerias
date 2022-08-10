import { forwardRef } from "react";
import Form from "./Form";

const movies = [
  {
    name: "avengers",
    available: 5
  },
  {
    name: "Terminator",
    available: 4
  }
];

export default function App() {
  return (
    <div>
      <h2>peliculas </h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
