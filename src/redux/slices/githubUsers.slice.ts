import { createSlice } from '@reduxjs/toolkit';
import { GithubUserType } from '../../types/users';
import { TAxiosError } from '../../types/api';
import { storableAxiosError } from '../../utils/api';
import api from '../../config/api';
import { createAsyncThunk } from '../redux.helper';
import { DEFAULT_USER_PER_PAGE_PARAM } from '../../utils/constants';

type GithubUserState = {
    users: GithubUserType[];
    queryUserInprogress: boolean;
    queryUserError: null | TAxiosError;
    totalResults: number;

};

const initialState: GithubUserState = {
    users: [],
    queryUserInprogress: false,
    queryUserError: null,
    totalResults: 0
};

// Types
const QUERY_GITHUB_USERS = 'app/QUERY_GITHUB_USERS';

export const queryGithubUsersThunk = createAsyncThunk(
    QUERY_GITHUB_USERS,
    async (searchTerm: string) => {
        const apiResponse = await api.get(`/search/users`, {
            params: {
                per_page: DEFAULT_USER_PER_PAGE_PARAM,
                q: searchTerm
            }
        });
        const data = apiResponse.data;
        return data;
    },
    {
        serializeError: storableAxiosError,
    }
);

const githubUserSlice = createSlice({
    name: 'githubUserSlice',
    initialState,
    reducers: {
        clearSearchData: (state) => {
            state.users = []
            state.totalResults = 0;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(queryGithubUsersThunk.pending, (state) => ({
                ...state,
                queryUserInprogress: true,
                queryUserError: null,
                users: []
            }))
            .addCase(queryGithubUsersThunk.fulfilled, (state, { payload }) => ({
                ...state,
                queryUserInprogress: false,
                users: payload.items,
                totalResults: payload.total_count
            }))
            .addCase(queryGithubUsersThunk.rejected, (state, { error }) => ({
                ...state,
                queryUserInprogress: false,
                queryUserError: error,
            }));
    },
});

const githubUserReducer = githubUserSlice.reducer;
export const { clearSearchData } = githubUserSlice.actions

export default githubUserReducer;
