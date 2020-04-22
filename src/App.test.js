import React from "react";
import { render, getAllByText, waitFor, getAllByPlaceholderText, getByText } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {fetchShow as mockFetchShow} from './api/fetchShow';
import App from './App';

import {data} from './episodeData';

jest.mock('./api/fetchShow');

test('No show in state renders fetching data', () => {
  mockFetchShow.mockResolvedValue(data);
  const { getByTestId, debug } = render(<App />);

  debug();

  expect(getByTestId(/fetching/i)).toBeInTheDocument();
})

test('dropdown doesnt show seasons', () => {

})

