import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

type ResponseKind = 'success' | 'failure';

type NetworkResponse<T> = {
    kind: ResponseKind;
    body?: T;
    page?: T;
};

interface MyAsyncThunkActionPayload {
    data: string[];
}

const initialState = {
    data: [],
    loading: false,
    error: true,
};

export const getGameListApi = createAsyncThunk<{ data: [] }>(
    'getGameList',
    async () => {
        const response = await getGameList();
        if (response.kind === 'success') {
            return {
                data: response.body ?? [],
            };
        } else {
            throw 'Error fetching agent';
        }
    },
);

const getGameListSlice = createSlice({
    name: 'getPropertyImg',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGameListApi.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getGameListApi.fulfilled, (state: any, action: any) => {
                state.loading = false;
                state.data = action.payload.data
            })
            .addCase(getGameListApi.rejected, (state) => {
                state.error = true;
                state.loading = false;
            });
    },
});

export const getGameList = async (): Promise<NetworkResponse<[]>> => {

    const response = await fetch("https://gist.githubusercontent.com/aclement-ikarusdev/5dd618bf13ac76cebfa08c0e3c99b677/raw/e6b13ac3f7f9ad174209cbb30f331427ab6f7fb5/games.json",
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
    );

    if (response.ok) {
        const json = (await response.json());
        return {
            kind: 'success',
            body: json,
        };
    } else {
        return {
            kind: 'failure',
        };
    }
};

export default getGameListSlice.reducer;
