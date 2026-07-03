import { useEffect, useState } from "react";


export default function useFetch(url:string){

    const[data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState<Error | null >(null);

    useEffect(()=>{
        setLoading(true);
     const fetchData= async()=>{

        try{
            const response=await fetch(url);
            const result =await response.json();
            setData(result);
        }
        catch(err){
            setError(err as Error);
        }
        finally{
            setLoading(false);
        }
     }
       fetchData();
    },[url]);

    return {data,loading,error};
}  
