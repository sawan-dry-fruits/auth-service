import { compareSync, hash } from 'bcryptjs';

export const hashPassword = (password: string) => {
  return hash(password, 12);
};

export const comparePassword = async (password: string, hash: string) => {
  await compareSync(password, hash);
};
