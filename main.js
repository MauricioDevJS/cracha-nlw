const LinksSocialMedia = {
  github: 'MauricioDevJS',
  linkedin: 'mauricio-cardoso-oliveira-b07195163',
  instagram: 'mauricio_fpolis',
  facebook: 'mauricio.cardosooliveira',
  twitter: 'Mauricio_Fpolis'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
