module.exports = {
    'Demo Login' :''+ function (browser) {
      browser
        .url('http://localhost:8888/login')
        .pause(2000)
        .waitForElementVisible("input[name='user_name']", 1000)
        .click("input[name='user_name']")
        .pause(5000)
        .assert.elementPresent("input[name='user_name']:focus")
        //.click("input[name='user_name']", 1000)
        .end();    
    },

    'Login contains':''+ function(browser) {
        browser
        .url('http://newtours.demoaut.com/')
        .pause(2000)
        .click("input[name='userName']")
        .assert.elementPresent("input[name='userName']:focus") 
        .waitForElementVisible("input[name='password']", 1000)
        .assert.elementPresent("input[name='password']", 1000)
        .waitForElementVisible("input[name='login']", 1000)
        .assert.elementPresent("input[name='login']", 1000)
        .pause(2000)
        .end();
    },

    'Login Tab':''+ function(browser) {
        browser
        .url('http://newtours.demoaut.com/')
        .pause(2000)
        .click("input[name='userName']")
        .assert.elementPresent("input[name='userName']:focus")
        .keys(browser.Keys.TAB)
        .assert.elementPresent("input[name='password']:focus")
        .keys(browser.Keys.TAB)
        .assert.elementPresent("input[name='login']:focus")
        .pause(2000)
        .end();
    },
    'KeysEnter instd click on sign':''+  function(browser) {
        browser
        .url('http://newtours.demoaut.com/')
        .pause(2000)
        .waitForElementVisible("input[name='login']", 1000)
        .click("input[name='userName']")
        .setValue("input[name='userName']", 'NewTask')
        .assert.elementPresent("input[name='password']")
        .setValue("input[name='password']", 'NewTask') 
        .keys(browser.Keys.TAB)
        .keys(browser.Keys.ENTER)
        .end();
    },

    'Login test' : ''+ function (browser) {
        browser
          .url('http://localhost:8888/login')
          .pause(2000)
          .waitForElementVisible("input[name='user_name']", 1000)
          .setValue('input[name=user_name]','Test')
         // .click("input[name='user_name']")
          .pause(5000)
          .assert.elementPresent("input[name='user_name']:focus")
          //.click("input[name='user_name']", 1000)
          .click('input[type=submit]')
          .assert.containsText('#errormessage', 'User name or password is not correct.')
          .end();    
      },
      'Login test_contains':''+function(browser) {
        browser
        .url('http://localhost:8888/login')
        .pause(2000)
        //.click("input[name='user_name']")
        .assert.elementPresent("input[name='user_name']") 
        .waitForElementVisible("input[name='password']", 1000)
        .assert.elementPresent("input[name='password']", 1000)
        .waitForElementVisible("input[value='Login']", 1000)
        .assert.elementPresent("input[value='Login']", 1000)
        .pause(2000)
        .end();
    },
    'Login test_Tab':''+ function(browser) {
        browser
        .url('http://localhost:8888/login')
        .pause(2000)
        .click("input[name='user_name']")
        .assert.elementPresent("input[name='user_name']:focus")
        .keys(browser.Keys.TAB)
        .assert.elementPresent("input[name='password']:focus")
        .keys(browser.Keys.TAB)
        .assert.elementPresent("input[value='Login']:focus")
        .pause(2000)
        .end();
    },

    'Login test_Tab_Error':''+function(browser) {
        browser
        .url('http://localhost:8888/login')
        .pause(2000)
        //.click("input[name='user_name']")
        .click("input[value='Login']")
        .assert.containsText('h3', 'Input user name and password to login.')
        .end();
    },
    'Login with valid data':''+ function(browser) {
        browser
        .url('http://localhost:8888/login')
        .pause(2000)
        .click("input[name='user_name']")
        .setValue("input[name='user_name']", 'jerry')
        .assert.elementPresent("input[name='password']")
        .setValue("input[name='password']", 'dev2qa.com') 
        .keys(browser.Keys.TAB)
        .pause(2000)
        .keys(browser.Keys.ENTER)
        .pause(2000)
        .assert.containsText('font', 'User name and password is correct, login success.')
        .pause(2000)
        //.keys(browser.Keys.ALT+LEFT_ARROW)
        .keys(browser.back())
        .pause(2000)
        .end();
    },
    'Register for login':''+function(browser) {
        browser
        .url('http://localhost:8888/login')
        .pause(2000)
        //.waitForElementVisible("input[name='login']", 1000)
        .click("a[href='/register']")
        .setValue("input[name='userName']", 'NewTask1')
        .assert.elementPresent("input[name='password']")
        .setValue("input[name='password']", 'NewTask1')
        .setValue("input[name='email']", 'Test@gmail.com') 
        .keys(browser.Keys.TAB)
        .keys(browser.Keys.ENTER)
        .pause(2000)
        //.assert.containsText('td', 'User info registration success.')
        .end();

    },
    'Register for pwd encripted':''+function(browser) {
        browser
        .url('http://localhost:8888/login')
        .pause(2000)
        .setValue("input[name='userName']", 'NewTask1')
        .assert.elementPresent("input[name='password']")
        .setValue("input[name='password']", 'NewTask1')
        .pause(2000)
        //.assert.containsText('td', 'User info registration success.')
        .end();

};