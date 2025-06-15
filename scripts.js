function onStart(){
    registerSelectionEvent();
}

function registerSelectionEvent() {
    document.querySelectorAll('.value').forEach(elm => {
        elm.addEventListener('mouseup', (e) => {
            const selection = window.getSelection();
            const text = selection ? selection.toString().trim() : '';

            if (text) {
                console.log('selected text is: ' + text);
                openEditor(text);
            }
                
        });
    });
}

function toggle(elmSel) {

    const elm = document.querySelector(elmSel);

    console.dir(elm);

    if (elm.classList.contains('active')){
        elm.classList.remove('active');
    } else {
        elm.classList.add('active');
    }
}

function selectChapter(elm, sel) {
    const elms = document.querySelectorAll(sel);

    elms.forEach(e => {
        if (e == elm){
            e.classList.add('active')
        } else if (e.classList.contains('active')) {
            e.classList.remove('active');
        } 
        
    });
}


function scrollToElement(anchorName) {
    const anchor = document.getElementsByName(anchorName)[0];
    if (anchor) {
        anchor.scrollIntoView({
            behavior: "smooth", 
            block: "nearest"
        });
    }

    setTimeout(() => {
        const chElm = document.querySelector(`#${anchorName}` );
        selectChapter(chElm, '.stage .item')
    }, 100);
}

function openEditor(val) {
    const editElm = document.querySelector('#editor');
    if (!editElm.classList.contains('active')) {
        editElm.classList.add('active');
    }

    if (val)    {
        const input = document.querySelector('#promptInput');
        input.value = val;
    }
}


// füge einen on body load start methode hinzu, um die Kapitel zu registrieren
document.addEventListener('DOMContentLoaded',  () => {
    onStart();
});

