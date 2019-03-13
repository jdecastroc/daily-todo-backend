import {docClient} from './client';
import { environment } from '../../src/environment';

export const getDay = (id:Number, date: string) => {
  return new Promise((resolve, reject) => {
    const table = environment.dynamodb.calendarTable;
    const params = {
        TableName: table,
        Key:{
            "userId": id,
            "date": date,
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

export const saveDay = (userId:Number, data: any) => {
  return new Promise((resolve, reject) => {
    const table = environment.dynamodb.calendarTable;
    const dayInformation = {...data};
    console.log('INCOMING', dayInformation, userId);
    const params = {
        TableName: table,
        Item:{
          "date": dayInformation.date,
          "in": dayInformation.in,
          "gratitudeList": dayInformation.gratitudeList,
          "meaningfulProgress": dayInformation.meaningfulProgress,
          "improvedRelationships": dayInformation.improvedRelationships,
          "goalsCleared": dayInformation.goalsCleared,
          "userId": userId,
          "out": dayInformation.out,
          "objective": dayInformation.objective,
          "happinessLevel": dayInformation.happinessLevel,
          "oportunities": dayInformation.oportunities,
          "foundEnthusiasm": dayInformation.foundEnthusiasm,
          "overwork": dayInformation.overwork
        }
    };
    docClient.put(params, function(err: any, data: any) {
      if (err) {
          console.error("Unable to saveDay. Error JSON:", JSON.stringify(err, null, 2));
          reject(err);
      } else {
          console.log("PutItem succeeded:", dayInformation);
          resolve(data.Item);
      }
    });
  })
}