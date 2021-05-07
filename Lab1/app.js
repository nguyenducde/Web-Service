var postAPi = "https://jsonplaceholder.typicode.com/photos";
fetch(postAPi)
    .then(function (res) {
        return res.json();
    })
    .then(function (post) {
        var htmls = post.map(function (posts) {
            return `<ul>
            <li>${posts.title}</li>
            <li>${posts.url}</li>
        </ul>`
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML=html;
    });