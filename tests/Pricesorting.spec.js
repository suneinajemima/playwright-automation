import{expect, test} from '@playwright/test';


test('firsttest' , async({page,context})=>{

    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    //await page.locator('[data-test="product-sort-container"]').selectOption('Price (low to high)');
    //await page.pause();

    const pageelements =page.locator('.inventory_item');
    const count=await pageelements.count();
    let beforesortarray =[];
    for (let i=0;i< count; i++)
    {
        const prodname = await pageelements.nth(i).locator('.inventory_item_name').textContent();
        const prodprice = await pageelements.nth(i).locator('.inventory_item_price').textContent();
        const prodpricevalue = Number(prodprice.replace('$',''));
        beforesortarray.push({prodname,prodpricevalue})
    }


    const aftersortarray =[...beforesortarray].sort((a,b)=> a.prodpricevalue - b.prodpricevalue);
    console.log(aftersortarray);
    
    let check=true;
    for(let i=0;i<count;i++){
        if(beforesortarray[i]!=aftersortarray[i])
        {
            check=false;
        }
    }
    if(check)
    {
        console.log("Elements are sorted from low to high price")
    }
    else
        {
        console.log("Elements are not sorted from low to high price")
    }

}
)