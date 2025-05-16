const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('____');

const li = document.createElement('li');
const deletebutton = document.createElement('button');

li.textContent = input.value;
button.textContent = 'X';
li.append(deletebutton);
list.append(li);

