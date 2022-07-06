const app = new Vue ({
    el: '#app',
    data:{
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ],
        newItem:''
    },
    methods: {
        removeItem(index){
            this.todos.splice(index,1)
        },
        changeStatus(index){

            this.todos[index].done = !this.todos[index].done
        },
        addItem(userInput){
            console.log(userInput)
            this.todos.push(userInput).text
            newItem = ''
        }
    },

})