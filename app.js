const numbers = [1, 2, 3];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

/**
|--------------------------------------------------
| forEach
|--------------------------------------------------
*/

// numbers.forEach(function (x) {
//   console.log(x);
// });

// create a variable to hold the sum

let total = 0;

// loop over the array
// for (let i = 0; i < numbers.length; i++) {
//   total = total + numbers[i];
// }

// // display the result
// console.log("Total: ", total);

// numbers.forEach(function (x) {
//   total = total + x;
// });

// console.log(total);

// map
// [1, 2, 3] -->  [1, 4, 9]
let squares = [];

// numbers.forEach(function (x) {
//   squares.push(x * x);
// });

//console.log(squares);

const result = numbers.map(function (x) {
  return x * x;
});

const names = ['Moslem', 'Nadine', 'Adam']; // [<h1>Moslme</h1>, <h1>Nadine</h1>, <h1>Adam</h1>]

const headings = names.map(function (name) {
  return `<h1 class="title">${name}</h1>`;
});

const posts = [
  {
    id: 1,
    name: 'Adam Smith',
    job: 'Tech Lead',
    body: 'This is a my post',
  },
  {
    id: 2,
    name: 'Paul Turing',
    job: 'Math Teacher',
    body: 'This is a my post',
  },
  {
    id: 3,
    name: 'Anna Stevenson',
    job: 'Senior Developer',
    body: 'This is a my post',
  },
];

const renderedPosts = posts.map(function (post) {
  return `
      <div class="post">
      <div class="desc">
      <img src="user.png" />
       <div>
       <h2>${post.name}</h2>
       <h2>${post.job}</h2>   
       </div>
      </div>

      <p>
      ${post.body}
      </p>
    </div>
      `;
});

const postsDiv = document.getElementById('posts');
postsDiv.innerHTML = renderedPosts;
