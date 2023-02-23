console.log("home.js in action ");

// var lock = 

document.addEventListener('click' , eventhandeler )
 var selected_list = [];

function eventhandeler(e){
    let t = e.target;
    // console.log(t);
    if(t.classList.contains('fa-lock')){
        t.classList.remove('fa-lock')
        t.classList.add('fa-lock-open')
        t = t.parentNode.parentNode.querySelector('.tasklabel');
        t.setAttribute('contenteditable' , 'true');
    }
    else if(t.classList.contains('fa-lock-open') ){
        t.classList.remove('fa-lock-open')
        t.classList.add('fa-lock')
        t = t.parentNode.parentNode.querySelector('.tasklabel');
        t.setAttribute('contenteditable' , 'false');
    }
    if(t.id == 'deletecheck'){
        selected_list.push(t.getAttribute('iddata'))
        console.log(selected_list);
    }

}


module.exports.selected_list = selected_list;