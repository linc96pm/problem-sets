import { constructNote } from './Frequency-Counters-and-Multiple-Pointers';

console.log(
  `constructNote('abc', 'abbggccfc') => `,
  constructNote('abc', 'abbggccfc')
);
console.log(`constructNote('abc', 'ax') => `, constructNote('abc', 'ax'));
console.log(`constructNote('abc', '') => `, constructNote('abc', ''));
console.log(
  `constructNote('absssddffuu', 'aabffsddlkgjfjhsjdsjhkjiu') => `,
  constructNote('absssddffuu', 'aabffsddlkgjfjhsjdsjhkjiu')
);
