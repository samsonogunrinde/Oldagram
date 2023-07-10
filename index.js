let main = document.getElementById("main")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "https://practical.innovalng.com/oldagram/images/avatar-vangogh.jpg",
        post: "https://practical.innovalng.com/oldagram/images/post-vangogh.jpg",
        comment: " just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "https://practical.innovalng.com/oldagram/images/avatar-courbet.jpg",
        post: "https://practical.innovalng.com/oldagram/images/post-courbet.jpg",
        comment: " i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "https://practical.innovalng.com/oldagram/images/avatar-ducreux.jpg",
        post: "https://practical.innovalng.com/oldagram/images/post-ducreux.jpg",
        comment: " gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]


for(let i = 0; i < posts.length; i++) {
let content = `<section>
        <div class="profile">
          <img class="avatar" src="${posts[i].avatar}">
          <div class="profile-info">
            <h3>${posts[i].name}</h3>
            <p> ${posts[i].location}</p>
          </div>
        </div>

        <img ondblclick="increaseLikes(${i})" class="profile-img" src="${posts[i].post}">

        <div>
          <img id="icon${i}" class="img-icon" src="https://practical.innovalng.com/oldagram/images/icon-heart.png">
          <img class="img-icon" src="https://practical.innovalng.com/oldagram/images/icon-comment.png">
          <img class="img-icon" src="https://practical.innovalng.com/oldagram/images/icon-dm.png">
        </div>

        <h4 id="like${i}">${posts[i].likes}</h4>
        <h4>${posts[i].username}<span class="comment">${posts[i].comment}</span> </h4>
      </section>`
        main.innerHTML += content
        
}

function increaseLikes(i) {
    let like = document.getElementById("like" + i)
    let icon = document.getElementById("icon" + i)
    if (!posts[i].isLiked) {
        posts[i].likes++
        icon.src = "https://practical.innovalng.com/oldagram/images/icon-heart-red.png"
        like.innerText = posts[i].likes
        posts[i].isLiked = true
    } else {
        posts[i].likes--
        icon.src = "https://practical.innovalng.com/oldagram/images/icon-heart.png"
        like.innerText = posts[i].likes
        posts[i].isLiked = false
    }
    

}