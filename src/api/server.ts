const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6Ijg0MGE4ZDc2NWJhYTMxZmZlZDI2NzA4ZTA2MmQwNTFlMTdhNTIyN2ZhZDdlMzEyOCIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE3IDIyOjQ4OjEzLjEzMTA3OVwiIn0.2491ZzbzvKjBDsYkxbAb6lCY7Qshcfm_niiZyukyEkQ"

export const serverCalls = {
    get: async () => {
        const response = await fetch('/cars',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error("We could no open the garage door. Please check your connection to the server")
        }
        console.log(response)
        return await response.json()
    },
    delete: async(id:string) =>{
        const response = await fetch(`./cars/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error("We could not remove that car from the garage")
        }
        return await response.json()
    },
    update: async (id:string,data:any = {}) =>{
        console.log("update check 1")
        const response = await fetch(`/cars/${id}`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
        console.log("update check 2")
        if (!response.ok){
            throw new Error("We could not update that car")
        }
        return await response.json()
    },
    create: async (data:any = {})=>{
        console.log("check1")
        const response = await fetch('/cars',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error("Could not drive that car into the garage")
        }
        return await response.json()
    }
};