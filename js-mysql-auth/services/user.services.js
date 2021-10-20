const pool = require('../config/database')
module.exports ={
    create: (data, callBack) => {
        pool.query(
          `insert into registration(first_name, last_name, email, password, phone) 
                    values(?,?,?,?,?)`,
          [
            data.first_name,
            data.last_name,
            data.email,
            data.password,
            data.phone
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    getUserService: callBack => {
        pool.query(
          `select id,first_name, last_name, email, phone from registration`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
    getUserByIDService: (id,callBack) => {
        pool.query(
            `select id,first_name, last_name, email, phone from registration where id = ?`,
            [id],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results[0]);
            }
          );
    },
    updateUserService:(data,callBack) => {
        pool.query(
            `update registration set first_name=?, last_name=?, email=?, password=?, phone=? where id = ?`,
            [
              data.first_name,
              data.last_name,
              data.email,
              data.password,
              data.phone,
              data.id
            ],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results[0]);
            }
          );
    },
    deleteUserService: (data, callBack) => {
        pool.query(
          `delete from registration where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
        `select * from registration where email = ?`,
        [email],
        (error, results, fields) => {
            if (error) {
            callBack(error);
            }
            return callBack(null, results[0]);
        }
        );
    }
}