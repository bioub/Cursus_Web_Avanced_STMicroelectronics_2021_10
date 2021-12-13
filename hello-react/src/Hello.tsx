import React from 'react';

// <div class="Hello">
//    <span>Hello Romain</span>
// </div>

// function Hello() {
//   HTMLDivElement
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

interface HelloProps {
  name?: string;
}

function Hello(props: HelloProps) {
  const { name = 'Romain' } = props;
  return (
    <div className="Hello">
      <span>Hello {name}</span>
    </div>
  );
}

export default Hello;
