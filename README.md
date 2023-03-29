2 super simple scripts that do the same thing (run 20 queries to get the ID of an entry each), once with Prisma and once with Knex.

Setup:
1. Create a `.env` file with a `DATABASE_URL=...` that has an empty PostgreSQL database
2. `npm install` to install dependencies
3. Run `npx prisma db push` to migrate the database schema
4. Run `npx prisma db seed` to create the data in the table

And then run the two scripts:

```
npx dotenv node knex.js
node script.js
```

If you want to time them, add `time` (or your OS' equivalent) before the commands. Possible output:

```
$ time node script.js
{ favorite: { id: 1 } }
{ favorite: { id: 2 } }
{ favorite: { id: 3 } }
{ favorite: { id: 4 } }
{ favorite: { id: 5 } }
{ favorite: { id: 6 } }
{ favorite: { id: 7 } }
{ favorite: { id: 8 } }
{ favorite: { id: 9 } }
{ favorite: { id: 10 } }
{ favorite: { id: 11 } }
{ favorite: { id: 12 } }
{ favorite: { id: 13 } }
{ favorite: { id: 14 } }
{ favorite: { id: 15 } }
{ favorite: { id: 16 } }
{ favorite: { id: 17 } }
{ favorite: { id: 18 } }
{ favorite: { id: 19 } }
{ favorite: { id: 20 } }

real    0m2.545s
user    0m0.196s
sys     0m0.066s

$ time npx dotenv node knex.js
{ favorite: { id: 1 } }
{ favorite: { id: 2 } }
{ favorite: { id: 3 } }
{ favorite: { id: 4 } }
{ favorite: { id: 5 } }
{ favorite: { id: 6 } }
{ favorite: { id: 7 } }
{ favorite: { id: 8 } }
{ favorite: { id: 9 } }
{ favorite: { id: 10 } }
{ favorite: { id: 11 } }
{ favorite: { id: 12 } }
{ favorite: { id: 13 } }
{ favorite: { id: 14 } }
{ favorite: { id: 15 } }
{ favorite: { id: 16 } }
{ favorite: { id: 17 } }
{ favorite: { id: 18 } }
{ favorite: { id: 19 } }
{ favorite: { id: 20 } }

real    0m2.727s
user    0m0.648s
sys     0m0.108s
```