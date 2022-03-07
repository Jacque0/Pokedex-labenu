import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (url) => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('tokenLabEddit');
    const headers = { headers: { Authorization: token } };


    const getData = () => {
        if (token) {
            setLoading(true)
            axios.get(url, headers)
                .then((res) => {
                    setData(res.data)
                    setLoading(false)
                })
                .catch((err) => {
                    alert(err.message)
                    setLoading(false)
                })
        }
    }


    useEffect(() => {
        getData();
    }, [url]);

    return [data, loading]
}

export default useRequestData  