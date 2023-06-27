import bcrypt from 'bcrypt';

const SALTROUNDS = 10;

export const encrypt = (password) => {
    if (!password) {
        return null;
    }

    return bcrypt.hashSync(password, SALTROUNDS);
};

export const compare = (password, encryptedPassword) => {
    if (!password || !encryptedPassword) {
        return false;
    }

    return bcrypt.compareSync(password, encryptedPassword);
};