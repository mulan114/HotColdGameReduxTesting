import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';

describe('generateAuralUpdate', () => {
	it('Should return the action', () => {
		const action = generateAuralUpdate();
		expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
	});
});

describe('restartGame', () => {
	it('Should return the restart game action', () => {
		const testCorrectAnswer = 45;
		const action = restartGame(testCorrectAnswer);
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toEqual(testCorrectAnswer);
	});
});

describe('makeGuess', () => {
	it('should return the make guess action', () => {
		const userGuess = 35;
		const action = makeGuess(userGuess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(userGuess);
	})
})
