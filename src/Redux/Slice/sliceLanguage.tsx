import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LanguageType  {
    name: string;
    favorite: boolean;
}

const INITIAL_STATE: LanguageType[] = [
    { name: 'PHP', favorite: false },
    { name: 'JAVA', favorite: false },
    { name: 'C#', favorite: false }
]

const sliceLanguages = createSlice({
    name: 'language',
    initialState: INITIAL_STATE,
    reducers: {
        addLanguages(state, {payload} : PayloadAction<string>) {
            return [...state, {name: payload, favorite: false}]
        },
        toFavorite(state, { payload }: PayloadAction<string>){
            return state.map(st => st.name === payload ? { ...st, favorite: !st.favorite} : st)
        }
    },
});

export default sliceLanguages.reducer
export const { addLanguages, toFavorite } = sliceLanguages.actions

export const useLanguages = (state: any) => {
    return state.languages as Languages[];
}