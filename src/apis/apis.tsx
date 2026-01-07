"use client"
import {useState} from "react";

type FetchOptions= RequestInit;

const useFetch=()=>{
    const [isLoading, setIsLoading]=useState<boolean>(false)
    const [error,setError]=useState<string|null>(null)
    const [data,setData]=useState<any>(null)


    const fetchData=async (url:string, options?:FetchOptions)=>{
        setIsLoading(true)
        setError(null)
        console.log(url)
        try{
            const res= await fetch(url, options)
            console.log("Response status:", res.status);

            // res.headers.forEach((value:string, key) => {
            //     console.table(key, value);
            //   });

            let json:any = null
            try{
                json= await res.json()
            }catch {
                json=null
            }

            if (!res.ok){
                throw new Error(json.message ||"Something went Wrong")
            }
            setData(json)
            return json
        }catch (err:any){
            setError(err.message)
            return null
        }finally{
            setIsLoading(false)
        }
    };
        return {data, error , isLoading, fetchData }
}

export default  useFetch;