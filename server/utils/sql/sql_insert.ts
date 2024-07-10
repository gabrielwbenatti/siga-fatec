import { columnsName } from "./sql_general.ts";

const sqlInsert = (table: string, columns: string[], values: []) => {
  const str =
    `insert into ${table.toUpperCase()} \n` +
    `${columnsName(columns)} \n` +
    "values \n" +
    `${_multipleInsertValues(columns, values)} `;

  return str;
};

const _multipleInsertValues = (columns: string[], values: []) => {
  let str = "";

  values.map((obj, idxObj) => {
    str += "(";

    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];

      if (!obj[`${column}`]) {
        str += `null`;
      } else {
        switch (typeof obj[`${column}`]) {
          case "string": {
            str += `"${obj[`${column}`]}"`;
            break;
          }
          default: {
            str += `${obj[`${column}`]}`;
            break;
          }
        }
      }

      if (i != columns.length - 1) {
        str += ", ";
      }
    }

    if (idxObj != values.length - 1) str += "), \n";
    else str += ")";
  });

  return str;
};

export { sqlInsert };
