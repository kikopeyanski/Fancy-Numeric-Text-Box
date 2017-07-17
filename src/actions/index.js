export const CHANGE_INPUT = 'CHANGE_INPUT';

export function changeStep(val) {
  return {
    type: CHANGE_INPUT,
    step: val
  };
}
