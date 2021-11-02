import {
  GET_ALL_LESSON,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  SIGN_UP_ACTION,
  DATA_LESSON_SHOW,
  GET_LESSON_DETAIL,
  GET_ALL_DE_THI,
  SAVE_POINT_P1,
  SAVE_POINT_P2,
  SAVE_POINT_P3p1,
  SAVE_POINT_P3p2,
  SAVE_POINT_P4,
  SAVE_POINT_P5,
  SAVE_POINT_P6,
  SAVE_POINT_P7,
  SAVE_POINT_P8,
  SAVE_POINT_P9,
  SAVE_POINT_P10,
  SAVE_POINT_P11,
  SAVE_POINT_P12,
  SAVE_POINT_P13,
  CLEAN_POINT_ALL_PART,
  CHANGE_CLEAN_P1,
  CHANGE_CLEAN_P2,
  CHANGE_CLEAN_P3p1,
  CHANGE_CLEAN_P3p2,
  CHANGE_CLEAN_P4,
  CHANGE_CLEAN_P5,
  CHANGE_CLEAN_P6,
  CHANGE_CLEAN_P7,
  CHANGE_CLEAN_P8,
  CHANGE_CLEAN_P9,
  CHANGE_CLEAN_P10,
  CHANGE_CLEAN_P11,
  CHANGE_CLEAN_P12,
  CHANGE_CLEAN_P13,

} from './actions';

