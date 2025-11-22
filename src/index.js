import "./style.css";
const { formatDistance } = require("date-fns");

    const ToDoApp = () => {
        
        const toDoLists = [];
        
        function ToDoItemHandler () {

            const MakeToDoItem = (title, desc, notes, priority, dueDate) => {
                const toDoItem = {
                    title,
                    desc,
                    notes,
                    priority,
                    progress: false,
                    dates: MakeToDoDates(dueDate),
                };

                const getTitle = () => toDoItem.title;

                const getDesc = () => toDoItem.desc;

                const getNotes = () => toDoItem.notes;

                const getPriority = () => toDoItem.priority;

                const getProgress = () => toDoItem.progress;

                const getDates = () => toDoItem.dates;

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
                    getDates, updateToDoDates,
                }
            };

            function MakeToDoDates (dueDate) {
                const itemTOC = new Date();
                const itemDueDate = new Date(dueDate);
                const timeUntilDue = formatDistance(itemDueDate, itemTOC);
                return {
                    itemTOC,
                    itemDueDate,
                    timeUntilDue,
                }
                
                
            };

            return {
                MakeToDoItem,
            }
            
        };

        function ListHandler () {
            
            function MakeList (title, desc) {
                const list = {
                    title,
                    desc,
                    toDos: [],
                }

                const getTitle = () => list.title;

                const getDesc = () => list.desc;

                const getToDos = () => list.toDos;

                const renameList = renameTitle.bind(list);
                const reWriteListDesc = rewriteDesc.bind(list);
                
                return {
                    getTitle, renameList,
                    getDesc, reWriteListDesc,
                    getToDos,
                }
            }
            return { MakeList }
        }

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
        }

        function updateDates (newDueDate) {
            this.dates = MakeToDoDates(newDueDate);
        }

    };