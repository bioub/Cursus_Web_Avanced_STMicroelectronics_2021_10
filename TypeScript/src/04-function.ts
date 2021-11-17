function bonjour(name: string) {
  return `Hello ${name.toUpperCase()} !`;
}

// pas possible de ne pas passer un param obligatoire
// bonjour();


function bonjourDefault(name = '') {
  return `Hello ${name.toUpperCase()} !`;
}

bonjourDefault();

function bonjourReturn(): string {
  return '';
}

function bonjourVoid(): void {
  return;
}

function bonjourNever(): never {
  throw new Error('Test');
}
