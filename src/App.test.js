import React from "react";
import { act } from 'react-dom/test-utils';

import { render, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {fetchShow as mockFetchShow} from './api/fetchShow';
import App from './App';

import {data} from './episodeData';

const showData = {
  "id": 2993,
  "url": "http://www.tvmaze.com/shows/2993/stranger-things",
  "name": "Stranger Things",
  "type": "Scripted",
  "language": "English",
  "image": {
    "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    "original": "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
  },
  "summary": "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
  "_embedded": {
    "episodes": [
      {
        "id": 553946,
        "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        "name": "Chapter One: The Vanishing of Will Byers",
        "season": 1,
        "number": 1,
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        },
        "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/episodes/553946"
          }
        }
      },
      {
        "id": 578663,
        "url": "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        "name": "Chapter Two: The Weirdo on Maple Street",
        "season": 1,
        "number": 2,
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
        },
        "summary": "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/episodes/578663"
          }
        }
      },
      {
        "id": 909340,
        "url": "http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
        "name": "Chapter One: MADMAX",
        "season": 2,
        "number": 1,
        "airdate": "2017-10-27",
        "airtime": "",
        "airstamp": "2017-10-27T12:00:00+00:00",
        "runtime": 60,
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg"
        },
    }],
  }
};

jest.mock('./api/fetchShow');


// beforeEach(() => {

// })

test('No show in state renders fetching data', () => {
  mockFetchShow.mockResolvedValueOnce(showData);

  const { getByTestId, debug } = render(<App />);
  
  debug();
  
  expect(getByTestId(/fetching/i)).toBeInTheDocument();
})

test('App renders show after fetch of data', async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
 
  const { getByText, rerender, getAllByText, debug } = render(<App />);

  await waitFor(() => {
    debug();
    expect(mockFetchShow).toHaveBeenCalledTimes(2)
    ;
    getByText(/select a season/i);
  })

  const dropDown = getByText(/select a season/i);
  userEvent.click(dropDown)
  debug();

  expect(getAllByText(/season /i)).toHaveLength(2)
})

