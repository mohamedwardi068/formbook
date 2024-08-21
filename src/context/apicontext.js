import React, { createContext, useContext, useEffect, useState } from "react";
import { getBooks, storyy } from "../api/api"
const apiContext = createContext()
export const ApiProvider = ({ children }) => {

        const [response,setresponse]=useState([])
        useEffect(()=>{
            const getbook=async()=>{
                try{
              const reponse=await getBooks()
               await setresponse(reponse)
              
              return reponse
            }
            catch{
                console.log('Apierreur::',console.error())
            }
        
        };
        getbook()
    }
        ,[])
  
 
        const [storyyy,setstory]=useState([])
        try{
          useEffect(()=>{
            const getstoryy=async()=>{
              const reponse=await storyy()
             
      
              setstory(reponse)
              
              return reponse
            }
            getstoryy()
        },[])}
          catch{
              console.log('Apierreur::',console.error())
          }
       
return(
<apiContext.Provider value={{response,storyyy}}>
        {children}
</apiContext.Provider>)
}
export const useapi=()=>{ return useContext(apiContext)}
