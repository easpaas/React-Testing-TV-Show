import React from "react";
import { render, getAllByText, waitFor, getAllByPlaceholderText, getByText } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {fetchShow as mockFetchShow} from './api/fetchShow';
import App from './App';

jest.mock('./api/fetchShow');

test('renders without errors', () => {
})

