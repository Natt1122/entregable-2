// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Muy importante entender que en este archivo se relacionan los parámetros generados por Firebase
export const environment = {
  production: false,
  FIREBASE_CONFIG:{
    apiKey: "AIzaSyCEF8wzEj3_AsIPtXL9sYlr8e2Jqwp6xGQ",
    authDomain: "appionicarteniz.firebaseapp.com",
    projectId: "appionicarteniz",
    storageBucket: "appionicarteniz.appspot.com",
    messagingSenderId: "451527520610",
    appId: "1:451527520610:web:1b947cf004917a17c87c3b",
    measurementId: "G-74RH6L8PQ2"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
