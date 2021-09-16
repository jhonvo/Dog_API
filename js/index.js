function fetchDogs (num){
    let url = `https://dog.ceo/api/breeds/image/random/${num}`;
    console.log("2. URL being called:", url);
    let settings = { // settings for the API call
        method: "GET"
    }
    fetch(url, settings) // Start of calling the information from the API server
        .then(function(response){
            console.log("3. JSON", response.json);
            return response.json(); // Setting the content of the response to JSON format
            
        }) 
        .then(function(data){ //This is generate an JS object with the images (array)
            console.log("4. Data",data);
            let results = document.querySelector('.results'); // Looking for the section of the HTML that needs to be updated.
            console.log("5. Results",results);
            results.innerHTML = ""; // This is to clear the images when the form is submitted again.
            for (let i = 0; i < data.message.length; i ++){
                results.innerHTML += `
                    <div>
                        <img src="${data.message[i]}" class="size">
                    </div>
                `;
            }
        });
}

// Second way to do it

async function fetchInfo(num){
    let url = `https://dog.ceo/api/breeds/image/random/${num}`;
    console.log("2. URL being called:", url);
    let settings = { // settings for the API call
        method: "GET"
    }

    let response = await fetch(url,settings);
    let data = await response.json();

    let results = document.querySelector('.results');
    results.innerHTML = "";

    for (let i = 0; i < data.message.length; i ++){
        results.innerHTML += `
            <div>
                <img src="${data.message[i]}" class="size">
            </div>
        `;
    }
}

function grabInfo (event)
{
    event.preventDefault();

    let currentNum = event.target.numOfDogs.value;
    console.log("1. Number added:", currentNum);
    fetchInfo (currentNum); // Calling the function to fetch the information
}
let dogForm = document.querySelector('#dogForm'); // Adding the event on the element
dogForm.addEventListener('submit', grabInfo);

//https://dog.ceo/dog-api/