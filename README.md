# Demo App

This is a demo React Native App.

It is built on latest versions of react v18.2.0, react-native v0.71.8, node v20.2.0

The main libraries used in this app are

- react navigation
- redux toolkit
- animation
- react native maps
- carousel

# Installation

- Setup react native latest enviroment
- Check out [this react native article] (https://reactnative.dev/docs/environment-setup) to setup the enviroment 🚀
- Download the respository
- open terminal and move to the project folder
- run command `npm install` to install node modules

# For IOS

- move to ios directory
- run command `npx  pod install` to install pods
- then finally run project from xcode or `npx react-native run-ios`

# For Android

- add google api key in android manifest file for google maps

```javascript
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="Google api key"/>
</application>
```

- then finally run `npx react-native run-android`
