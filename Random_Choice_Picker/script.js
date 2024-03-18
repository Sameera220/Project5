const tagEle = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key== 'Enter'){
        setTimeout(()=>{
            e.target.value=''
     }, 10)
        randomSelect();
    }
})

function createTags(input){
    const tagCommaRemoval = input.split(',').filter(tag => tag.trim()!=='').map(tag=>tag.trim())
    tagEle.innerHTML='';
    tagCommaRemoval.forEach(tag => {
    const tagel= document.createElement('span')
    tagel.classList.add('tag')
    tagel.innerText = tag;
    tagEle.appendChild(tagel)
    });
}

function randomSelect(){
    const times =30;
    const interval = setInterval(() => {
        const randomTag = pickRandom();
        highlight(randomTag);
        setTimeout(()=>{
            unhighlight(randomTag)
        },100);
    }, 100);

    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag = pickRandom()
            highlight(randomTag)
        })

    }, times*100)
}

function pickRandom(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
    
}
function highlight(tag){
    tag.classList.add('highlight')
}
function unhighlight(tag){
    tag.classList.remove('highlight')
}