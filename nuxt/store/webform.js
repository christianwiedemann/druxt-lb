export const state = () => ({
  activePage: 0,
});

export const mutations = {
  next(state) {
    state.activePage += 1;
  },
  prev(state) {
    state.activePage -= 1;
  }
}
