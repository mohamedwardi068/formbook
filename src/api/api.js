import axios from "axios"


export const  getBooks=async()=> {
    try{
    const reponse=await axios.get('2gNOpRwJLeFzvjT6gBk6rSrryyyA6GTgjtLaNWFlFbSCb4nypNqcbpmoKIGPkkdi')
    return reponse.data}
    catch{
        console.log('Apierreur',console.error())
    }


  
}
export const  storyy=async()=> {
    try{
    const reponse=await axios.get('https://669ba484276e45187d36125e.mockapi.io/api/v1/getbook/story')

    return reponse.data}
    catch{
        console.log('Apierreur',console.error())
    }


  
}
export const  log=async()=> {
    try{
    const reponse=await axios.get('https://669ba484276e45187d36125e.mockapi.io/api/v1/getbook/test')
    return reponse.data}
    catch{
        console.log('Apierreur',console.error())
    }


  
}

