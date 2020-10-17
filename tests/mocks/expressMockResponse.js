export const expressMockResponse = {
  status: null,
  body: null,
  status(value) {
    this.status = value;

    return this;
  },
  json(value) {
    this.body = value;

    return this;
  }
};