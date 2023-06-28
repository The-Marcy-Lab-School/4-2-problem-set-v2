# Problem Set 4.2
- [Problem Set 4.2](#problem-set-42)
  - [Before you start](#before-you-start)
- [Question 1 - makeCounter](#question-1---makecounter)
- [Question 2 - Circle](#question-2---circle)
- [Question 3 - Teacher](#question-3---teacher)
- [Short answers](#short-answers)
- [Refactor Ticket](#refactor-ticket)

## Before you start
For tonight's homework, we're asking you to use `constructor` functions and the explicit `prototype` property. We *know* that you can accomplish this code with the newer `class` syntax, but we're asking you not to use that right now.

Constructors and prototypes are tricky, here are some resources to get started:

- [W3: Constructors](https://www.w3schools.com/js/js_object_constructors.asp)
- [W3: Prototypes](https://www.w3schools.com/js/js_object_prototypes.asp)
- [Chapter 4 of OO Principles of JS](http://www.r-5.org/files/books/computers/languages/escss/fp/Nicholas_C_Zakas-The_Principles_of_JavaScript-EN.pdf)
   - This book is *quite* old (circa 2013), but the principles still work. Just ignore the `var`s

You should be asking yourself "Why use old syntax?" Well it's not because we ever want you to write code using this syntax for real. No, we want you to do it this way so you really understand the split between instances created from the `constructor`, and the methods stored on the prototype. Under the hood, this `constructor` function syntax is always what's used by `classes` anyway.

> This is about really understanding the mechanics of the language before moving on to the simpler syntax.

# Question 1 - makeCounter
Review time! Remember lesson 1 from this week? Hope you do, because you'll need it to build the `makeCounter` closure. But there's a twist compared to last time, check the tests!

# Question 2 - Circle
Make a constructor function `Circle`. To be *nice* we started you off a little, but check the tests for more info!

# Question 3 - Teacher
Finally, build a `Teacher` constructor function. Think about how you structured `Circle` with the prototype and apply that here.

**Think: what goes on the instances and what goes on the prototype?**

# Short answers
There are short answers with this assignment, don't forget to do them!

# Refactor Ticket

| Ticket | Name |
|--------|-----|
| REFA-2099 | Update getObjectKeys util |
|**Description** | We finally got our linting game on point, and [object.hasOwnProperty](https://eslint.org/docs/latest/rules/no-prototype-builtins) is out. It says we just need swap over to using `.call` and the `prototype`, but this `for..in` syntax is old and clunky. Let's update it to sleeker, modern syntax. |
| **priority** | Low |
| **Status** | Open |
| **Assignee** | YOU! |

And then the comments would look something like:

| Commenter | Message |
|-----------|---------|
| Cheryl SE3  | Whoever picks this up, I challenge you to rewrite this function in one line. |
| _**YOU**_ | _**Challenge accepted, on it!**_ |
