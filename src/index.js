import "./style.css";

    const ToDoApp = () => {
        
        function toDoItem () {

            const MakeToDoItem = (title, desc, notes) => {
                const toDoObj = {};
                const renameToDoTitle =  renameTitle.bind(toDoObj);
                const rewriteToDoDesc = rewriteDesc.bind(toDoObj);
                const rewriteToDoNotes = rewriteNotes.bind(toDoObj);


                return Object.assign(toDoObj, { 
                    title, 
                    desc, 
                    notes, 
                }, 
                { 
                    renameToDoTitle, 
                    rewriteToDoDesc, 
                    rewriteToDoNotes, 
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

            return {
                MakeToDoItem,
            }
        };
    };