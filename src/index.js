import API from './api'
document.getElementById('github-name').onblur = (e) => {
  API.getGitUserInfo({}, e.target.value.trim()).then(res => {
    document.getElementById('result').innerText = JSON.stringify(res, null, 4)
  }).catch(error => {
    document.getElementById('result').innerText = 'who?'
  })
}