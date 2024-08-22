import React, { createContext, useContext, useEffect, useState } from "react";
import { addBooks, addCategories, addNotification, categoryId, getBooksByCategories, getcategories, getNotification } from "../api/api"
const apiContext = createContext()
export const ApiProvider = ({ children }) => {

        const [response,setresponse]=useState([])
        useEffect(()=>{
            const getcat=async()=>{
                try{
              const reponse=await getcategories()
               await setresponse(reponse)
              
              return reponse
            }
            catch{
                console.log('Apierreur::',console.error())
            }
        
        };
        getcat()
    }
        ,[])
   

  
       
              const addCat=async(data)=>{
                  try{
                const reponse=await addCategories(data)
                 await setresponse(reponse)
                
                return reponse
              }
              catch{
                  console.log('Apierreur::',console.error())
              }
          
          };
          
          const addBookss=async(data)=>{
            try{
          const reponse=await addBooks(data)
           await setresponse(reponse)
          
          return reponse
        }
        catch{
            console.log('Apierreur::',console.error())
        }
    
    };
    const adddNotification=async(data)=>{
      try{
    const reponse=await addNotification(data)
     await setresponse(reponse)
    
    return reponse
  }
  catch{
      console.log('Apierreur::',console.error())
  }

};

const categoryIdd=async(data)=>{
  try{
const reponse=await categoryId(data)
 await setresponse(reponse)

return reponse
}
catch{
  console.log('Apierreur::',console.error())
}

};

const [notification,setnotification]=useState([])
        useEffect(()=>{
            const getNotifica=async()=>{
                try{
              const notification=await getNotification()
               await setnotification(notification)
              
              return notification
            }
            catch{
                console.log('Apierreur::',console.error())
            }
        
        };
        getNotifica()
    }
        ,[])
   
        const [booksByCategories,setbooksByCategories]=useState([])
        useEffect(()=>{
            const getcat=async()=>{
                try{
              const booksByCategories=await getBooksByCategories()
               await setbooksByCategories(booksByCategories)
              
              return booksByCategories
            }
            catch{
                console.log('Apierreur::',console.error())
            }
        
        };
        getcat()
    }
        ,[])
            
  
 
        
return(
<apiContext.Provider value={{response,addCat,addBookss,adddNotification,categoryIdd,notification,booksByCategories}}>
        {children}
</apiContext.Provider>)
}
export const useapi=()=>{ return useContext(apiContext)}
