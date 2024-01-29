

export async function updateUserPlaces(places) {

    // json stringify because we are unable to send javascript array to the backend where as we need to stringify it to JSON format
   const response = await  fetch('http://localhost:3000/user-places' , {
        method: 'PUT',
        body: JSON.stringify({places : places}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const resData = await response.json();


    if(!response.ok){
        throw new Error ('Failed to update user data.')
    }

    return resData.message;
}