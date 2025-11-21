import "./style.css";

    const ToDoApp = () => {
        
        function toDoItem () {

            const MakeToDoItem = (title, desc, notes, priority, progress) => {
                if (typeof progress !== "boolean") {
                    throw new Error("Progress parameter must be set in boolean")
                }

                const toDoObj = {};
                const renameToDoTitle =  renameTitle.bind(toDoObj);
                const rewriteToDoDesc = rewriteDesc.bind(toDoObj);
                const rewriteToDoNotes = rewriteNotes.bind(toDoObj);
                const setToDoPriority = setPriority.bind(toDoObj);
                const updateToDoProgress = updateProgress.bind(toDoObj);

                return Object.assign(toDoObj, { 
                    title, 
                    desc, 
                    notes,
                    priority,
                    progress
                }, 
                { 
                    renameToDoTitle, 
                    rewriteToDoDesc, 
                    rewriteToDoNotes,
                    setToDoPriority,
                    updateToDoProgress,
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

            return {
                MakeToDoItem,
            }
            
        };
    };