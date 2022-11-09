const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);   //вызывается эл.перетаскивания находится над placeholder
    placeholder.addEventListener('dragenter', dragenter);  //заходим на тереторию placeholder
    placeholder.addEventListener('dragleave', dragleave);  //перетащили но вышли с поля placeholder
    placeholder.addEventListener('drop', dragdrop);       //отпустили эл.
}

function dragstart(event){
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
   
}

function dragend(event){;
    event.target.className = 'item'  //event.target.classList.remove('hold', 'hide');                        
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event){
    event.target.classList.add('hovered');
}

function dragleave(event){
    event.target.classList.remove('hovered');
}

function dragdrop(event){
    event.target.classList.remove('hovered');
    event.target.append(item);
}
