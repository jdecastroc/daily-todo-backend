import {docClient} from './client';

export const getUser = (id:Number) => {
  return new Promise((resolve, reject) => {
    const table = "my-diary-users-dev";
    const params = {
        TableName: table,
        Key:{
            "id": id,
        }
    };
  
    docClient.get(params, (err:any, data:any) => {
      if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        reject(err);
      } else {
        resolve(data.Item);
      }
    })
  })
  
}