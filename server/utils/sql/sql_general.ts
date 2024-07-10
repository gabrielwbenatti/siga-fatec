const columnsName = (columns: string[]) => {
  let str = "(";
  const size = columns.length;

  for (let i = 0; i < columns.length; i++) {
    if (i === size - 1) str += `${columns[i]}`;
    else str += `${columns[i]}, `;
  }

  str += ")";
  return str.toUpperCase();
};

export { columnsName };
