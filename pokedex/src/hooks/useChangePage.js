import { useEffect, useContext } from "react";
import { GlobalStateContext } from "../Global/GlobalStateContext";
import { pageType } from '../constants/pageData';

export const useChangePage = () => {
    const { setters} = useContext(GlobalStateContext)

    useEffect(() => {
        const path = pageType(window.location.pathname.substr(1))
        setters.setPage(path)
        localStorage.setItem('page', path)
      }, [])
}