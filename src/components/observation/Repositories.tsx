import { useState, useEffect } from "react";
import { initialRepositorie } from "../initialState/initialRepositorie";
import { useQuery } from "./useQuery";

export const Repositories = (props: initialRepositorie) => {
    const { data: repositories, isQuery } = useQuery<initialRepositorie[]>('/hello')
    
    return(
        <ul>
        { isQuery && <>Carregando...</> }
        { repositories?.map( repo => {
            return (
                // {repo.full_name}
                <li key={repo.full_name}>
                    <strong>{repo.full_name}</strong>
                    <p>{repo.descirption}</p>
                </li>
            )
        })}
        </ul>
    );
}