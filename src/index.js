import "./style.css";
const { formatDistance } = require("date-fns");

    const ToDoApp = () => {
        
        function toDoItem () {

            const MakeToDoItem = (title, desc, notes, priority, progress, dueDate) => {
                if (typeof progress !== "boolean") {
                    throw new Error("Progress parameter must be set in boolean")
                }
                const toDoObj = {};

                const toDoDates = GetToDoDates(dueDate)

                const renameToDoTitle =  renameTitle.bind(toDoObj);
                const rewriteToDoDesc = rewriteDesc.bind(toDoObj);
                const rewriteToDoNotes = rewriteNotes.bind(toDoObj);
                const setToDoPriority = setPriority.bind(toDoObj);
                const updateToDoProgress = updateProgress.bind(toDoObj);
                const updateToDoDates = updateDates.bind(toDoObj);

                return Object.assign(toDoObj, { 
                    title, 
                    desc, 
                    notes,
                    priority,
                    progress,
                    toDoDates,
                }, 
                { 
                    renameToDoTitle, 
                    rewriteToDoDesc, 
                    rewriteToDoNotes,
                    setToDoPriority,
                    updateToDoProgress,
                    updateToDoDates,
                })
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
            }

            function updateDates (newDueDate) {
                this.toDoDates = GetToDoDates(newDueDate);
            }

            function GetToDoDates (dueDate) {
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
    };