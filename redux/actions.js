import axios from 'axios';

import { LUYEN_DE, ALL_DE_THI, LESSON_URL,LESSON_DETAIL_URL, LOGIN_URL, REGISTER_URL } from '../config';

// Define action types
export const GET_ALL_PARTS = 'GET_ALL_PARTS';
export const GET_ALL_LESSON = 'GET_ALL_LESSON';
// danh sach de thi
export const GET_LIST_ALL_DE_THI = 'GET_LIST_ALL_DE_THI';
export const GET_LESSON_DETAIL = 'GET_LESSON_DETAIL';

// Luyen de 
export const GET_ALL_DE_THI = 'GET_ALL_DE_THI';

export const DATA_LESSON_SHOW = 'DATA_BOOK_SHOW';

// LOGIN ACTION
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const SIGN_UP_ACTION = 'SIGN_UP_ACTION';

export const LOGOUT_ACTION = 'LOGOUT_ACTION';

// Lưu điểm các part:
export const SAVE_POINT_P1 = 'SAVE_POINT_P1';
export const SAVE_POINT_P2 = 'SAVE_POINT_P2';
export const SAVE_POINT_P3p1 = 'SAVE_POINT_P3p1';
export const SAVE_POINT_P3p2 = 'SAVE_POINT_P3p2';
export const SAVE_POINT_P4 = 'SAVE_POINT_P4';
export const SAVE_POINT_P5 = 'SAVE_POINT_P5';
export const SAVE_POINT_P6 = 'SAVE_POINT_P6';
export const SAVE_POINT_P7 = 'SAVE_POINT_P7';
export const SAVE_POINT_P8 = 'SAVE_POINT_P8';
export const SAVE_POINT_P9 = 'SAVE_POINT_P9';
export const SAVE_POINT_P10 = 'SAVE_POINT_P10';
export const SAVE_POINT_P11 = 'SAVE_POINT_P11';
export const SAVE_POINT_P12 = 'SAVE_POINT_P12';
export const SAVE_POINT_P13 = 'SAVE_POINT_P13';

export const CLEAN_POINT_ALL_PART = 'CLEAN_POINT_ALL_PART';

export const CHANGE_CLEAN_P1 = 'CHANGE_CLEAN_P1';
export const CHANGE_CLEAN_P2 = 'CHANGE_CLEAN_P2';
export const CHANGE_CLEAN_P3p1 = 'CHANGE_CLEAN_P3p1';
export const CHANGE_CLEAN_P3p2 = 'CHANGE_CLEAN_P3p2';
export const CHANGE_CLEAN_P4 = 'CHANGE_CLEAN_P4';
export const CHANGE_CLEAN_P5 = 'CHANGE_CLEAN_P5';
export const CHANGE_CLEAN_P6 = 'CHANGE_CLEAN_P6';
export const CHANGE_CLEAN_P7 = 'CHANGE_CLEAN_P7';
export const CHANGE_CLEAN_P8 = 'CHANGE_CLEAN_P8';
export const CHANGE_CLEAN_P9 = 'CHANGE_CLEAN_P9';
export const CHANGE_CLEAN_P10 = 'CHANGE_CLEAN_P10';
export const CHANGE_CLEAN_P11 = 'CHANGE_CLEAN_P11';
export const CHANGE_CLEAN_P12 = 'CHANGE_CLEAN_P12';
export const CHANGE_CLEAN_P13 = 'CHANGE_CLEAN_P13';

// xem dap an
export const SEE_ALL_ANSWER = 'SEE_ALL_ANSWER';


export const loginAction = (email, pass) => {
  try {
    return async dispatch => {
      const response = await axios.post(`${LOGIN_URL}`, {
        email: email,
        password: pass
      })
      if (response.data) {
        dispatch({
          type: LOGIN_ACTION,
          payload: response.data
        });
      } else {
        console.log('LOGIN ERR CONNECT!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};
export const logOutAction = () => dispatch => {
  dispatch({
    type: LOGOUT_ACTION,
  });
};

export const signUpAction = (name, email, pass) => {
  try {
    return async dispatch => {
      const response = await axios.post(`${REGISTER_URL}`, {
        name: name,
        email: email,
        password: pass
      })
      if (response.data) {
        dispatch({
          type: SIGN_UP_ACTION,
          payload: response.data
        });
      } else {
        console.log('SIGN UP ERR CONNECT!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};
export const getAllLesson = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`${LESSON_URL}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_ALL_LESSON,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL EXAMS!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const dataLessonShow = lesson => dispatch => {
  dispatch({
    type: DATA_LESSON_SHOW,
    payload: lesson
  });
};

export const getDetailBook = bookId => {
  try {
    return async dispatch => {
      const response = await axios.get(`${LESSON_DETAIL_URL}/${lessonId.id}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_LESSON_DETAIL,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API CHAPTER URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const getLessonDetail = lessonId => {
  try {
    return async dispatch => {
      const response = await axios.get(`${LESSON_DETAIL_URL}/${lessonId.id}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_LESSON_DETAIL,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API CHAPTER URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const getAllDeThi = idDeThi => {
  try {
    return async dispatch => {
      const response = await axios.get(`${LUYEN_DE}/${idDeThi}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_ALL_DE_THI,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API CHAPTER URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const getListAllDeThi = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`${ALL_DE_THI}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_LIST_ALL_DE_THI,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API getListAllDeThi!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const savePointP1 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P1,
    payload: point
  });
};
export const savePointP2 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P2,
    payload: point
  });
};

export const savePointP3p1 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P3p1,
    payload: point
  });
};

export const savePointP3p2 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P3p2,
    payload: point
  });
};

export const savePointP4 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P4,
    payload: point
  });
};

export const savePointP5 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P5,
    payload: point
  });
};

export const savePointP6 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P6,
    payload: point
  });
};

export const savePointP7 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P7,
    payload: point
  });
};

export const savePointP8 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P8,
    payload: point
  });
};

export const savePointP9 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P9,
    payload: point
  });
};

export const savePointP10 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P10,
    payload: point
  });
};

export const savePointP11 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P11,
    payload: point
  });
};

export const savePointP12 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P12,
    payload: point
  });
};

export const savePointP13 = point => dispatch => {
  dispatch({
    type: SAVE_POINT_P13,
    payload: point
  });
};


export const clearPointAllPart = () => dispatch => {
  dispatch({
    type: CLEAN_POINT_ALL_PART,
  });
};

export const changeCleanP1 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P1,
  });
};
export const changeCleanP2 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P2,
  });
};

export const changeCleanP3p1 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P3p1,
  });
};
export const changeCleanP3p2 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P3p2,
  });
};
export const changeCleanP4 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P4,
  });
};
export const changeCleanP5 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P5,
  });
};
export const changeCleanP6 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P6,
  });
};
export const changeCleanP7 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P7,
  });
};
export const changeCleanP8 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P8,
  });
};
export const changeCleanP9 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P9,
  });
};
export const changeCleanP10 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P10,
  });
};
export const changeCleanP11 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P11,
  });
};
export const changeCleanP12 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P12,
  });
};
export const changeCleanP13 = () => dispatch => {
  dispatch({
    type: CHANGE_CLEAN_P13,
  });
};

export const seeAllAnswer = () => dispatch => {
  dispatch({
    type: SEE_ALL_ANSWER,
  });
};
