import { constructNote } from './constructNote';

describe('constructNote', () => {
  const successFixtures = [
    ['abc', 'ahbkkc'],
    ['lll', 'kdgbsldsss'],
    ['llkkkffii', 'lhkfoi'],
  ];

  test.each(successFixtures)(
    'constructNote(%j, %j) should return true',
    (message, letters) => expect(constructNote(message, letters)).toBe(true)
  );

  const failedFixtures = [
    ['abc', 'ahbkklll'],
    ['lll', 'kdgbss'],
    ['llsadasd', ''],
    ['llssd', 'p'],
    ['', ''],
  ];

  test.each(failedFixtures)(
    'constructNote(%j, %j) should return false',
    (message, letters) => expect(constructNote(message, letters)).toBe(false)
  );
});
