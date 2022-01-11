const bacheca = [
    {
        id: 1,
        nome: 'Phil Mangione',
        profilePic: 'https://unsplash.it/300/300?image=15' ,
        data: '11-11-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postPic: 'https://unsplash.it/600/300?image=171',
        nLikes: 80
    },
    {
        id: 2,
        nome: 'John Mangione',
        profilePic: 'https://unsplash.it/300/300?image=16' ,
        data: '01-11-2022',
        text: 'Ad Elsinore, in Danimarca, il fantasma del defunto re appare ad Amleto, suo figlio, e gli chiede di essere vendicato: ad ucciderlo è stato infatti il fratello Claudio che si è ora appropriato del trono e ha sposato la vedova moglie del re, Gertrude.',
        postPic: 'https://unsplash.it/600/300?image=172',
        nLikes: 15
    },
    {
        id: 3,
        nome: 'Phil Collins',
        profilePic: 'https://unsplash.it/300/300?image=17' ,
        data: '21-09-2021',
        text: 'C’erano una volta due fratelli, Enrico che era ricco ma antipatico, e Nicola che era simpatico, ma senza nemmeno un soldo bucato.Una sera Nicola, aprendo la dispensa della cucina e vedendola ancora vuota, decise di andare dal fratello per chiedergli qualcosa da mangiare.',
        postPic: 'https://unsplash.it/600/300?image=173',
        nLikes: 180
    },
    {
        id: 4,
        nome: 'John Frusciante',
        profilePic: 'https://unsplash.it/300/300?image=18' ,
        data: '23-06-2021',
        text: 'Caso vuole che proprio nei paraggi c’era un vecchietto con la barba lunga e bianca, che mentre si stava riposando dallo spaccar la legna, aveva ascoltato le parole di Nicola.',
        postPic: '',
        nLikes: 1
    },
    {
        id: 5,
        nome: 'Artur Collins',
        profilePic: '' ,
        data: '21-09-2021',
        text: 'Che bello  :)',
        postPic: 'https://unsplash.it/600/300?image=174',
        nLikes: 180
    },
]


let outputHtml = document.querySelector(".posts-list")

for (let i = 0; i < bacheca.length; i++) {
    const sPost = bacheca[i]
    let profilePic2;
    
    if (sPost.profilePic == '') {
        profilePic2 = 'img/foto1'
    } else {
        profilePic2 = sPost.profilePic
    }

    let singlePost = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${profilePic2}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${sPost.nome}</div>
                    <div class="post-meta__time">${sPost.data}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${sPost.text}</div>
        <div class="post__image">
            <img src="${sPost.postPic}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${sPost.nLikes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
    
    outputHtml.innerHTML += singlePost
}



