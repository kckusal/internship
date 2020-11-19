# Provectus Internship Program test assignment

## Instructions

- Each test block consists of questions, and a code exercise
- You need to answer questions and complete the code exercise
  - Code exercise result must be on Stackblitz or Github
  - Answers can be in Russian or English language
- The result of the entire assignment must be on Google Docs or Github

## Assignment

#### Block 1: Common

    1. What are primitives? How can developers use them?
    JS primitives are immutable data represented at the lowest level of the language implementation. They are stored by value and do not have any associated functions of their own to perform operations on them. JS has 7 primitive types (number, bigint, string, boolean, null, undefined, symbol) and an object type that can be checked by the typeof operator.

    JS allows developers to use the primitives as if they are objects. JS creates different "object wrappers" for each primitive type and provides us with useful methods (like toUpperCase() method on string primitives available through String wrapper).


    2.  What does keyword `this` mean?
    In JS, `this` is a property of an execution context (global, function, eval).

    - In the global execution context (outside of any function), `this` refers to the `global` object. In web browsers, the `window` object is also the `global` object; so, here, `this` refers to this `window` variable.
    - In a method, `this` refers to the owner object.
    - In an event, `this` refers to the element that received the event.
    - In explicit function binding, using methods like `call()`, and `apply()` can refer `this` to any object.

    The behavior of this can vary depending on whether the execution mode is strict or not too.
    - In a function, `this` refers to the `global` object.
    - In a function, in strict mode, `this` is `undefined`.


    3.  What are callbacks?
    A JS callback is simply a function passed as an argument to another function. JS functions are executed in the sequence they are called, not in the sequence they are defined. Using callbacks allows the flexibility to call a function at a later time even in a different context, thereby providing better sequence control.


    4.  What is a function declaration and how are its types different?
    A function declaration is a way to define a function for later use, meaning it will be executed later when invoked, not immediately upon definition.

    - Named declaration: give the function a name and a set of parameters and its corresponding implementation. To be able to self-invoke, they have to be converted to function expression first by adding parentheses around the function.

    ```javascript
    function functionName(parameters) {
    // code to be executed
    }
    ```

    - Function Expression:  Store the function in a variable. Functions stored in variables do not need function names (anonymous function) as they will be invoked later with the variable name they are stored in. Function expressions can be made "self-invoking" if the expression is followed by ().

    ```js
    var x = function (a, b) {return a * b};
    var z = x(4, 3);
    ```

    - Function Constructor: Unlike above functions declared with function keyword, JS provides a built-in constructor called Function() to declare functions.

    ```js
    var myFunction = new Function("a", "b", "return a * b");
    var x = myFunction(4, 3);
    ```

    5. Compare spread and rest operators.
    The rest operator accumulates multiple elements/values in an iterable into a single standard JS array. In contrast, the spread operator expands an iterable (an array expression or string) in places where one or more elements are expected.

    Both use a syntax prefixed with `...`. Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax.

    ```js
    function myFun(a, b, ...manyMoreArgs) {
      console.log("a", a)
      console.log("b", b)
      console.log("manyMoreArgs", manyMoreArgs)
    }
    ```
    The rest syntax above allows us to represent an indefinite number of arguments as an array.

    ```js
    function sum(x, y, z) {
      return x + y + z;
    }

    const numbers = [1, 2, 3];
    console.log(sum(...numbers));
    // expected output: 6
    ```
    The spread syntax here allows multiple elements from array to be passed as arguments to a function.

#### [Code exercise](https://stackblitz.com/edit/js-v99jvs)

> Please find the solution in the file _code-exercises-solution/block1_index.js_.

