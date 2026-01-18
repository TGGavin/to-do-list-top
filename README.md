A to-do list.

Stick to the principles of SOLID

Single Responsibility (A method/module should only have one job)
Open-closed (No need to change existing code if you want to add new functions to it)
Liskov substituition (All classes have to be interchangable with its subclasses)
Interface segregation (Any class that inherits from another class have to use all of the methods and properties of the class it inherits from)
Dependency Inversion (any class dependency needs to have a wrapper/interface before interacting with the class itself)



# Ideas / Soft plans
deletion confirmation window

expanded todo item view with horizontal arrow buttons for clicking between projects.
vertical arrow buttons for clicking between todo items

// Add ability to move a toDo item to a different project

// Maybe a dependency graph (Yeesh)

                // const delToDo
                // const moveToDo


    Limit date options to only dates past now. With the input element.
# Hard plan

<!-- 
//      Create to do list items DONE
// include properties like:
// title, DONE
// description, DONE
// notes, DONE
// priority, DONE
// checklist, DONE
// due-date. DONE

Make App hanlder function that uses .push on items into lists and lists into the apps toDoList array. DONE!

//      Create to do list catagories/projects DONE
// assign create to do list item functions to this function and make it unqiue to that function each time so create todo items stay within the specified function. Done! (Incoherent)

// Add date values to todo-items. DONE!

//      display project
// using the checklist property create a completion bar for the project
// progress bar that divides off of the todo list items and increases when there are completed todos

//      Display To do list items
// display properties

//      UI Handling
// buttons for:
// viewing all projects.
// view all todos in a project.
// expand a single todo, to view and edit it.
// delete a todo.
      
    // Local Web-storage
// keeps track off key-value pairs to rememeber projects and todo items.
Set up a function that saves Todo lists/projects (and todos) every time a new todo or list is created.
Add a function that loads any saved data when the app is first loaded.
--> 

