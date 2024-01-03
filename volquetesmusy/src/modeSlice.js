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
                console.log("wyf is light");
            }else{
                state.value="light"
                console.log("wtf is dark");
            }
        }
    }
})



export const {flipTheLights} = modeSlice.actions

export default modeSlice.reducer