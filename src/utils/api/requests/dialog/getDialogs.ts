import api from "../instance"
import { authHeader } from "../../helpers/authHeader";

export const getDialogs = async () => {
    const { data } = await api.get<Response<Dialog[]>>("/dialog/getMyDialogs", {
        headers: authHeader()
    });

    return data;
}
// токен димы
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTdmMDQ3ZTc0MjRlYTBiMTU0YzQ4NiIsImlhdCI6MTY3MTk1MDQxMywiZXhwIjoxNjcyMDM2ODEzfQ.sR_lSu2tw8EEm5Slj4BJUcQt8CDJA-m9reeZkeIu32I

// токен вани
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWNlYWU3MDU4NTJkZDZiN2QwZGVlMCIsImlhdCI6MTY3MTk0NzI1MiwiZXhwIjoxNjcyMDMzNjUyfQ.t8OPXBH2ZwsfUC8nOSwFEzyCDjI2CVAasZB9Ss5EyXw

// токен андрея
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWNlYjgwMDU4NTJkZDZiN2QwZGYwMCIsImlhdCI6MTY3MTk0NzE5NiwiZXhwIjoxNjcyMDMzNTk2fQ.92_XyncUuvN2UvqD4MJPrmOMSu4dnnX8f5J7wKENREw