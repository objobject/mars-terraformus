import {OceanParameter, OxygenParameter, TemperatureParameter} from "./globalParameters";

const parameters = {
	temperature: new TemperatureParameter(),
	oxygen: new OxygenParameter(),
	ocean: new OceanParameter()
};

class GameState {
	private generation = 0;
	private readonly parameters = parameters;
	// TODO: implement played map info (static - coordinates, milestones, awards, placement bonuses, volcanic areas, special areas)
	// TODO: implement card deck and draws (DeckState - draw/discard piles)
	// TODO: implement tile placement (TileState - city/greenery tiles, special tiles)
	// TODO: implement players (PlayerState - played corporation, cards on hand, do an action (playing card included))

	public isLastGeneration() {
		return Object.values(this.parameters)
			.filter(parameter => parameter.isWinCondition)
			.every(parameter => parameter.isAtMaximum())
	}

	public moveToNextGeneration() {
		this.generation += 1;

		return this;
	}

	public raiseParameter(parameterName: keyof typeof parameters) {
		this.parameters[parameterName].raise();

		return this;
	}
}

export default GameState;
