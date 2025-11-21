import "./style.css";

    const ToDoApp = () => {
        
        function toDoItem () {

            const MakeToDoItem = (title) => {
                const toDoObj = {};
                const renameToDoTitle =  renameTitle.bind(toDoObj);
                
                return Object.assign(toDoObj, { title, }, { renameToDoTitle })
            };

            function renameTitle (newTitle) {
                this.title = newTitle
            };

            return {
                MakeToDoItem,
            }
        };
    };