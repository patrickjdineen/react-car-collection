import react,{ useState, useEffect} from 'react';
import { serverCalls } from '../api';

export function useGetData() {
    const [garageData, setData] = useState<any>([]);
    console.log("check fetch1")

    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    useEffect(() => {
        handleDataFetch();
    }, [])
    console.log("checkfetch final")
    return {garageData, getData:handleDataFetch}
}