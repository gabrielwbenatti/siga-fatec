function extractFileExtension(file: string) {
  return file.substring(file.lastIndexOf(".") + 1, file.length);
}

export { extractFileExtension };
