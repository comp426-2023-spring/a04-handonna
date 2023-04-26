export function rps(shot){
	const gameRules = {
		rock: {
			rock: 'tie',
			paper: 'win',
			scissors: 'lose'
		},
		paper: {
			rock: 'lose',
			paper: 'tie',
			scissors: 'win'
		},
		scissors: {
			rock: 'win',
			paper: 'lose',
			scissors: 'tie'
		}
	}
	const ranNum = Math.trunc(Math.random() * 3);
	const choice = ["rock", "paper", "scissors"];
	if (shot === undefined) {
		return {"player": choice[ranNum]};
	}
	shot = shot.toLowerCase();

	if (!choice.includes(shot)){
		throw new RangeError("Shot is out of range");
	}
	
	let result = gameRules[choice[ranNum]][shot];

	return {player: shot, opponent: choice[ranNum], result: result}
}

export function rpsls(shot) {
	let gameRules = {
		rock: {
			rock: 'tie',
			paper: 'win',
			scissors: 'lose',
			lizard: 'lose',
			spock: 'win'
		},
		paper: {
			rock: 'lose',
			paper: 'tie',
			scissors: 'win',
			lizard: 'win',
			spock: 'lose'
		},
		scissors: {
			rock: 'win',
            paper: 'lose',
            scissors: 'tie',
            lizard: 'lose',
            spock: 'win'
		},
		lizard: {
			rock: 'win',
            paper: 'lose',
            scissors: 'win',
            lizard: 'tie',
            spock: 'lose'
		},
		spock: {
			rock: 'lose',
            paper: 'win',
            scissors: 'lose',
            lizard: 'win',
            spock: 'tie'
		}
	}
	const ranNum = Math.trunc(Math.random() * 5);
	const choice = ["rock", "paper", "scissors", "lizard", "spock"];
	if(shot === undefined){
		return {"player": choice[ranNum]};
	}
	shot = shot.toLowerCase();
	
	if(!choice.includes(shot)){
		throw new RangeError("Shot is out of range");
	}
	
	let result = gameRules[choice[ranNum]][shot];
	
	return {player: shot, opponent: choice[ranNum], result: result}
}
