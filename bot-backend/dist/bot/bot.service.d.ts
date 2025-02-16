import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.entity';
export declare class BotService {
    private readonly userModel;
    private bot;
    constructor(userModel: Model<UserDocument>);
}
