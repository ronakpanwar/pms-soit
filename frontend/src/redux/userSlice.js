import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
        name:"user",
        initialState:{
              user:null,
              admins:[],
              students:[],
              companys:[],
              jobs:[],
              selectedJob:null,
              appliedJobs:[],
              allSelected:[]

        },
        reducers:{
           
            setUser:(state,action)=>{
                state.user = action.payload
            },
            setAdmins:(state, action)=>{
                state.admins = action.payload
            },
            setStudents:(state, action)=>{
                state.students = action.payload
            },
            setCompanys:(state,action)=>{
                state.companys = action.payload
            },
            setJobs:(state, action)=>{
                state.jobs = action.payload
            },
            setSelectedJob:(state, action)=>{
                state.selectedJob = action.payload
            },
            setAppliedJobs:(state,action)=>{
                state.appliedJobs = action.payload
            },
            setAllSelected:(state,action)=>{
                state.allSelected = action.payload
            }
        }
})

export const {setUser , setAdmins, setStudents , setCompanys, setAllSelected , setJobs , setSelectedJob , setAppliedJobs} = userSlice.actions;
export default userSlice.reducer