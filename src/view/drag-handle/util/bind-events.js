// @flow
import type {
  EventBinding,
  EventOptions,
} from './event-types';

export const bindEvents = (
  el: HTMLElement,
  bindings: EventBinding[],
  sharedOptions?: EventOptions,
) => {
  bindings.forEach((binding: EventBinding) => {
    const options: Object = {
      ...sharedOptions,
      ...binding.options,
    };

    el.addEventListener(binding.eventName, binding.fn, options);
  });
};

export const unbindEvents = (
  el: HTMLElement,
  bindings: EventBinding[],
  sharedOptions?: EventOptions,
) => {
  bindings.forEach((binding: EventBinding) => {
    const options: Object = {
      ...sharedOptions,
      ...binding.options,
    };

    el.removeEventListener(binding.eventName, binding.fn, options);
  });
};
