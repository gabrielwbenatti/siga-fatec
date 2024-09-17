function getTeacherObj(): any | undefined {
  const userStorage = localStorage.getItem("user-info");

  if (userStorage) return JSON.parse(userStorage);

  return undefined;
}

function getClassObj(): any | undefined {
  const classStorage = localStorage.getItem("class-info");

  if (classStorage) {
    return JSON.parse(classStorage);
  }

  return undefined;
}

export { getTeacherObj, getClassObj };
