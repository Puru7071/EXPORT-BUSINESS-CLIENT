import { useQuery } from "@tanstack/react-query";
import { db } from "../lib/supabaseClient";


async function fetchPortfolioProducts(table : string) {
    const { data , error } = await db
    .from(table)
    .select('*') ; 

    if(error) throw new Error(error.message) ; 

    return data ; 
}

export function useSpeciesPortfolio(table : string){
    return useQuery({
        queryKey : ['portfolio-items'],
        queryFn : () => fetchPortfolioProducts(table) , 
        staleTime: 60 * 60 * 1000 , 
        suspense : true 
    })
}