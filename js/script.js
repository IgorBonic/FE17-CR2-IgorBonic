let todo = JSON.parse(tasks);


function start(){
  
let id = 0;
  document.getElementById("container").innerHTML = "";
for (let todos of todo) {
    console.log(todo);
    todos.id = id;
    id ++;
    if(todos.importance >= 0 && todos.importance <= 1) {
        todos.class = "btn-success";
    } else if (todos.importance >= 2 && todos.importance <= 3){
            todos.class = "btn-warning";
     }else if (todos.importance >= 4 ) {
        todos.class = "btn-danger";
     };

    document.getElementById("container").innerHTML += `
    <div class="col-md-4">
    <div class="card"  style="width: 19rem">
    <img src="${todos.image}" class="text-bg-light p-3" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${todos.taskName}</h5>
      <p class="card-text">
        ${todos.description}
      </p>
      <p>Priority Level : <button id="btn${todos.id}" class="btn ${todos.class}">${todos.importance}</button></p>
      <a href="#" class="btn btn-primary" onClick="sort()">Sort</a>
    </div>
  </div>
  </div>`;
}
  for(let i = 0 ; i < todo.length ; i ++ ) {console.log(i);
    document.getElementById("btn"+ i).addEventListener("click",function() {
      
        todo[i].importance++;
        document.getElementById("btn"+ i).innerHTML = todo[i].importance;
  
        if(todo[i].importance >= 0 && todo[i].importance <= 1) {
            document.getElementById("btn"+ i).className  = "btn btn-success";
        } else if (todo[i].importance >= 2 && todo[i].importance <= 3){
            document.getElementById("btn"+ i).className  = "btn btn-warning";
         }else if (todo[i].importance >= 4 ) {
            document.getElementById("btn"+ i).className  = "btn btn-danger";
         };
     });
    }
}

start();

function sort(){
  todo = todo.sort(function(a,b)
  {return a.importance - b.importance});
  console.log(todo);
  start();
}