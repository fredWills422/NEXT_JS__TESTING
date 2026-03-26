// This file sets up a mock server using MSW (Mock Service Worker) for testing purposes.
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Initialize the mock server with the defined request handlers.
export const server = setupServer(...handlers);