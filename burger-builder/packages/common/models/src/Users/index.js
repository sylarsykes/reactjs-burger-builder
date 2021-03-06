import { Model } from 'objectmodel';

export const USERS_BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';

/**
 * Firebase users model
 * 
 * Properties:
 *      -   email
 *      -   password
 *      -   returnSecureToken
 * 
 * @see Model
 * @see https://console.firebase.google.com/u/0/project/{project}/authentication/users
 */
export class UsersModel extends Model({
    email: String,
    password: String,
    returnSecureToken: Boolean
}) {

}

/**
 * Build users model
 * 
 * @param {object} properties
 * 
 * Json object with properties:
 *      -   email
 *      -   password
 *      -   returnSecureToken
 */
UsersModel.build = (properties) => new UsersModel(properties);