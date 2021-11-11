# Steps to reproduce the issue

1. Take a clone of the repo and run `npm i`.

2. After installing node modules, run `npm test` to execute unit test cases with Mocha.

3. It will break with error messsage `ReferenceError: customElements is not defined` due to `import '@ionic/react'` in `App.js`.

4. To successfully run the test case, you can comment out `import '@ionic/react'` in `App.js` and run `npm test` again, it will pass the test cases now.
