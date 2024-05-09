const URL = 'https://localhost:3000/trainers';

const getTrainers = async() => {
    const request = await fetch(URL);
    const response = await request.json();
    console.log('Respuesta: ', response)
}

export default getTrainers