function submitData() {
    let myData = document.createElement('div');
    let inProgress = document.createElement('div');
    let testing = document.createElement('div');
    let done = document.createElement('div');
    let taskName = document.getElementById('taskname').value;
    let description = document.getElementById('description').value;
    let assignee = document.getElementById('assignee').value;


    myData.innerHTML = 'task name is: ' + taskName + '; ' + 'description is: ' + description + '; ' +  'assignee is: ' + assignee;
    // myData.style = 'color: black; background-color: green;';
    myData.style.backgroundColor = 'green'; color = 'black';
    inProgress.innerHTML = 'task name is: ' + taskName + '; ' + 'description is: ' + description + '; ' +  'assignee is: ' + assignee;
    inProgress.style = 'color: black; background-color: yellow;';
    testing.innerHTML = 'task name is: ' + taskName + '; ' + 'description is: ' + description + '; ' +  'assignee is: ' + assignee;
    testing.style = 'color: black; background-color: orangered;';
    done.innerHTML = 'task name is: ' + taskName + '; ' + 'description is: ' + description + '; ' +  'assignee is: ' + assignee;
    done.style = 'color: black; background-color: orange;';


    if(document.getElementById('status').value === "To Do") {
        document.getElementById('toDo').appendChild(myData);
    
      } else if(document.getElementById('status').value === "In Progress") {
        document.getElementById('inProgress').appendChild(inProgress);
    
      } else if(document.getElementById('status').value === "Testing") {
        document.getElementById('testing').appendChild(testing);
    
      } else if(document.getElementById('status').value === "Done") {
        document.getElementById('Done').appendChild(done);
      } else{
        return 'error';
      };
}
