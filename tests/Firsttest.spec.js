import{expect, test} from '@playwright/test';
import console from 'node:console';

test('firsttest' , async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('textbox', { name: 'Enter Name' }).fill('Suneina');
    await page.getByRole('radio', { name: 'Male', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Monday' }).setChecked(true);
    await page.getByLabel('Country:').selectOption('Canada');
    await page.locator('#colors').selectOption(['red','blue']);
    await page.getByLabel('Sorted List:').selectOption(['dog','fox','elephant']);
    await page.pause();
    console.log("git actions testing");
    await page.locator('#datepicker').click();

    const targetMonth = "December";
    const targetYear = "2027";
    const targetDay = "10";
    let calendarTitle = await page.locator('.ui-datepicker-title').textContent();
    while (!calendarTitle.includes(targetMonth) || !calendarTitle.includes(targetYear)) {
      await page.locator('.ui-datepicker-next').click();
      calendarTitle = await page.locator('.ui-datepicker-title').textContent();
  }

 await page.locator('.ui-datepicker-calendar a', { hasText: targetDay }).click();


    const [newp] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button', { name: 'New Tab' }).click()

    ]);

    await newp.waitForLoadState();
  const title=newp.title();
  console.log(title)

    

}
)