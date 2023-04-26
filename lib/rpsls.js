export function rps(shot) {
    const options = ['rock', 'paper', 'scissors'];
    if (shot === undefined) {
        return {"player": options[Math.floor(Math.random()*options.length)]};
    } else {
        shot = shot.toLowerCase();
        if (!options.includes(shot)) {
            return 'error';
        }
        else {
            var opponent = options[Math.floor(Math.random()*options.length)];
            var result = 'tie';
            if (shot === 'rock') {
                if (opponent === 'paper') {
                    result = 'lose';
                }
                else if (opponent === 'scissors') {
                    result = 'win';
                }
            }
            else if (shot === 'paper') {
                if (opponent === 'rock') {
                    result = 'win';
                }
                else if (opponent === 'scissors') {
                    result = 'lose';
                }
            }
            else if (shot === 'scissors') {
                if (opponent === 'rock') {
                    result = 'lose';
                }
                else if (opponent === 'paper') {
                    result = 'win';
                }
            }
            return {'player': shot, 'opponent': opponent, 'result': result};
        }
    }
}

export function rpsls(shot) {
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    if (shot === undefined) {
        return {"player": options[Math.floor(Math.random()*options.length)]};
    } else {
        shot = shot.toLowerCase();
        if (!options.includes(shot)) {
            return 'error';
        }
        else {
            var opponent = options[Math.floor(Math.random()*options.length)];
            var result = 'tie';
            if (shot === 'rock') {
                if (opponent === 'paper' || opponent === 'spock') {
                    result = 'lose';
                }
                else if (opponent === 'scissors' || opponent === 'lizard') {
                    result = 'win';
                }
            }
            else if (shot === 'paper') {
                if (opponent === 'rock' || opponent === 'spock') {
                    result = 'win';
                }
                else if (opponent === 'scissors' || opponent === 'lizard') {
                    result = 'lose';
                }
            }
            else if (shot === 'scissors') {
                if (opponent === 'rock' || opponent === 'spock') {
                    result = 'lose';
                }
                else if (opponent === 'paper' || opponent === 'lizard') {
                    result = 'win';
                }
            }
            else if (shot === 'lizard') {
                if (opponent === 'rock' || opponent === 'scissors') {
                    result = 'lose';
                }
                else if (opponent === 'spock' || opponent === 'paper') {
                    result = 'win';
                }
            }
            else if (shot === 'spock') {
                if (opponent === 'paper' || opponent === 'lizard') {
                    result = 'lose';
                }
                else if (opponent === 'rock' || opponent === 'scissors') {
                    result = 'win';
                }
            }
            if (shot === 'spock') {
                shot = 'Spock';
            }
            if (opponent === 'spock') {
                opponent = 'Spock';
            }    
            return {'player': shot, 'opponent': opponent, 'result': result};
        }
    }
}