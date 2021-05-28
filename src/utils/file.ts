import fs from 'fs'

export const deleteFilte = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  }catch {
    return;
  }
  await fs.promises.unlink(filename)
}