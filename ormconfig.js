module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : null,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsRun: false,
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'migrations',
  },
  // Timezone configured on the MySQL server.
  // This is used to typecast server date/time values to JavaScript Date object and vice versa.
  timezone: 'Z',
  synchronize: false,
  // debug: process.env.NODE_ENV === 'development',
};

/**
 * notification user: 3 event {"loanRequestId":"1","userId":3,"type":"company_repayment_dueIn7day","id":"18","createdAt":"2022-06-30T18:45:21.717Z","updatedAt":"2022-06-30T18:45:21.717Z"}
 */
