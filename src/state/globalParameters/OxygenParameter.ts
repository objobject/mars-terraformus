import {GlobalParameter} from "./types";

export class OxygenParameter implements GlobalParameter {
	isWinCondition: boolean;
	startStep: number;
	maxStep: number;
	currentStep: number;

	constructor() {
		this.isWinCondition = true;
		this.startStep = 0;
		this.maxStep = 14;
		this.currentStep = 0;
	}

	raise() {
		if (this.validateNextStep()) {
			console.error(`Could not step oxygen parameter - it's already at maximum.`)
			this.currentStep += 1;
		}

		return this;
	}

	isAtMaximum() {
		return this.currentStep === this.maxStep;
	}

	private validateNextStep() {
		return this.currentStep + 1 <= this.maxStep;
	}
}