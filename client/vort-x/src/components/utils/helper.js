export const fetchWithCORSHeader = (url) => {
    const data = fetch(url, {
        mode: "cors",
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json; charset=utf-8",
        }}).then(response=>response.json())
    return data
}