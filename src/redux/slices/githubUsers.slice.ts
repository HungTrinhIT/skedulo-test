import { createSlice } from '@reduxjs/toolkit';
import { GithubUserType } from '../../types/users';
import { TAxiosError } from '../../types/api';
import { storableAxiosError } from '../../utils/api';
import api from '../../config/api';
import { createAsyncThunk } from '../redux.helper';

type GithubUserState = {
    users: GithubUserType[];
    queryUserInprogress: boolean;
    queryUserError: null | TAxiosError;
};

const initialState: GithubUserState = {
    users: [],
    queryUserInprogress: false,
    queryUserError: null,
};

// Types
const QUERY_GITHUB_USERS = 'app/QUERY_GITHUB_USERS';

export const queryGithubUsersThunk = createAsyncThunk(
    QUERY_GITHUB_USERS,
    async (searchTerm: string) => {
        const apiResponse = await api.get(`/search/users?q=${searchTerm}`);
        const data = apiResponse.data;
        return data.items;
    },
    {
        serializeError: storableAxiosError,
    }
);

const githubUserSlice = createSlice({
    name: 'githubUserSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(queryGithubUsersThunk.pending, (state) => ({
                ...state,
                queryUserInprogress: true,
                queryUserError: null,
            }))
            .addCase(queryGithubUsersThunk.fulfilled, (state, { payload }) => ({
                ...state,
                queryUserInprogress: false,
                users: payload,
            }))
            .addCase(queryGithubUsersThunk.rejected, (state, { error }) => ({
                ...state,
                queryUserInprogress: false,
                queryUserError: error,
            }));
    },
});

const githubUserReducer = githubUserSlice.reducer;

export default githubUserReducer;
