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
    //  appended text in P (new item)
    newItem.appendChild(text);

    mainBox.appendChild(newItem);

    const myBtn = removeBtn();
    mainBox.appendChild(myBtn);
    // appended button in the P
    // newItem.appendChild(myBtn);

    // appendBox.appendChild(newItem);
    appendBox.appendChild(mainBox);

    myBtn.addEventListener('click', function (child) {
      mainBox.remove();
    });
  }

  val.value = '';
  console.log(appendBox.childNodes);
}

var input = document.getElementById('myInput');

val.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    append();
  }
});

// function removeChild() {
//   appendBox.removeChild();
// }

// get parent ,
//  remove child from parent HOW?
// add a button on each child
// make a function that removes child
// function is called when the button is clicked on the child
