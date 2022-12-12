export type GlobalParameter = {
	isWinCondition: boolean;
	startStep: number;
	maxStep: number;
	currentStep: number;
	isAtMaximum: () => boolean;
	raise: () => GlobalParameter;
}