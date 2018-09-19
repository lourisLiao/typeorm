import {AbstractSqliteDriver} from "../sqlite-abstract/AbstractSqliteDriver";
import { TestConnectionOptions } from "./TestConnectionOptions";
import { Connection } from "../../connection/Connection"
import { QueryRunner } from '../../query-runner/QueryRunner'

export declare class TestDriver extends AbstractSqliteDriver {
    options: TestConnectionOptions;
    constructor(connection: Connection);
    /**
     * Closes connection with database.
     */
    disconnect(): Promise<void>;
    /**
     * Creates connection with the database.
     */
    protected createDatabaseConnection(): Promise<void>;
    /**
     * Creates a query runner used to execute database queries.
     */
    createQueryRunner(mode?: "master" | "slave"): QueryRunner;
    /**
     * If driver dependency is not given explicitly, then try to load it via "require".
     */
    protected loadDependencies(): void;
}