const initialState = {
  userToken: null,
  userInf: null,
  mesLogin: null,
  AllLesson: [],
  AllPart: [],
  dataLessonShowNow:[],
  lessonDetail: [],
  lessonDetaiLLyThuyet: [],
  lessonDetailListQuestion:[],
  lessonDetailListAnswer: [],
  part1: [],
  listP1: [],
  quesP1: [], 
  ansP1: [],
  
  part2: [],
  listP2: [], 
  quesP2: [], 
  ansP2: [],

  part3dot1: [],
  part3dot2: [],
  part4: [],
  part5: [],
  part6: [],
  part7: [],
  part8: [],
  part9: [],
  soundP9: '',
  part10: [],
  part11: [],
  part12: [],
  part13: [],
  mesRegister: null,
  mesErr: null,

  pointPart1: 0,
  pointPart2: 0,
  pointPart3p1: 0,
  pointPart3p2: 0,
  pointPart4: 0,
  pointPart5: 0,
  pointPart6: 0,
  pointPart7: 0,
  pointPart9: 0,
  pointPart9: 0,
  pointPart10: 0,
  pointPart11: 0,
  pointPart12: 0,
  pointPart13: 0,

  cleanAnswerP1: false,
  cleanAnswerP2: false,
  cleanAnswerP3p1: false,
  cleanAnswerP3p2: false,
  cleanAnswerP4: false,
  cleanAnswerP5: false,
  cleanAnswerP6: false,
  cleanAnswerP7: false,
  cleanAnswerP8: false,
  cleanAnswerP9: false,
  cleanAnswerP10: false,
  cleanAnswerP11: false,
  cleanAnswerP12: false,
  cleanAnswerP13: false,

  timeLoad: 5400,
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:{
      if(action.payload.success == true){
        state.userToken = action.payload.token.original.access_token;
        state.userInf = action.payload.token.original.user_infor;
      }else{
        state.mesLogin = action.payload.error;
      }
      
      return { ...state };
    }
    case LOGOUT_ACTION: {
      state.userInf= null;
      state.userToken = null;
      state.mesLogin = null;
      return {...state };
    }
    case SIGN_UP_ACTION:{
      return { ...state , mesRegister: action.payload.success, mesErr: action.payload.error };
    }
    case GET_ALL_LESSON:
    return { ...state, AllLesson: action.payload };

    case DATA_LESSON_SHOW: {
      state.dataLessonShowNow= action.payload;
      return {...state };
    }
    case GET_LESSON_DETAIL:{
      return { ...state, lessonDetail: action.payload , lessonDetaiLLyThuyet: action.payload.detailLythuyet ,
        lessonDetailListQuestion: action.payload.listQuestion, lessonDetailListAnswer: action.payload.listAnswer
      };
    }
    case GET_ALL_DE_THI: {
      state.timeLoad = 4500;
      return { ...state, AllPart: action.payload, part1: action.payload.part1, part2: action.payload.part2,
        part3dot1: action.payload.part3dot1, part3dot2: action.payload.part3dot2, 
        part4: action.payload.part4, part5: action.payload.part5, 
        part6: action.payload.part6, part7: action.payload.part7, 
        part8: action.payload.part8, part9: action.payload.part9, soundP9: action.payload.part9.listPartDocumentArray[0].url,
        part10: action.payload.part10, part11: action.payload.part11, 
        part12: action.payload.part12, part13: action.payload.part13 ,
        listP1: action.payload.part1.listPartDocumentArray, quesP1: action.payload.part1.questions, ansP1: action.payload.part1.answers, 
        listP2: action.payload.part2.listPartDocumentArray, quesP2: action.payload.part2.questions, ansP2: action.payload.part2.answers, 
      };
    }
    case SAVE_POINT_P1:{
      return { ...state , pointPart1: action.payload };
    }
    case SAVE_POINT_P2:{
      return { ...state , pointPart2: action.payload };
    }
    case SAVE_POINT_P3p1:{
      return { ...state , pointPart3p1: action.payload };
    }
    case SAVE_POINT_P3p2:{
      return { ...state , pointPart3p2: action.payload };
    }
    case SAVE_POINT_P4:{
      return { ...state , pointPart4: action.payload };
    }
    case SAVE_POINT_P5:{
      return { ...state , pointPart5: action.payload };
    }
    case SAVE_POINT_P6:{
      return { ...state , pointPart6: action.payload };
    }
    case SAVE_POINT_P7:{
      return { ...state , pointPart7: action.payload };
    }
    case SAVE_POINT_P8:{
      return { ...state , pointPart8: action.payload };
    }
    case SAVE_POINT_P9:{
      return { ...state , pointPart9: action.payload };
    }
    case SAVE_POINT_P10:{
      return { ...state , pointPart10: action.payload };
    }
    case SAVE_POINT_P11:{
      return { ...state , pointPart11: action.payload };
    }
    case SAVE_POINT_P1:{
      return { ...state , pointPart1: action.payload };
    }
    case SAVE_POINT_P12:{
      return { ...state , pointPart12: action.payload };
    }
    case SAVE_POINT_P13:{
      return { ...state , pointPart13: action.payload };
    }
    case CLEAN_POINT_ALL_PART: {
      state.pointPart1= 0;
      state.pointPart2= 0;
      state.pointPart3p1= 0;
      state.pointPart3p2= 0;
      state.pointPart4= 0;
      state.pointPart5= 0;
      state.pointPart6= 0;
      state.pointPart7= 0;
      state.pointPart8= 0;
      state.pointPart9= 0;
      state.pointPart10= 0;
      state.pointPart11= 0;
      state.pointPart12= 0;
      state.pointPart13= 0;

      state.cleanAnswerP1= true;
      state.cleanAnswerP2= true;
      state.cleanAnswerP3p1= true;
      state.cleanAnswerP3p2= true;
      state.cleanAnswerP4= true;
      state.cleanAnswerP5= true;
      state.cleanAnswerP6= true;
      state.cleanAnswerP7= true;
      state.cleanAnswerP8= true;
      state.cleanAnswerP9= true;
      state.cleanAnswerP10= true;
      state.cleanAnswerP11= true;
      state.cleanAnswerP12= true;
      state.cleanAnswerP13= true;

      return {...state };
    }

    case CHANGE_CLEAN_P1: {
      state.cleanAnswerP1= false;
      return {...state };
    }
    case CHANGE_CLEAN_P2: {
      state.cleanAnswerP2= false;
      return {...state };
    }
    case CHANGE_CLEAN_P3p1: {
      state.cleanAnswerP3p1= false;
      return {...state };
    }
    case CHANGE_CLEAN_P3p2: {
      state.cleanAnswerP3CHANGE_CLEAN_P3p2= false;
      return {...state };
    }
    case CHANGE_CLEAN_P4: {
      state.cleanAnswerP4= false;
      return {...state };
    }
    case CHANGE_CLEAN_P5: {
      state.cleanAnswerP5= false;
      return {...state };
    }
    case CHANGE_CLEAN_P6: {
      state.cleanAnswerP6= false;
      return {...state };
    }
    case CHANGE_CLEAN_P7: {
      state.cleanAnswerP7= false;
      return {...state };
    }
    case CHANGE_CLEAN_P8: {
      state.cleanAnswerP8= false;
      return {...state };
    }
    case CHANGE_CLEAN_P9: {
      state.cleanAnswerP9= false;
      return {...state };
    }
    case CHANGE_CLEAN_P10: {
      state.cleanAnswerP10= false;
      return {...state };
    }
    case CHANGE_CLEAN_P11: {
      state.cleanAnswerP11= false;
      return {...state };
    }
    case CHANGE_CLEAN_P12: {
      state.cleanAnswerP12= false;
      return {...state };
    }
    case CHANGE_CLEAN_P13: {
      state.cleanAnswerP13= false;
      return {...state };
    }
    default:
      return state;
  }
}

export default booksReducer;
