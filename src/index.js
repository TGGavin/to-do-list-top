import "./style.css";

    const ToDoApp = () => {
        
        function toDoItem () {

            const MakeToDoItem = (title, desc) => {
                const toDoObj = {};
                const renameToDoTitle =  renameTitle.bind(toDoObj);
                const rewriteToDoDesc = rewriteDesc.bind(toDoObj);

                return Object.assign(toDoObj, { title, desc, }, { renameToDoTitle, rewriteToDoDesc })
            };

            function renameTitle (newTitle) {
                this.title = newTitle;
            };

            function rewriteDesc (newDesc) {
                this.desc = newDesc;
            };

            return {
                MakeToDoItem,
            }
        };
    };