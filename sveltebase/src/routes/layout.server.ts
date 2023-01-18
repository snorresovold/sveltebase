export const load = ({ locals }: any) => {
	if (locals.user) {
		return {
			user: locals.user
		};
	}
	return {
		user: undefined
	};
};