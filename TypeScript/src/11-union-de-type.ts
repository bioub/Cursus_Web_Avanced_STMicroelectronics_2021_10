const values: (string | number | boolean)[] = [];

type scalar = string | number | boolean;

const values2: scalar[] = [];

values2.push('ABC');
values2.push(123);
values2.push(false);

// values2.push({})


for (const val of values2) {
  if (typeof val === 'string') {
    val.toUpperCase();
  }
}

const values3: (HTMLFormElement | HTMLInputElement)[] = [];

for (const val of values3) {
  if (val instanceof HTMLFormElement) {
    val.action
  }
}
