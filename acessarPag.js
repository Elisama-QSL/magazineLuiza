const {Builder, By, Button} = require('selenium-webdriver');
const assert = require('assert');

(async function firstScript() {
  try {

    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.magazineluiza.com.br/');

    await driver.getTitle();

    await driver.manage().setTimeouts({implicit: 10000})

    let searchBox = await driver.findElement(By.id('input-search'));
    let searchButton = await driver.findElement(By.className('sc-dkPtRN kkxyKb'));

    await searchBox.sendKeys('Televisão');
    await searchButton.click();

    let value = await searchBox.getAttribute("value");
    assert.deepStrictEqual(value, "Televisão")

   


  

    let resultado = await driver.findElement(By.className('sc-brSvTw TAGhX'));
    let selecionar = await driver.findElement(By.xpath('//*[@id="__next"]/div/main/section[3]/div[1]/div[1]/div[2]/ul/li[2]/div')).click();
    let limparPesquisa =  await driver.findElement(By.className('sc-dlVxhl jiCAhC sc-bmYEmL mrYNA')).click();
    let selecionatTV =  await driver.findElement(By.id('image')).click();



    for(let e of resultado) {
      console.log(await e.getText());
    }

  

    await driver.quit();
  } catch (error) {
    console.log(error)
  }
})();

