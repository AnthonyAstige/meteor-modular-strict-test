# meteor-modular-strict-test

## The problem

Originally when run client and server would show

```
indexjs/not-strict.js is NOT STRICT
indexjs/strict.js is STRICT
packagejson/not-strict.js is NOT-STRICT
packagejson/strict.js is STRICT
```

I expected all to output STRICT - See https://github.com/meteor/meteor/issues/7050

## The workaround

### Stuff I've done (so you don't have to)

```
meteor npm install babel-plugin-transform-strict-mode --save
```

Created `.babelrc` as shown in this repository

### Run from release-1.3.3 branch

**Checkout the meteor release-1.3.3 branch**

```
cd ~/
git clone https://github.com/meteor/meteor.git
cd meteor
git fetch origin
git checkout -t origin/release-1.3.3
```

**Run from the meteor release-1.3.3 branch**

```
cd meteor-modular-strict-test
~/meteor/meteor run
```

## Confirming the problem is there

remove .babelrc temporarily and run the app to see original output