#### Block 2: Async

    1. JavaScript, is it synchronous or not?
    In its base, JavaScript is always synchronous and single-threaded, i.e. only one operation is being executed at one time in the order it is called (other operations will have to wait until this one's finished execution). At the high-level though, JS has APIs that allow it to behave in an asynchronous way; this is possible using the callback model, and the Promises and async-await features.


    2. What is the key principle of Call Stack?
    Call Stack is how JS intepreter (like the one in browser) keeps track of information like what function is currently being run and what functions are called from within that function in a script that calls multiple nested functions.

    Being a stack data structure, the call stack works based on the LIFO principle i.e., last-in-first-out. When a script calls a function it is added to the call stack. Functions called from within that function are added up the stack and run where their calls are reached. When the current function is finished, it is taken off the stack, and execution is resumed from the last place it left off in the code. Stack overflow error occurs if the stack takes up more space than it had been assigned to.


    3. What does AJAX mean?
    AJAX stands for Asynchronous JavaScript and XML. AJAX is not a technology itself, but a model formed by combining HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the XMLHttpRequest object. With this, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page.


    4. Promise hell. How would you solve it?
    A callback hell is when you nest callbacks upon callbacks leading to a messy, hard to maintain code block representing a structure called [Pyramid of Doom](https://javascript.info/callbacks#pyramid-of-doom).
    Promise hell is when you nest a number of (often linearly dependent) promises and end up with similar troubles to callback hell, i.e. complex and hard to parse promise chains.

    Like callback hell, promise hell can be handled in a number of ways including by following better coding practices.
    - avoid nesting promises: nesting promises is unnecessary if they are linearly dependent.
    - Run promises in parallel if they are linearly independent and the order of resolving doesn't matter. (Promise.all[promise1, promise2]).


    5. How would you handle exceptions in JS? List two options.
    - the try...catch...finally construct to catch programmer-generated and run-time exceptions and handle them gracefully.
    - the throw operator can be used to raise your built-in exceptions or even customized exceptions.

    JS also offers other in-built features to facilitate error handling, like the `onerror` event handler in the window object; the error event is fired on the `window` object whenever an exception occurs on the page.


    6. Which framework would you choose for a new project? Explain why.
    Depending on the type & scope of the project, React library if it's just front-end project, NextJS (React with SSR) if it requires backend with good SEO, or simply React (for front-end) and Node (for backend) if SEO is not a concern.

    My reasons for choosing React for frontend would be:
    - React is component-based, breaking down a large app into manageable pieces (also isolating view-data layer to the component levels). I believe this coincides with the mental picture of the way humans prefer managing complex problems as well as they perceive the UI. The components are also composable and reusable so that they can be shared across other existing projects too (I usually do my projects by sharing many common React hooks across them).
    - Secondly, React minimizes the number of DOM manipulations (that are costly) to be made on user interaction, giving a smoother faster app experience. This makes React App comparatively faster than apps built using other libraries out there.
    - React has a huge community with many open-source packages to help build projects quickly and easily.

#### [Code exercise](https://stackblitz.com/edit/js-llr1ac-async-task-chvwqk)

> Please find the solutions in the files _block2_index.js_ & _block2_index.ts_ under the directory _code-exercises-solutions_.

#### Block 3: TypeScript

    1. Is it possible to check types in runtime? If so, how?
    TS performs type-related works in compile-time. What you can do is check that the shape of an object is what you expect, and TypeScript can assert the type at compile time using a user-defined type guard that returns true if the shape matches your expectation.

    Types are stripped away at compile-time and do not exist at runtime, so you can't check the type at runtime using TS. Anything we want to do in runtime will have to be done with JS alone; JS actually allows you to use `typeof` operator to check types of primitives in runtime if needed.


    2. What is the difference between private and protected fields?
    Private fields can only be accessed from inside the containing class; outside of that class, they simply cease to exist.
    The protected fields are much like the private fields, except that fields declared protected can also be accessed within deriving classes (i.e. they are passed through inheritance).


    3. How do interfaces help in development?
    An interface in TS is a syntactical contract that an entity should conform to within the existing code as well as with code outside of a project. This secures the entity by throwing an error in compile time whenever any instance of it doesn't conform to the defined structure. Integrating and sharing across codebase is also less error-prone now that TS interfaces explicitly tell developers what need to be implemented in or expected by the entities implementing that interface. This also means potential logical errors are caught early on during the development stage.


    4. How would you pass arguments into a Class?
    A class constructor can be made to take parameters that will be supplied as arguments to the class when creating an instance of that class. So, just pass those arguments in the constructor function.

#### [Code exercise](https://stackblitz.com/edit/typescript-2xfiqk)

> Please find the solution in the file _code-exercises-solution/block3_index.ts_.
