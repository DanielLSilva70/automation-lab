const { TestScheduler } = require('jest');
const {Builder, Capabilities, By } = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit();
})

test('cross of a movie', async () => {
    const input = await driver.findElement(By.xpath('//input'))

    const search = 'Cars'
    await input.sendKeys(search)
    const add = await driver.findElement(By.css('button'))
    await add.click()
    await driver.sleep(3000)

    const crossOff = await driver.findElement(By.css('span'))
    await crossOff.click()
    await driver.sleep(3000)

    const deleteBtn = driver.findElement(By.css('button#Cars'))
    await deleteBtn.click()
    await driver.sleep(3000)

    
    
    
   
   
   
   
   
    await driver.sleep(3000)
})


