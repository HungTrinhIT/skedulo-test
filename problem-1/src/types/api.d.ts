export type TAxiosError = {
    type: 'error';
    name: string;
    message?: string;
    status?: number;
    statusText: string;
};