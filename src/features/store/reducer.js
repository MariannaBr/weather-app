// import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, SET_DAY_DATA } from "./actions";

// const initialState = {
//   data: {},
//   dayData: {},
// };

// const weatherReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_DATA_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: false,
//       };

//     case FETCH_DATA_SUCCESS:
//       return {
//         ...state,
//         data: action.data.list,
//         loading: false,
//         error: false,
//       };

//     case FETCH_DATA_ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: true,
//       };

//     case SET_DAY_DATA:
//       const daySegments = state.data.filter((segment) => {
//         if (action.dayId === segment.dt_txt) {
//           return true;
//         } else {
//           return false;
//         }
//       });
//       return { ...state, dayData: daySegments };

//     default:
//       return state;
//   }
// };

// export default weatherReducer;
