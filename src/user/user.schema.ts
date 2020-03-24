import { Schema } from 'dynamoose';
import { SchemaAttributes } from 'nestjs-dynamoose';

const schemaAttributes: SchemaAttributes = {
    id: {
        type: String,
        hashKey: true,
    },
    name: {
        type: String,
    }
}
export const UserSchema = new Schema(schemaAttributes);
