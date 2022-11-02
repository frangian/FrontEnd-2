if(confirm('Queres cambiar al modo oscuro?')){
    let body = document.querySelector('body');
    body.className = 'dark';
    
    let h1 = document.querySelector('h1');
    h1.className = 'darkh1';
    
    let items = document.querySelectorAll('.item');
    console.log(items)
    items.forEach(element => {
        element.classList.add('darkitems');
    });
    
    let p = document.querySelectorAll('p');
    p.forEach(element => {
        element.className = 'darkp';
    });
}
