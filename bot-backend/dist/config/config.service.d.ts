import { ConfigService } from '@nestjs/config';
export declare class AppConfigService {
    private configService;
    constructor(configService: ConfigService);
    getMongoURI(): string;
    getTelegramBotToken(): string;
}
