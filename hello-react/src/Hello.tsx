import React from 'react';

// <div class="Hello">
//    <span>Hello Romain</span>
// </div>

// function Hello() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';

//   const spanEl = document.createElement('span');
//   spanEl.innerText = 'Hello Romain';

//   divEl.appendChild(spanEl);

//   return divEl;
// }

// function Hello() {
//   return React.createElement(
//     'div',
//     { className: 'Hello' },
//     React.createElement('span', {}, 'Hello Romain'),
//   );
// }

function Hello() {
  return (
    <div className="Hello">
      <span>Hello Romain</span>
    </div>
  );
}

export default Hello;
