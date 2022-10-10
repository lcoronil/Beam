title = "Ghost Hunt";

description = `
[TAP] to shoot enermies
`;

// array of custom sprites 
characters = [
    `
    llllll
    ll l l
    ll l l
    llllll
     l  l
     l  l
      `,
];

// Game design variable container 
const G = {
    WIDTH: 200,
    HEIGHT: 200,

    PLAYER_X_POS: 5,
    PLAYER_Y_POST: 20, 
};


options = {
    viewSize: {x: G.WIDTH, y: G.HEIGHT},
    isReplayEnabled: true,
    isPlayingBgm: true,
    seed: 1,
    theme: "dark",
};

function update() {
	if (!ticks) {
		
	}
}
