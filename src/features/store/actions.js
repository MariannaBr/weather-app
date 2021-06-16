// export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
// export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
// export const SET_DAY_DATA = 'SET_DAY_DATA'

// export const request_data = () => {
//   return { type: FETCH_DATA_REQUEST }
// }

// export const setState = (data) => {
//   return { type: FETCH_DATA_SUCCESS, data: data }
// }

// export const fail_request = () => {
//   return { type: FETCH_DATA_ERROR }
// }

// export const fetchData = () => async (dispatch) {
//     dispatch(request_data())
//     fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40`,
//     { method: "GET" }
//   )
//     .then((res) => {
//       if (res.ok) return res.json();
//       else throw new Error();
//     })
//     .then((res) => {
//       console.log("res", res)
//       dispatch(setState(res));
//     })
  
// }

// export const setDayData = (dayId) => {
//   return { type: SET_DAY_DATA, dayId: dayId }
// }