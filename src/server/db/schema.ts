// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  varchar,
  integer,
  json
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `bdodle_${name}`);

export const nodes = createTable(
  "nodes",
  {
    id: serial("id").primaryKey(),
    nodeId: integer("nodeId"),
    name: varchar("name", { length: 256 }),
    type: varchar("type", { length: 256 }),
    connections: integer("connections").array(),
    coordinates: json("coordinates"),
    contribution: integer("contribution"),
    territory: varchar("territory", { length: 256 }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);
