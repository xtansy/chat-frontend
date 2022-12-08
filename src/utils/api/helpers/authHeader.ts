
interface authHeaderResult {
    'x-access-token': string;
}

export const authHeader: authHeaderResult | {} = () => {
    const token = localStorage.getItem('token');

    if (token) {
        return { 'x-access-token': token };
    } else {
        return {};
    }
}