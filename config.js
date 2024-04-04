export const sqlConfig = {
    server: '192.168.235.207', 
    port: 1433, 
    user: 'sa', 
    password: 'jmjar159', 
    database: 'avaliacao', 
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 5000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
}