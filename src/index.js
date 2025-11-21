import "./style.css";

    const ToDoApp = () => {
        
        function toDoItem () {

            const MakeToDoItem = (title, desc, notes, priority) => {
                const toDoObj = {};
                const renameToDoTitle =  renameTitle.bind(toDoObj);
                const rewriteToDoDesc = rewriteDesc.bind(toDoObj);
                const rewriteToDoNotes = rewriteNotes.bind(toDoObj);
                const setToDoPriority = setPriority.bind(toDoObj);

                return Object.assign(toDoObj, { 
                    title, 
                    desc, 
                    notes,
                    priority,
                }, 
                { 
                    renameToDoTitle, 
                    rewriteToDoDesc, 
                    rewriteToDoNotes,
                    setToDoPriority,
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

            return {
                MakeToDoItem,
            }
        };
    };