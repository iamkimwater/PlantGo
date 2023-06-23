# PlantGo

### 1. Setting up the development environment
- Development OS: Windows
- Target OS: Android

```terminal
npx react-native@latest init PlantGo
npm run android
```

```terminal
git init
git add .
git commit -m "initial commit"
git branch -M dev
git remote add origin https://github.com/iamkimwater/PlantGo.git
git push -u origin dev    
```
### 2. Change android package name : com.iamkimwater.plantgo

#### < fixed file list >
- android/app/build.gradle
- android/app/src/debug/java/com/plantgo/ReactNativeFlipper.java
- android/app/src/main/java/com/plantgo/MainActivity.java
- android/app/src/main/java/com/plantgo/MainApplication.java
- android/app/src/release/java/com/plantgo/ReactNativeFlipper.java

### 3. Setting up build types

#### < fixed file list >
- android/app/build.gradle
- android/app/src/main/AndroidManifest.xml
- android/app/src/main/res/values/strings.xml
- android/gradle.properties
- android/app/proguard-rules.pro
- .gitignore
- package.json

#### < added file list >
- .env.dev
- .env.alpha
- .env.beta
- .env.prod

```terminal
# for signing, Generating an upload key
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

