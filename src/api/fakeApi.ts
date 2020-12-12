import { mockCases } from './mockData';
import { ICase } from '../interfaces/case';

function fetchCases(): Promise<ICase[]> {
  return Promise.resolve(mockCases);
}

export const fakeApi = {
  fetchCases,
};
