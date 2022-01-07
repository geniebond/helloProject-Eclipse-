// dom_z.js


btns[1].addEventListener('click', addFnc);
    let inputs = document.getElementsByTagName('input');
    let fname = inputs[0].value;

    let li = document.createElement('li');
    let text = document.createTextNode(fname);
    li.appendChild(text);

    document.getElementsByTagName('ul')[0].appendChild(li);
    