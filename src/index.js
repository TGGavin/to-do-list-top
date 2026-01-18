import "./style.css";
import WebStorage from "./webstorage.js";

const dateFuncs = require("date-fns");
const { formatDistance, isAfter } = dateFuncs

    const ToDoApp = () => {

        const ToDoLogic = () => {
            
            const toDoLists = [];

            const getLists = () => toDoLists;

            function ToDoItemHandler () {
                
                const MakeToDoItem = (title, desc, notes, priority, dueDate) => {
                    const dateMade = new Date();
                    const toDoItem = {
                        title,
                        desc,
                        notes,
                        priority,
                        progress: false,
                        dateMade,
                        dueDate: MakeDueDates(dueDate, dateMade),
                    };
                    
                    const getTitle = () => toDoItem.title;
                    
                    const getDesc = () => toDoItem.desc;
                    
                    const getNotes = () => toDoItem.notes;
                    
                    const getPriority = () => toDoItem.priority;
                    
                    const getProgress = () => toDoItem.progress;
                    
                    const getDueDate = () => toDoItem.dueDate;
                    
                    const renameToDoTitle =  renameTitle.bind(toDoItem);
                    const rewriteToDoDesc = rewriteDesc.bind(toDoItem);
                    const rewriteToDoNotes = rewriteNotes.bind(toDoItem);
                    const setToDoPriority = setPriority.bind(toDoItem);
                    const updateToDoProgress = updateProgress.bind(toDoItem);
                    const updateToDoDates = updateDates.bind(toDoItem);
                    
                    return  {
                        getTitle, renameToDoTitle,
                        getDesc, rewriteToDoDesc, 
                        getNotes, rewriteToDoNotes,
                        getPriority, setToDoPriority,
                        getProgress, updateToDoProgress,
                        getDueDate, updateToDoDates,
                    };
                };
                
                function MakeDueDates (dueDate, dateMade) {
                    if (isDate(dueDate)) {
                        const itemDueDate = new Date(dueDate);
                        const timeUntilDue = formatDistance(itemDueDate, dateMade);
                        
                        if (!isAfter(dueDate, dateMade)) {
                            throw Error(`dueDate:${dueDate} must be after to do item creation date:${dateMade}`);
                        };
            
                        return {
                            itemDueDate,
                            timeUntilDue,
                        };
                    }   else {
                        return "No due date";
                    };
                };
                
                return {
                    MakeToDoItem,
                };
                
            };
            
            function ListHandler () {
                
                function MakeList (title, desc) {
                    const list = {
                        title,
                        desc,
                        toDos: [],
                    };
                    
                    const getTitle = () => list.title;
                    
                    const getDesc = () => list.desc;
                    
                    const getToDos = () => list.toDos;
                    
                    const renameList = renameTitle.bind(list);
                    const reWriteListDesc = rewriteDesc.bind(list);
                    const addToDo = addItem.bind(list);
                    
                    
                    return {
                        getTitle, renameList,
                        getDesc, reWriteListDesc,
                        getToDos, addToDo,
                    };
                };
            
                function addItem (item) {
                    this.toDos.push(item);
                };
            
            return { MakeList };
            };
        
            function renameTitle (newTitle) {
                this.title = newTitle;
            };
            
            function rewriteDesc (newDesc) {
                this.desc = newDesc;
            };
            
            function rewriteNotes (newNotes) {
                this.notes = newNotes;
            };
            
            function setPriority (newPriority) {
                this.priority = newPriority;
            };
            
            function updateProgress () {
                this.progress = !this.progress
            };
            
            function updateDates (newDueDate) {
                this.dates = MakeToDoDates(newDueDate);
            };
            
            function isDate(string) {
                let dateExp = /^\d{4}-\d{1,2}-\d{1,2}$/;
                
                return dateExp.test(string);
            };
            
            const itemHandler = ToDoItemHandler();
            const listHandler = ListHandler();

            function AddList (title, desc) {
                toDoLists.push(listHandler.MakeList(title, desc))
            };
            
            function AddItemToList (list, title, desc, notes, priority, dueDate) {
                toDoLists[list].addToDo(itemHandler.MakeToDoItem(title, desc, notes, priority, dueDate))
            };

            return {
                AddList,
                AddItemToList,
                getLists,
            };
        };

    function DOMHandler() {
        const body = document.querySelector("body")

        function toDoUI() {
            const fragment = new DocumentFragment();
            const elements = [];

            const appContainer = document.createElement("div");
            fragment.append(appContainer);
            
            for (const element of elements) {
                fragment.append(element);
            };

            body.append(fragment);
        };
        return {
            toDoUI
        }
    };

    const appHandler = () => {
        // list initalisation
        const logic = ToDoLogic();
        const UI = DOMHandler();
        UI.toDoUI();
        
        logic.AddList("Daily Chores", "Tasks to be done every day");
        logic.AddItemToList(0, "Dishes", "do them", "none", 1, "2026-12-12");

    }

    appHandler();

    };

ToDoApp();