import gamePathReducer, * as fromSpellGamePath from './index.js';

const mockInitialState = {
  path: [],
  position: null,
  completed: false,
}

describe('SpellGamePath redux module', () => {
  describe('initialize path', () => {
    const emptyInitialState = {
      path: [],
      position: null,
      completed: false,
    }
    it('should initialise the state for a new game path', () => {
      const newPath = ['a', 'b', 'c', 'd'];
      const state = gamePathReducer(emptyInitialState, fromSpellGamePath.initializePath(newPath))
      expect(state.path).toEqual(newPath);
      expect(state.position).toBe(0);
      expect(state.completed).toBe(false);
    });
  });

  describe('Advance Position', () => {
    describe('when it is NOT the last position', () => {
      const nonWinningInitialState = {
        path: ['a', 'b', 'c', 'd'],
        position: 2,
        completed: false,
      }

      it('should advance one position on the game path', () => {
        const state = gamePathReducer(nonWinningInitialState, fromSpellGamePath.advancePosition())
        expect(state.path).toEqual(nonWinningInitialState.path);
        expect(state.position).toBe(3);
        expect(state.completed).toBe(false);
      });
    })

    describe('when it IS the last position', () => {
      const winningInitialState = {
        path: ['a', 'b', 'c', 'd'],
        position: 3,
        completed: false,
      }

      it('should advance set the game as completed', () => {
        const state = gamePathReducer(winningInitialState, fromSpellGamePath.advancePosition())
        expect(state.path).toEqual(winningInitialState.path);
        expect(state.position).toBe(3);
        expect(state.completed).toBe(true);
      });
    });
  });

  describe('Return Position', () => {
    describe('when it is NOT the first position', () => {
      const nonWinningInitialState = {
        path: ['a', 'b', 'c', 'd'],
        position: 2,
        completed: false,
      }

      it('should return one position on the game path', () => {
        const state = gamePathReducer(nonWinningInitialState, fromSpellGamePath.returnPosition())
        expect(state.path).toEqual(nonWinningInitialState.path);
        expect(state.position).toBe(1);
        expect(state.completed).toBe(false);
      });
    })

    describe('when it IS the first position', () => {
      const nonWinningInitialState = {
        path: ['a', 'b', 'c', 'd'],
        position: 0,
        completed: false,
      }

      it('should not try to return on the game path', () => {
        const state = gamePathReducer(nonWinningInitialState, fromSpellGamePath.returnPosition())
        expect(state.path).toEqual(nonWinningInitialState.path);
        expect(state.position).toBe(0);
        expect(state.completed).toBe(false);
      });
    })
  });
});