//================Example-1======================
// Without using any selector for <section>,

// Select the <h2>
// Reach its parent using parentElement
// Change the parent's background color to lightblue
// Add 20px padding using JavaScript.

//=====================Example-2======================
/*
Select the .course-card

Using only children, print in console

Frontend Development

Learn HTML, CSS, JavaScript and React.

UL Element

IMG Element

A Element

Rules

❌ querySelector on h2, p, ul, img, a not allowed.

Only

children
*/

//===================Example-3============================
/*
Select

.course-card

Now

Change first element text color to red.
Change last element text color to green.
Print both text contents in console.

Output

Frontend Development

Visit Website
*/

//================================Example-4==============
/*
Select only

JavaScript

li

Now

Print

Previous Course :

CSS

Next Course :

React

Then

Change

CSS color to blue

React color to orange

Rules

❌ Don't use

querySelectorAll()[1]

querySelectorAll()[3]

Use only

previousElementSibling

nextElementSibling
*/

//=======================Example-5========================
/*
Select only

<li>JavaScript</li>

Without selecting any other element directly,

perform all these tasks.

Step 1

Go to its parent (ul)

Print total children.

Output

4
Step 2

From UL

Print first course.

Output

HTML
Step 3

Print last course.

Output

React
Step 4

Go to parent Section.

Change its border to

4px solid green
Step 5

Print section heading.

Output

Frontend Development
Rules

Allowed

parentElement

children

firstElementChild

lastElementChild

previousElementSibling

nextElementSibling

Not Allowed

querySelector("section")

querySelector("h2")

querySelector("ul")
*/
