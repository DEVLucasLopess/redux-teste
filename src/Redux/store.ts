import { configureStore } from '@reduxjs/toolkit'
import sliceLanguage from './Slice/sliceLanguage';

const store = configureStore({
    reducer: {
        languages: sliceLanguage
    },
})


export default store;
