function plus() {
    document.getElementById('counter').value = Number(document.getElementById('counter').value) + 1;
    if (Number(document.getElementById('counter').value) < 0) { document.getElementById('counter').value = 1 }
}

function minus() {
    if (document.getElementById('counter').value !== '0') { document.getElementById('counter').value = Number(document.getElementById('counter').value) - 1 }
}


