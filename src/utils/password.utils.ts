import { compareSync, hash } from 'bcryptjs';

export const hashPassword = (password: string) => {
  return hash(password, 12);
};

export const comparePassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return await compareSync(password, hash);
};
