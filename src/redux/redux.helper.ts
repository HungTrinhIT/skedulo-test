import type {
    AsyncThunk,
    AsyncThunkOptions,
    AsyncThunkPayloadCreator,
} from '@reduxjs/toolkit';
import { createAsyncThunk as createAsyncThunkFn } from '@reduxjs/toolkit';

import type { RootState } from './store';
import { TAxiosError } from '../types/api';

type AsyncThunkConfig = {
    state: RootState;
    extra: any;
    serializedErrorType: TAxiosError;
};

export function createAsyncThunk<Returned, ThunkArg = void>(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<
        Returned,
        ThunkArg,
        AsyncThunkConfig
    >,
    options?: AsyncThunkOptions<ThunkArg, AsyncThunkConfig>
): AsyncThunk<Returned, ThunkArg, AsyncThunkConfig> {
    return createAsyncThunkFn(typePrefix, payloadCreator, options);
}
