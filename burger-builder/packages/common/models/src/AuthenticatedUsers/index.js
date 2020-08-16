import { Model } from 'objectmodel';
import { morphism } from 'morphism';

/**
 * Morphism Schema model for map firebase authenticated user to authenticated users model
 */
export const AuthenticatedUsersSchemaModel = {
    userUID: 'localId',
    displayName: 'displayName',
    email: 'email',
    token: 'idToken',
    refreshToken: 'refreshToken',
    expiresIn: 'expiresIn',
    registered: 'registered'
}

/**
 * Firebase authenticated users model
 * 
 * Properties
 *      -   userUID
 *      -   displayName
 *      -   email
 *      -   token
 *      -   refreshToken
 *      -   expiresIn
 *      -   registered
 * 
 * @see Model
 * @see https://console.firebase.google.com/u/0/project/{project}/authentication/users
 */
export class AuthenticatedUsersModel extends Model({
    userUID: String,
    displayName: [String],
    email: String,
    token: String,
    refreshToken: String,
    expiresIn: String,
    registered: Boolean
}) {
    
    /**
     * Check if user is authenticated
     */
    isAuthenticated() {
        return (this.token !== null && this.registered);
    }
}

/**
 * Build users model
 * 
 * @param {object} properties
 *      Json object with properties:
 *          -   userUID
 *          -   displayName
 *          -   email
 *          -   token
 *          -   refreshToken
 *          -   expiresIn
 *          -   registered
 */
AuthenticatedUsersModel.build = (properties) => new AuthenticatedUsersModel(properties);

/**
 * Build users model from schema model
 * 
 * @param {object} responseProperties 
 *      Json object with properties:
 *          -   localId
 *          -   displayName
 *          -   email
 *          -   idToken
 *          -   refreshToken
 *          -   expiresIn
 *          -   registered
 * 
 * @see AuthenticatedUsersSchemaModel
 */
AuthenticatedUsersModel.mapperBuild = (responseProperties) => 
    AuthenticatedUsersModel.build(morphism(AuthenticatedUsersSchemaModel, responseProperties));