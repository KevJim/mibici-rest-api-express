import { MessageResponse } from './MessageResponse';

export type ErrorResponse = MessageResponse & {
    stack?: string;
};
