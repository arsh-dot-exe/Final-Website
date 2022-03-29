const firebaseConfig = {
  apiKey: "AIzaSyC9s_hzLcJwxlm-CsOF0rrQ3H9xDu3hhvw",
  authDomain: "dd-find-culture-website.firebaseapp.com",
  databaseURL: "https://dd-find-culture-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dd-find-culture-website",
  storageBucket: "dd-find-culture-website.appspot.com",
  messagingSenderId: "363929239376",
  appId: "1:363929239376:web:708eefe00d70123082f655",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initalize Variables
const auth = firebase.auth();
const database = firebase.database();

const userUid = sessionStorage.getItem("userUid");

const cultureContainer = document.querySelector("[data-culture-container]");
const cultureGroupTemplate = document.querySelector("[data-culture-group]");

var db_ref = database.ref("users/");

db_ref.on(
  "value",
  (snapshot) => {
    all_values = snapshot.val();
    sorted_values = sortCultures(all_values);

    sorted_values.forEach((culture) => {
      const culture_group = cultureGroupTemplate.content.cloneNode(true);

      const culture_heading = culture_group.children[0].querySelector("[data-culture-heading]");
      culture_heading.textContent = culture[0].culture;

      const userCardContainer = culture_group.querySelector("[data-user-cards-container]");
      const userCardTemplate = culture_group.querySelector("[data-user-template]");

      culture.forEach((user) => {
        log(user);
        const card = userCardTemplate.content.cloneNode(true).children[0];
        log(card);

        const username = card.querySelector("[data-username]");
        const cult_user = card.querySelector("[data-culture]");
        const user_bio = card.querySelector("[data-user-bio]");

        username.textContent = user.user_name;
        cult_user.textContent = user.culture;
        user_bio.textContent = user.userBio;
        userCardContainer.append(card);
      });

      cultureContainer.append(culture_group);
    });
  },
  (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  }
);

function log(val) {
  console.log(val);
}

function sortCultures(all_values) {
  sorted_list = [];
  culture_names = [];

  // "Object.values() is an inbuilt JS function to get all Object values for ".forEach()" to work
  Object.values(all_values).forEach((user) => {
    culture_names.push(user.culture);
  });

  culture_names = [...new Set(culture_names)];
  temp_values = Object.values(all_values);

  for (var cult_name of culture_names) {
    values_of_cult = [];
    for (var index in temp_values) {
      if (temp_values[index].culture == cult_name) {
        values_of_cult.push(temp_values[index]);
      }
    }

    sorted_list.push(values_of_cult);
  }

  return sorted_list;
}

/*
console.log(user);

      const card = userCardTemplate.content.cloneNode(true).children[0];
      const username = card.querySelector("[data-username]");
      const cult_user = card.querySelector("[data-culture]");
      const user_bio = card.querySelector("[data-user-bio]");

      username.textContent = user.user_name;
      cult_user.textContent = user.culture;
      user_bio.textContent = user.userBio;

      userCardContainer.append(card);

      */
