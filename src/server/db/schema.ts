// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  varchar,
  integer,
  json,
  boolean
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
    nodeOfDay: boolean("nodeOfDay"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const leaderboard = createTable(
  "leaderboard",
  {
    id: serial("id").primaryKey(),
    profilePicture: varchar("profilePicture", { length: 256 }),
    discordUsername: varchar("discordUsername", { length: 256 }),
    score: integer("score"),
  },
  (example) => ({
    nameIndex: index("name1_idx").on(example.profilePicture),
  })
);
