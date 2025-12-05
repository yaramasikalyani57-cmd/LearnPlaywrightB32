import { test, expect } from '@playwright/test';


test("order food ", async () => {
    let orderFood = new Promise((resolve, reject) => {

        let isAvailable = true;

        if (isAvailable) {

            resolve("food is delivered");
        } else {

            reject("food is not delvired");
        }
    })
    try {

        let result = await orderFood;
        console.log(result)

    }
    catch (error) {

        console.log(error)


    }



    // .then(result => console.log(result))
    // .catch(error => console.log(error))
})







//  promise (result=> console.log(result)).catch(error=>console.log