import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {fetchShow as mockFetchShow} from './api/fetchShow';
import App from './App';

import {data} from './episodeData';

jest.mock('./api/fetchShow');

beforeEach(() => {
  mockFetchShow.mockResolvedValue(data);
})

test('No show in state renders fetching data', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId(/fetching/i)).toBeInTheDocument();
})

test('App renders show after fetch of data', async () => {
  const { getByText, debug } = render(<App />);

  debug();
  await waitFor(() => {
    expect(mockFetchShow).toHaveBeenCalledTimes(2)
    // const dropDown = getByText(/select a season/i);
    debug();
  })
  
  // await waitFor(() =>
   

  // )
})

