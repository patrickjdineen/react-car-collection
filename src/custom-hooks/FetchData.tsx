import react, {useState, useEffect} from 'react';
import { serverCalls } from '../api';

export function useGetData(){
    const [garageData,setData] = useState<any>([]);
    console.log("check 0")

    async function handleDataFetch(){
        console.log("check 2")
        const result = await serverCalls.get();
        console.log("checkpoint a")
        setData(result)
    }

    useEffect(() =>{
        handleDataFetch();
    }, [])

    return garageData
}