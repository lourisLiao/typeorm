import { BaseConnectionOptions } from "../../connection/BaseConnectionOptions";

export interface TestConnectionOptions extends BaseConnectionOptions{
    readonly type: 'test';

    readonly database: string;
}
