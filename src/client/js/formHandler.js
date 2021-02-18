import { checkUrl } from './checkURL'

const postDate = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
      return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const handleSubmit = async () => {
  /**
   * Get Value of the input for URL
   * Check if it's URL or not
   *  yes
   *      send it to the backend
   *  no
   *      show user message it's not valid URL
   */

  const articleUrl = document.getElementById('article-url').value
  if (checkUrl(articleUrl)) {
    const mcData = await postDate('http://localhost:8081/add-url', {
        articleUrl
    })
    document.getElementById('agreement').textContent = mcData.agreement
    document.getElementById('confidence').textContent = mcData.confidence
    document.getElementById('score_tag').textContent = mcData.score_tag
    document.getElementById('subjectivity').textContent = mcData.subjectivity
    document.getElementById('irony').textContent = mcData.irony
  } else {
    alert('Enter a valid URL')
  }
}

export default handleSubmit
