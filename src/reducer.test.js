import {generateAuralUpdate, restartGame, makeGuess} from './actions';
import {hotColdGameReducer} from './reducer';

describe('', () => {
	//dummy data
	const testGuesses = [1, 24, 65, 90];
	const testFeedback = "test feedback";
	const testAuralStatus = 'test aural status';
	const testCorrectAnswer = 51;
	const testState = {
		guesses: testGuesses,
		feedback: testFeedback,
		auralStatus: testAuralStatus,
		correctAnswer: testCorrectAnswer
	};
	const userGuessHot1 = 54;
	const userGuessHot2 = 49;
	const userGuessWarm1 = 62;
	const userGuessWarm2 = 40;
	const userGuessCold1 = 97
	const userGuessCold2 = 20;
	const userGuessIceCold = 1; 

	describe('generateAuralUpdate', () => {
		it('Should provide aural update', () => {
			let state;
			state = hotColdGameReducer(testState, generateAuralUpdate());
			expect(state).toEqual({
				guesses: testGuesses,
				feedback: testFeedback,
				auralStatus: "Here's the status of the game right now: test feedback You've made 4 guesses. In order of most- to least-recent, they are: 90, 65, 24, 1",
				correctAnswer: 51
			});
		});
	});

	describe('restartGame', () => {
		it('Should restart the game', () => {
			let state;
			state = hotColdGameReducer(testState, restartGame());
			expect(state).toEqual({
				guesses: [],
				feedback: 'Make your guess!',
				auralStatus: ''
			});
		});
	});

	describe('makeGuess', () => {
		it('Should add HOT1 guess to guess list and provide HOT1 feedback', () =>{
			let state;
			state = hotColdGameReducer(testState, makeGuess(userGuessHot1));
			expect(state).toEqual({
				guesses: [...testGuesses, userGuessHot1],
				feedback: "You're Hot!",
				auralStatus: "test aural status",
				correctAnswer: 51
			});
		});
	});

	describe('makeGuess', () => {
		it('Should add HOT2 guess to guess list and provide HOT2 feedback', () =>{
			let state;
			state = hotColdGameReducer(testState, makeGuess(userGuessHot2));
			expect(state).toEqual({
				guesses: [...testGuesses, userGuessHot2],
				feedback: "You're Hot!",
				auralStatus: "test aural status",
				correctAnswer: 51
			});
		});
	});

	describe('makeGuess', () => {
		it('Should add WARM1 guess to guess list and provide WARM1 feedback', () =>{
			let state;
			state = hotColdGameReducer(testState, makeGuess(userGuessWarm1));
			expect(state).toEqual({
				guesses: [...testGuesses, userGuessWarm1],
				feedback: "You're Warm.",
				auralStatus: "test aural status",
				correctAnswer: 51
			});
		});
	});

	describe('makeGuess', () => {
		it('Should add WARM2 guess to guess list and provide WARM2 feedback', () =>{
			let state;
			state = hotColdGameReducer(testState, makeGuess(userGuessWarm2));
			expect(state).toEqual({
				guesses: [...testGuesses, userGuessWarm2],
				feedback: "You're Warm.",
				auralStatus: "test aural status",
				correctAnswer: 51
			});
		});
	});
	describe('makeGuess', () => {
		it('Should add HOT2 guess to guess list and provide HOT2 feedback', () =>{
			let state;
			state = hotColdGameReducer(testState, makeGuess(userGuessHot2));
			expect(state).toEqual({
				guesses: [...testGuesses, userGuessHot2],
				feedback: "You're Hot!",
				auralStatus: "test aural status",
				correctAnswer: 51
			});
		});
	});

	describe('makeGuess', () => {
		it('Should add COLD1 guess to guess list and provide COLD1 feedback', () =>{
			let state;
			state = hotColdGameReducer(testState, makeGuess(userGuessCold1));
			expect(state).toEqual({
				guesses: [...testGuesses, userGuessCold1],
				feedback: "You're Cold...",
				auralStatus: "test aural status",
				correctAnswer: 51
			});
		});
	});

	describe('makeGuess', () => {
		it('Should add COLD2 guess to guess list and provide COLD2 feedback', () =>{
			let state;
			state = hotColdGameReducer(testState, makeGuess(userGuessCold2));
			expect(state).toEqual({
				guesses: [...testGuesses, userGuessCold2],
				feedback: "You're Cold...",
				auralStatus: "test aural status",
				correctAnswer: 51
			});
		});
	});

	describe('makeGuess', () => {
		it('Should add ICECOLD guess to guess list and provide ICECOLD feedback', () =>{
			let state;
			state = hotColdGameReducer(testState, makeGuess(userGuessIceCold));
			expect(state).toEqual({
				guesses: [...testGuesses, userGuessIceCold],
				feedback: "You're Ice Cold...",
				auralStatus: "test aural status",
				correctAnswer: 51
			});
		});
	});

})