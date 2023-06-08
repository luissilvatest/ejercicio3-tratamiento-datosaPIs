const excerciseDataPayload = require("../data/payloads/exercise3Data.json");
const excerciseData = require("../data/config/exercise3Data.json");
const API_PETSTORE = require('../api-requests/exercise3Request')
const Pet = require('../helpers/PetClass');
const helper = require('../helpers/helpers');


describe('Exercise 3 - Inditex', () => {
    let resp,arrayData,objExcerciseData;
    test('Create a user', async () => {
        console.log("<< Request -> Create a user >>")
        objExcerciseData = JSON.stringify(excerciseDataPayload.create);
        resp= await API_PETSTORE.createUser(objExcerciseData)
        expect(resp.data.code).toBe(200);
    });

    test('Retrieve previously created user', async () => {
        console.log("<< Request -> Retrieve previously created user >>")
        resp= await API_PETSTORE.getUser(excerciseData.username)
        expect(resp.status).toBe(200);
        excerciseData['id']=resp.data.id
        expect(resp.data).toStrictEqual(excerciseData);
    });

    test('Endpoint /pet/findByStatus and listing the names of the pets that have been sold using a function.', async () => {
        console.log("<< Request -> listing the names of the pets that have been sold using a function >>")
        arrayData=[]
        resp= await API_PETSTORE.getFindByStatus()
        expect(resp.status).toBe(200);
        arrayData = helper.createListNamePetsSold(resp.data)
        console.log(arrayData)
    });

    test('Format in Pet Class and counting pet name', async () => {
        console.log("<< Request -> Format in Pet Class and counting pet name >>")
        arrayData=[];
        resp= await API_PETSTORE.getFindByStatus()
        expect(resp.status).toBe(200);
        resp.data.forEach(data=> arrayData.push(new Pet(data.id,data.name)))
        helper.countSameNamePets(arrayData)
    });
});