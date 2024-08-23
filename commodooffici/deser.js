if (op && typeof op.id !== 'undefined') {
  ref.$ref = op.id;
} else {
  console.error('Invalid operation: op or op.id is undefined');
}
