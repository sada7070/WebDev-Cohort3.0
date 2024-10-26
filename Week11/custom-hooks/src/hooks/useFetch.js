import { useState, useEffect } from "react";

// useFetch hook
export function useFetch(url) {
    // this useState is to fetch json data.
    const [finalData, setFinalData] = useState({});
    // this useState is to display 'Loading' while json is being fetched.
    const [loading, setLoading] = useState(true);

    async function getDetails() {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }

    // using 'useEffect' hook, re-render happens only when 'url' changes.
    useEffect(() => {
        getDetails();
    }, [url])

    return {
        finalData,
        loading
    }
}