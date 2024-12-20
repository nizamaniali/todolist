const appendBox = document.getElementById('append-box');
const val = document.getElementById('input');

function removeBtn() {
  const btn = document.createElement('div');
  btn.classList.add('btnStyle');

  const btnText = document.createTextNode('Remove');
  btn.appendChild(btnText);
  return btn;
}

function append() {
  const mainBox = document.createElement('div');
  mainBox.classList.add('div-style');

  let myVal = val.value;
  const newItem = document.createElement('p');

  const text = document.createTextNode(myVal);

  if (val.value != '') {
    newItem.appendChild(text);

    mainBox.appendChild(newItem);

    const myBtn = removeBtn();
    mainBox.appendChild(myBtn);

    appendBox.appendChild(mainBox);

    myBtn.addEventListener('click', function (child) {
      mainBox.remove();
    });
  }

  val.value = '';
}

var input = document.getElementById('myInput');

val.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    append();
  }
});

function clearAll() {
  while (appendBox.firstChild) {
    appendBox.removeChild(appendBox.firstChild);
  }
}

// get parent ,
//  remove child from parent HOW?
// add a button on each child
// make a function that removes child
// function is called when the button is clicked on the child
