
const URL = 'https://api.nbp.pl/api/exchangerates/rates';

export async function getData(code){
    const response = await fetch(`${URL}/a/${code}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

    if (response.status === 200){
        return await response.json();
    } else {
        throw new Error("Something is not yes!")
    }
}

