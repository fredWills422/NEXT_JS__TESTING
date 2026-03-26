// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { server } from "./__mocks__/msw/server";

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that are declared as a part of our tests (i.e. for testing one-time error scenarios) so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());