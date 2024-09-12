import { TAxiosError } from "../types/api";

export const storableAxiosError = (error: any): TAxiosError => {
    const {
        data: errorData,
        statusText,
        status,
        message,
        name,
    } = error.response || {};

    const { message: messageInData } = errorData || {};
    return {
        type: 'error',
        name,
        message: messageInData || message,
        status,
        statusText,
    } as TAxiosError;
};