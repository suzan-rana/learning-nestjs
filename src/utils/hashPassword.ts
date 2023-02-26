import * as bcrypt from 'bcrypt';

export const hashPassword = async (rawPassword: string) => {
  const genSalt = await bcrypt.genSalt();
  return await bcrypt.hash(rawPassword, genSalt);
};

export const isPasswordSame = async (
  password: string,
  hashedPassword: string,
) => {
  return await bcrypt.compare(password, hashedPassword);
};
