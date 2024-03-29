export default function useFetch(){
    return async (url: string, method?: string, body?: string) => {
        let res = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: method || 'GET',
            body: body ? JSON.stringify(body) : null
        })
        return res.json();
    };
}