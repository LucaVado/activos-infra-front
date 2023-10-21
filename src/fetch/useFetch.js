import { useEffect, useState } from "react";

export function useFetch(url, options = { method: 'GET' }){
    const[data, setData] = useState(null);

    useEffect(() => {
        fetch(url, 
            {
                method: options.method,
                headers: new Headers({
                    'Content-Type': 'application/json',
                })
            })
            .then((response) => {
                console.log("Response status:", response.status);
                console.log("Response status text:", response.statusText);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, [url, options.method]);

    // useEffect(() => {
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => setData(data));
    // }, []);

    return {data};
}