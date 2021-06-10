import { authConstants } from "../actions/constants";


const initialState={
name:"siddharth"
};
export const authReducer=(state=initialState,action)=>{
   switch(action.type){
       case authConstants.LOGIN_REQUEST:
          state={
              ...state,
              ...action.payload
          }
          break;
   }
   return state
}