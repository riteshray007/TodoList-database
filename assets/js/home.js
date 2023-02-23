console.log("home.js in action ");

// var lock = 

document.addEventListener('click' , eventhandeler )
//  var selected_list = [];

function eventhandeler(e){
    let t = e.target;
    // console.log(t);
    if(t.classList.contains('delete')){
        console.log(t);
        window.location.href = '/delete-task'
    }
    else if(t.classList.contains('fa-lock')){
        t.classList.remove('fa-lock')
        t.classList.add('fa-lock-open')
        t = t.parentNode.parentNode.querySelector('.tasklabel');
        t.setAttribute('contenteditable' , 'true');
    }
    else if(t.classList.contains('fa-lock-open') ){

        let ID = t.getAttribute('iddata')
        
        
        
        t.classList.remove('fa-lock-open')
        t.classList.add('fa-lock')
        t = t.parentNode.parentNode.querySelector('.tasklabel');
        t.setAttribute('contenteditable' , 'false');
        let TASK = t.innerText;
        window.location.href= `/update-task/?id=${ID}&task=${TASK}`
    }
    
    else if(t.id == 'deletecheck'){
        let ID = t.getAttribute('iddata')
        // console.log('toggled');
        // selected_list.push(t.getAttribute('iddata'))
        // console.log(selected_list);
        window.location.href = `/checked-task/?id=${ID}`;
    }
    

}

