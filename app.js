let namesList = [];

// Function to list friends
function listFriends() {
    const listHtml = document.getElementById('friendsList');
    listHtml.innerHTML = '';

    for (let i = 0; i < namesList.length; i++) {
        const name = namesList[i];
        listHtml.innerHTML += `<li>${name}</li>`;
    }
}

// Function to add friends to the array
function addFriend() {
    const friend = String(document.getElementById('friend').value).toLowerCase();

    if (friend === '') {
        alert('Field is empty, please enter a name');
    } else {
        namesList.push(friend);
        listFriends();
    }

    document.getElementById('friend').value = '';
    console.log(namesList);
}

// Function to draw friends and remove the drawn one from the pool
function drawFriend() {
    const maxNum = parseInt(namesList.length);

    if (namesList.length === 0) {
        alert("The list is empty, please enter your friends' names");
    } else {
        const randomIndex = Math.floor(Math.random() * maxNum);
        const winner = namesList[randomIndex];

        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<li>${winner}</li>`;

        // Remove the winner from the draw
        namesList.splice(randomIndex, 1);
        listFriends();
        console.log(namesList);
    }
}

// Function to reset the game without reloading the page
function resetGame() {
    namesList = [];
    const listHtml = document.getElementById('friendsList');
    listHtml.innerHTML = '';

    const result = document.getElementById('result');
    result.innerHTML = '';

    const friend = document.getElementById('friend');
    friend.value = '';
}




