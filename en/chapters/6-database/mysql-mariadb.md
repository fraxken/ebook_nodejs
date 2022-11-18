# 💾 Database

## MySQL & MariaDB

MySQL and MariaDB are fairly popular databases that have so far been widely used in Node.js projects because a multitude of drivers have been created by developers like [mscdex](https://github.com/mscdex).

Nevertheless I notice over the years that the developers who were in charge of the development and maintenance of these drivers are no longer as active (see completely inactive) which leaves the different drivers with “less” support. I'm not even talking about the official MySQL driver which was certainly developed by an intern.

In short, implementations and major updates take several years to be implemented on the drivers (I am thinking in particular of all the new features with MySQL 8.. the new secure auth standard, etc.).

Drivers available and **active**:

- [node-mysql2](https://github.com/sidorares/node-mysql2)
- [MariaDB Node.js connector](https://github.com/mariadb-corporation/mariadb-connector-nodejs) (seems to be pretty well maintained so far)

> MariaDB is much less impacted by my observation. So if you have a choice don't take MySQL.

---

⬅️ [💾 Database: PostgreSQL](./postgres.md) |
➡️ [💾 Database: MongoDB](./mongodb.md)
