export default (app) => {
  app.directive('lazy-src', {
    inserted(el, { value }) {
      el.src = value
    }
  })
}
