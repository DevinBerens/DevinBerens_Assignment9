/* Practice Assignment 9:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

async function getAllPosts() {
	let ret = await fetch('https://jsonplaceholder.typicode.com/posts')
  let response = await ret.json();
	return response;
}

// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.


/* your description says to get all the posts, it is the exact same as problem 1.*/

async function getAllUsers() {
	let ret = await fetch('https://jsonplaceholder.typicode.com/posts')
  let response = await ret.json();
	return response;
}

// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.

async function getComments(postID) {
	let ret = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
  let response = await ret.json();
  return response;
}

// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.

async function getUser(userID) {
	let ret = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userID}`);
  let response = await ret.json();
  return response;
}

// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.

async function getTodosForUser(userID) {
	let ret = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userID}`);
  let response = await ret.json();
  return response;
}
