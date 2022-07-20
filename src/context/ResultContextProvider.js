import React,{createContext,useContext,useState} from 'react';



// context provider 
const ResultContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = (props)=> {
    const {children} = props;

    const [result,setResult] = useState([]);
    const [isLoading,setisLoading] = useState(false);

    const [searchTerm,setSearchTerm] = useState("");

    const getResult = async (type) =>{
        setisLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method : "GET",
            headers : {
                'X-User-Agent': 'desktop',
                'X-RapidAPI-Key': '3487d1f680msh0d08f488d580974p1d1068jsn28a2a5ecb4e9',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });

        const data = await response.json();

        setResult(data);
        setisLoading(false);
    }


    return <ResultContext.Provider
    value={{getResult,result,searchTerm,setSearchTerm,isLoading}}
    
    >

        {children}
    </ResultContext.Provider>
}

export const useResultContext = () =>{
    useContext(ResultContext);
}