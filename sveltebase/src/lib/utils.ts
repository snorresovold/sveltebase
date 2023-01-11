const { randomBytes } = await import('node:crypto');

export const serializeNonPOJOs = (obj: any) => {
	return structuredClone(obj);
};

export const generateUsername = (name: any) => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};