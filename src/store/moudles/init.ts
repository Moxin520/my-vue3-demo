interface initType {
  nu: number;
  hello: string;
}
const init = {
  state: (): initType => ({
    nu: 1,
    hello: "hello",
  }),
  mutations: {
    nuAdd(state: initType) {
      state.nu++;
    },
  },
  actions: {},
};

export default init;
