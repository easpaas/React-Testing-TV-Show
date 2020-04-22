import React from "react";
import { render, waitFor, findByTestId } from "@testing-library/react";
import {fetchShow as mockFetchShow} from '../api/fetchShow';
import Episodes from "./Episodes";
import {data} from "../episodeData";

test("Episodes renders without errors before fetching data", () => {
  render(<Episodes episodes={[]} />)
})


test("Episodes renders without empty episode array", () => {  
  const { getByText, rerender, debug } = render(<Episodes episodes={[]} />);

  rerender(<Episodes episodes={[data]} />);

  expect(getByText(/episode/i)).toBeInTheDocument();
});

