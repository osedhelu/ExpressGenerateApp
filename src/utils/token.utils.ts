import * as jwt from 'jsonwebtoken';
const { SEED_TOKEN }: any = process.env || "ScodicsUdyasOcOjIbErjIcNawshichMadOpcupmiact";
export const GenerateToken = (data: any) => {
	return jwt.sign(
		{
			data,
		},
		SEED_TOKEN || "ScodicsUdyasOcOjIbErjIcNawshichMadOpcupmiact",
		{
			expiresIn: 10080,
		}
	);
};
