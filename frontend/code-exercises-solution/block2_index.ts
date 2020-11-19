console.clear();

const url = "https://jsonplaceholder.typicode.com/todos";
const loadData = async () =>
  await fetch(url).then((response) => response.json());

const data = loadData();

// select all data
const selectAll = async () => await data;

selectAll().then((res) => {
  console.assert(res.length === 200);
});

// select todo by id;
const selectById = async (id) => {
  return await data.then((todos) => todos.filter((todo) => todo.id === id));
};

selectById(1).then((res) => {
  console.assert(res.length === 1);
  console.assert(res[0].id === 1);
});

selectById("a").then((res) => {
  console.assert(res.length === 0);
});

/*

  Exercise 2.
  1. Implement all functions below;
  2. Convert this file to TypeScript, create interfaces for input data;
  
  Optional: 3. Write a helper function which acts like a wrapper and memoizes the result of any selector function

*/

// 1. grouping todos by users:

// 2. select all user's todos by userId:

// 3. select todos by user name:

// 4. Use https://jsonplaceholder.typicode.com/users to load data about selected todos' authors and print result to console:

/** SOLUTION BELOW: */

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// 1. grouping todos by users:
const groupTodosByUser = async (): Promise<[Todo]> => {
  return await data.then((todos) =>
    todos.reduce((todosByUser, { userId, ...rest }) => {
      todosByUser[userId] = [...(todosByUser[userId] || []), rest];
      return todosByUser;
    }, {})
  );
};

// 2. select all user's todos by userId:
const selectTodosByUserId = async (id: number): Promise<[Todo]> =>
  await groupTodosByUser().then((res: {}) => res[id]);

// 2. Working Example
selectTodosByUserId(1).then((res: [Todo]) => {
  for (let i = 1; i <= 10; i++) console.assert(res[0].id === 1);
});

// helper function to load users
const loadUsers = async (): Promise<[User]> =>
  await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );

// 3. select todos by user name:
const selectTodosByUsername = async (uname: string): Promise<[Todo]> => {
  return await loadUsers().then((users) => {
    const userId = users.find(({ username }) => username === uname)["id"];

    return selectTodosByUserId(userId).then((res) => res);
  });
};

// 3. working example
selectTodosByUsername("Delphine").then((todos) =>
  console.log("selectTodosByUsername('Delphine') = ", todos)
);

// 4. load data about selected todos' authors and print result to console
const getAuthorOfSelectedTodo = async (
  selectedTodoId: number
): Promise<User> => {
  // selectById refers to the todo's selectById function given to us in the upper part of this file
  return await selectById(selectedTodoId).then((todos) => {
    const { userId } = todos[0];

    return loadUsers().then((users) => {
      return users.find((user) => user.id === userId);
    });
  });
};

getAuthorOfSelectedTodo(5).then((author) => console.log("author: ", author));
