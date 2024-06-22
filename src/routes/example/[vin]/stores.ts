import { writable } from 'svelte/store';

export const slideOpen = writable(false);

export const generatedContent = writable(
	'Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit. Maecenas lacinia arcu ut tellus tempus, id fringilla nibh vehicula. Ut pellentesque magna id ultrices interdum. Nullam eu molestie orci, eget vehicula lectus. Nulla ultrices magna eget urna suscipit sagittis. In a massa id nisl cursus venenatis. Nulla maximus tincidunt est, ut varius arcu interdum nec. Cras fringilla quam quis ante varius pretium.'
);
