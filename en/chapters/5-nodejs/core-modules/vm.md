# 🐢 Node.js

## 🌟 The different core modules

### VM

The [VM](https://nodejs.org/api/vm.html) module allows you to run JavaScript code within a different V8 context and in particular to have a separate [Realm](https://github.com/tc39/proposal-realms/blob/main/explainer.md). It is rather useful when your need is to execute code without interfering with the current Realm (your Node.js process).

However, the core module does not have a lot of features and does not guarantee that you can execute code that comes from outside (someone malicious could therefore still escape from the sandbox). I myself use this kind of functionality within the framework of SlimIO to execute codes provided by integrators (as part of a modularity by UI).

If you have a similar need I recommend you take a look at the following modules:

- [Isolated VM](https://github.com/laverdet/isolated-vm)
- [VM2](https://github.com/patriksimek/vm2)

---

⬅️ [🌟 The different core modules: Utilities](./utilities.md) |
➡️ [🌟 The different core modules: Assert](./assert.md)
