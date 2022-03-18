document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#push");
      
        btn.click();
        
    }
  })

document.querySelector('#push').onclick = function(){
    if(document.querySelector("#newtask input") .value.length == 0){
        alert("Não se esqueça de preencher uma tarefa.")
    }
    ///////////////////////////////////////////////////////////////////
    else{
        document.querySelector('#tasks').innerHTML
        += `
            <div class="task">
                <p id="taskname">
                    ${document.querySelector
                        ('#newtask input').value}
                </p>
                <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length;  i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks =  document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');                
            }
        }  

        document.querySelector("#newtask input").value = "";
    }
}