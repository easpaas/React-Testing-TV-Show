import React from "react";
import { render, getAllByText } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {fetchShow as mockFetchShow} from './api/fetchShow';
import App from './App';

test("App renders without errors", () => {
  render(<App/>);
});

// jest.mock('./api/fetchShow');
// test('successful fetch of data', async () =>{
//   mockFetchShow.mockResolvedValueOnce(showData);
//   const {getByText, debug} = render(<App />);
//   await waitFor(() => {
//     getByText(/select a season/i);
//   });
//   userEvent.click(getByText(/select a season/i));
//   expect(getAllByText(/season/i).toHaveLength(3));
//   expect(mockFetchShow).toBeCalledTimes(1);
// })