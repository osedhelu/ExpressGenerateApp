import { compareSync, hashSync } from 'bcryptjs';

export const validatePassword = async (pass1: any, hash: any): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (compareSync(hash, pass1)) {
      resolve(true);
    } else {
      reject('Error al iniciar Seccion --- Password');
    }
  });
};

export const GeneratePassword = (pass1: any, pass2: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (pass1 === pass2) {
      resolve(hashSync(pass1, 10));
    } else {
      reject({
        ok: false,
        message: 'El password es incorrecto'
      });
    }
  });
};
