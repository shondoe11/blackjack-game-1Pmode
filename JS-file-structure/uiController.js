/*-------------- Constants -------------*/

// NA for now

/*---------- Variables (state) ---------*/

// NA for now

/*----- Cached Element References  -----*/

const leaderboardList = document.getElementById('leaderboardList');

/*-------------- Functions -------------*/

// displaying my card images
function updateHandUI(hand, handElementId, revealAll = true) {
    const handElement = document.getElementById(handElementId);
    if (!handElement) {
        console.error(`Element with ID ${handElementId} not found.`);
        return;
    }
    handElement.innerHTML = ''; // clear previous cards
    hand.forEach((card, index) => {
        const cardImg = document.createElement('img');
        if (!revealAll && index === 0) {
            // dealer first card face down
            cardImg.src = `./IMG-assets/cards/back_of_card.png`;
        } else {
            // dealer second card face up
            cardImg.src = `./IMG-assets/cards/${card.rank.toLowerCase()}_of_${card.suit.toLowerCase()}.png`;
        }
        cardImg.alt = `${card.rank} of ${card.suit}`;
        cardImg.classList.add('card');
        handElement.appendChild(cardImg);
    });
}


// render dynamic leaderboard
function renderLeaderboard(leaderboard = []) {
    console.log('Rendering leaderboard:', leaderboard); // step 5 debug
    leaderboardList.innerHTML = ''; // clear current leaderboard state first
    leaderboard.forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = `${player.name}: $${player.money}`;
        leaderboardList.appendChild(listItem);
    });
    console.log('Rendered leaderboard:', leaderboard); // step 5 debugging
}

/*----------- Event Listeners ----------*/

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const dropdown = document.querySelector('.nav-dropdown');
    dropdown.classList.toggle('show');
});

/*--------------- Exports --------------*/

export {updateHandUI, renderLeaderboard};