import { createSlice } from "@reduxjs/toolkit";



export const modeSlice=createSlice({
    name:"mode",
    initialState:{
        value:"light"
    },
    reducers:{
        flipTheLights:(state)=>{
            if(state.value==="light"){
                state.value="dark"
               
            }else{
                state.value="light"
              
            }
        }
    }
})



export const {flipTheLights} = modeSlice.actions

export default modeSlice.reducer