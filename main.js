/* ctrl+; comentário
 shift+alt+a bloco de comentários

boas praticas, 
-nome das variaveis em ingles
-forma de escrever uma variaveis,funcção e metodo etc.
 L> camelCase
 L> PascalCase
 L> snake_case

 templestring variavel dentro de um texto com crase
 arrow functions function anonima ela não tem nome, e usa o simbolo =>

 */

const LinksSocialMedia = {
  github: 'f5melo',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'f5melo',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Felipe Melo'
  // userName.textContent = 'Felipe Melo'
  //for let li of socialist.children
  // li.getAttribute('class')

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    // alert(`https://www.${social}.com/${LinksSocialMedia[social]}`)
    li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  // alert(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLogin.textContent = data.login
      userLink.href = data.html_url

      // userLink.textContent = data.name
    })
}

getGitHubProfileInfos()
