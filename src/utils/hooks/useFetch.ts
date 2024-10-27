import {useState, useEffect} from 'react';
import axios from "axios";

function useFetch<T>(url: string | null) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log(`Use Fetch with ${url}`)
        if (url) {
            setLoading(true);
            axios.get(url).then(res => {
                if(res.status !== 200) {
                    setError("Failed fetching data.");
                }
                else {
                    setData(res.data);
                }

            }).catch(error => {
                setError(error.message)
            }).finally(() => {
                setLoading(false)
            })

        }
    }, [url]);

    return {data, loading, error};
}

export default useFetch;
