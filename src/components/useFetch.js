import { useState, useEffect } from 'react'


export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
          if(!res.ok) {
            throw Error('Couldnt fetch the data for that resourse');
          }
          return res.json();
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          setError(err.message);
          setIsPending(false)
        })
      }, [url])

      return { data, isPending, error }
}

