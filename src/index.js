import "./style.css";

    const ToDoApp = () => {
        
        function MakeToDoItem (title) {
            const titleWrapper = {
                title,
                renameTitle: function (newTitle) {
                    this.title = newTitle
                }
            }
            return {titleWrapper}
        }
    }
