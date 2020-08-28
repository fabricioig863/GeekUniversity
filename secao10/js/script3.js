// Axios

let btn = document.querySelector('#btn')
let div = document.querySelector('#app')

btn.addEventListener('click', () => {
    // Limpa o conteúdo da div
    div.innerHTML = ''

    // criar o span
    let spanNome = document.createElement('span')

    // Criação da variavel nome
    let textNome = ''
    
    // Recupera o input
    let github_user = document.querySelector('input[name=github_user]')
    let user = github_user.value;

    // Limpando o input
    github_user.value = '';

    axios.get(`http://api.github.com/users/${user}`)
        .then(function(response){
            if(response.data.name !== null){
                textNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img)
            }else{
                textNome = document.createTextNode('O usuário não possui nome.')
            }
            //adiciona o conteúdo na div
            spanNome.appendChild(textNome);
            div.appendChild(spanNome);

            
        })
        .catch(function(error){
            textNome = document.createTextNode('Não foi possivel realizar a requisição')

            //adiciona o conteúdo na div
            spanNome.appendChild(textNome);
            div.appendChild(spanNome);
        });
})