import { useSuspenseQuery } from "@tanstack/react-query";
import { db } from "../lib/supabaseClient";


async function fetchPortfolioProducts(table : string) {
    const { data , error } = await db
    .from(table)
    .select('*') ; 

    if(error) throw new Error(error.message) ; 

    if (!Array.isArray(data) || data.length === 0) return data;

    const first = data[0] as Record<string, unknown>;
    if (!('category' in first)) return data;

    return [...data].sort((a, b) => {
        const aCat = String((a as Record<string, unknown>).category ?? '');
        const bCat = String((b as Record<string, unknown>).category ?? '');
        return aCat.localeCompare(bCat, undefined, { sensitivity: 'base' });
    });
}

export function useSpeciesPortfolio(table : string){
    return useSuspenseQuery({
        queryKey : [`portfolio-items-${table}`],
        queryFn : () => fetchPortfolioProducts(table) , 
        staleTime: 60 * 60 * 1000 , 
    })
}