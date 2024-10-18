export const FetchAllProducts = async (
    endpoint: string,
    ckey: string,
    skey: string
) => {
    try {
        const response = await fetch(endpoint + '/products', {
            method: 'GET',
            headers: {
                Authorization: `Basic ${ckey}:${skey}`,
            },
        })
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
