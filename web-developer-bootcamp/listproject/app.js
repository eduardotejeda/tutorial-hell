let input = prompt("what would you like to do?");
console.log(input);
const todos = ["Collect chicken eggs", "Study"];
while (input !== "quit" && input !== "q") {
    if (input === 'list'){
        console.log("**************")
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**************")
    } else if (input === 'new') {
        const newTodo = prompt("What is the new to do?");
        todos.push(newTodo);
        console.log(`${newTodo} add to list`);
    } else if (input === 'delete') {        
          const index = parseInt(prompt('Enter index to delete:'));
          if (!Number.isNaN(index)) {
          const deleted = todos.splice(index,1)
          console.log(`ok, deleted ${deleted[0]}` )
          } else {
            console.log('Unknow index')
          } 
    }
   input = prompt("what would you like to do2?");
   console.log(input)
}

console.log("OK QUIT THE APP!")