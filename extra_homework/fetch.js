const posts = fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('posts ------ == ', data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

const comments = fetch('https://jsonplaceholder.typicode.com/comments?postId=50')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('comments ------ == ', data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

const albums = fetch('https://jsonplaceholder.typicode.com/albums/13')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('albums ------ == ', data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

const photos = fetch('https://jsonplaceholder.typicode.com/photos?albumId=2')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('photos ------ == ', data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

const todos = fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('todos ------ == ', data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

const users = fetch('https://jsonplaceholder.typicode.com/users/10')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('users ------ == ', data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });