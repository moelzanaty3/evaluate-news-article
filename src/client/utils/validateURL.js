// BASED on https://stackoverflow.com/a/5717133/6483379

const URL_REGEX =
  '^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$'

const isURLValid = (url) => {
  const pattern = new RegExp(URL_REGEX, 'i') // fragment locator
  return !!pattern.test(url)
}

export default isURLValid
