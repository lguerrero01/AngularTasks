
export const  setData = (data:string) => {
    const jsonData = JSON.stringify(data)
    localStorage.setItem('myData', jsonData)
 }
 
 export const getData =  () => {
    return localStorage.getItem('myData')
 }
 
 export const removeData = (key: string) => {
    localStorage.removeItem(key)
 }
 