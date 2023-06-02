import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      const { city, dates, options } = action.payload;
      state.city = city;
      state.dates = dates;
      state.options = options;
    },
    resetSearch: (state) => {
      state.city = undefined;
      state.dates = [];
      state.options = {
        adult: undefined,
        children: undefined,
        room: undefined,
      };
    },
  },
});

export const { setSearchData, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//   city: undefined,
//   dates: [],
//   options: {
//     adults: undefined,
//     children: undefined,
//     room: undefined,
//   },
// };

// const searchSlice = createSlice({
//   name: 'search',
//   initialState,
//   reducers: {
//     setCity: (state, action) => {
//       state.city = action.payload;
//     },
//     setDates: (state, action) => {
//       state.dates = action.payload;
//     },
//     setOptions: (state, action) => {
//       state.options = action.payload;
//     },
//     resetSearch: (state) => {
//       state.city = undefined;
//       state.dates = [];
//       state.options = {
//         adults: undefined,
//         children: undefined,
//         room: undefined,
//       };
//     },
//   },
// });

// export const { setCity, setDates, setOptions, resetSearch } = searchSlice.actions;
// export default searchSlice.reducer;
