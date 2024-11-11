import { createSlice } from "@reduxjs/toolkit";

const comapnySlice = createSlice({
        name:"company",
        initialState:{
            
            company:null,
            companyJobs:[],
            applicants:[]
        },
        reducers:{
           
            setCompany:(state,action)=>{
                state.company = action.payload
            },
            setCompanyJobs:(state, action)=>{
                state.companyJobs  = action.payload
            },
            setApplicants:(state, action)=>{
                state.applicants = action.payload
            }
        }
})

export const {setCompany , setCompanyJobs , setApplicants} = comapnySlice.actions;
export default comapnySlice.reducer