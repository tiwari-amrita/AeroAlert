import { User, UserDocument } from './schemas/user.entity';
import { Model } from 'mongoose';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(chatId: number, username?: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
