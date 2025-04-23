// Navbar and Footer Injection Script

// Store the navbar HTML in a variable
const navbarHTML = `
  <nav>
      <image src="assets/logo.svg" style="height:50;width:50px;" id="logo"></image>
      <div class="nav-links">
          <!-- <a href="index.html" class="nav-link active">Home</a> -->
          <a href="index.html" class="nav-link">Home</a>
          <a href="#" class="nav-link">Tools</a>
          <a href="about-us.html" class="nav-link">About Us</a>
          <a href="contact-us.html" class="nav-link">Contact Us</a>
      </div>
      <button class="theme-toggle" aria-label="Toggle dark mode">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="theme-icon">
              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 2V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 20V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.34 17.66L4.93 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.07 4.93L17.66 6.34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>
  </nav>
`;

// mobile navbar
function handleHamburgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Store the footer HTML in a variable
const footerHTML = `
  <footer>
        <div class="footer-content">
            <div class="copyright">© 2025 Excalibur Tools. All rights reserved.</div>
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    </footer>
`;

// Function to inject navbar and footer
function injectComponents() {
  console.log("injecting components");
  // Find the navbar and footer containers
  const navbarContainer = document.getElementById("navbar-container");
  const footerContainer = document.getElementById("footer-container");

  // Inject the HTML
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }

  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
}

// Add screen reader only class for accessibility
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
</style>
`
);

// Call the function when the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", injectComponents);

//! Wait until DOM is fully loaded before getting elements
document.addEventListener("DOMContentLoaded", (event) => {
  injectComponents();
  // DOM Elements
  // const navLinks = document.querySelectorAll(".nav-link");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  // const submitForm = document.getElementById("submit-form");
  // const registerBtn = document.getElementById("register-btn");

  // Theme toggle functionality
  function setupThemeToggle() {
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
  setupThemeToggle();

  function updateThemeIcon(theme) {
    if (theme === "dark") {
      themeIcon.innerHTML = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    } else {
      themeIcon.innerHTML = `
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" stroke-width="2" stroke-linecap=s"round" stroke-linejoin="round"/>
        <path d="M12 2V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 20V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.34 17.66L4.93 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.07 4.93L17.66 6.34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `;
    }
  }

  console.log("DOM fully loaded and parsed");
});

//! Dropdown menu
let selected = null;
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("form-control");
  const dropdown = document.getElementById("form-control");

  // Only execute if both elements exist
  if (toggleBtn) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event bubbling
      // dropdown.style.display =
      //   dropdown.style.display === "block" ? "none" : "block";
    });

    // Hide dropdown when clicking outside
    // document.addEventListener("click", () => {
    //   dropdown.style.display = "none";
    // });

    // Optional: Select option and update toggle text
    const dropdownItems = dropdown.querySelectorAll("li");
    if (dropdownItems.length > 0) {
      dropdownItems.forEach((item) => {
        item.addEventListener("click", () => {
          selected = item.dataset.value;
          toggleBtn.textContent = item.textContent;
          dropdown.style.display = "none";
        });
      });
    }
  }
});

// Navigation functionality
function setupNavigation() {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute("data-page");

      // Hide all pages
      document.querySelectorAll(".page").forEach((page) => {
        page.classList.remove("active");
      });

      // Show target page
      document.getElementById(targetPage).classList.add("active", "fade-in");

      // Update active link
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}

// Button event handlers
function setupButtonHandlers() {
  // Page 3 submit button
  submitForm.addEventListener("click", () => {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Form submitted successfully with email: ${email}`);
    emailInput.value = "";
  });

  // Page 4 register button
  registerBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const age = document.getElementById("age").value.trim();
    const category = document.getElementById("category").value;
    const message = document.getElementById("message").value.trim();

    if (!username) {
      alert("Please enter a username.");
      return;
    }

    if (!age) {
      alert("Please enter your age.");
      return;
    }

    if (!category) {
      alert("Please select a category.");
      return;
    }

    alert(
      `Registration successful!\nUsername: ${username}\nAge: ${age}\nCategory: ${category}\nMessage: ${
        message || "No additional information provided."
      }`
    );

    // Clear form
    document.getElementById("username").value = "";
    document.getElementById("age").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("message").value = "";
  });
}

// Utility: Email validation
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // setupThemeToggle();
  // setupButtonHandlers();

  // Ensure form elements don't submit on Enter
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
  });

  // Ensure proper initialization of active page
  // const activePage = document
  //   .querySelector(".nav-link.active")
  //   .getAttribute("data-page");
  // document.querySelectorAll(".page").forEach((page) => {
  //   page.classList.remove("active");
  // });
  // document.getElementById(activePage).classList.add("active");

  // Make sure first page is initialized
  // if (activePage === "page1" && !pageOne.querySelector(".card")) {
  //   initPageOne();
  // }
});

// Add keyboard navigation for accessibility
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const focusableElements = document.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length) {
      document.body.classList.add("keyboard-navigation");
    }
  }
});

// Remove keyboard navigation style when mouse is used
document.addEventListener("mousedown", () => {
  document.body.classList.remove("keyboard-navigation");
});

//! Render results logic
function updateResult(resultId, value, isError = false) {
  let resultBox = document.getElementById(resultId);

  if (!resultBox) return; // Safety check

  resultBox.textContent = value;
  resultBox.style.display = "inline-block"; // Show result

  // Reset error class first, then apply conditionally
  resultBox.classList.remove("error");
  if (isError) {
    resultBox.classList.add("error");
  }
}

function parseList(input) {
  return input.split(/\s*,\s*/).filter((item) => item.trim() !== "");
}

function compareLists() {
  let list1 = parseList(document.getElementById("list1").value);
  let list2 = parseList(document.getElementById("list2").value);
  const comparisonType =
    document.getElementById("comparisonType").value || "differences";
  const caseSensitive = document.getElementById("caseSensitive")?.checked;
  const sortResults = document.getElementById("sortResults")?.checked;

  if (list1.length === 0 || list2.length === 0) {
    updateResult(
      "result",
      "Error: Please make sure a list has been added to List 1 and List 2.",
      true
    );
    return;
  }

  if (!caseSensitive) {
    list1 = list1.map((item) => item.toLowerCase());
    list2 = list2.map((item) => item.toLowerCase());
  }

  const set1 = new Set(list1);
  const set2 = new Set(list2);

  let resultText = "";

  if (comparisonType === "matches") {
    const matches = list1.filter((item) => set2.has(item));
    const uniqueMatches = [...new Set(matches)];
    if (uniqueMatches.length === 0) {
      resultText = "There are no items that appear in both lists.";
    } else {
      if (sortResults) uniqueMatches.sort();
      resultText = `These items appear in both lists: ${formatList(
        uniqueMatches
      )}.`;
    }
  } else {
    const onlyInList1 = list1.filter((item) => !set2.has(item));
    const onlyInList2 = list2.filter((item) => !set1.has(item));

    const unique1 = [...new Set(onlyInList1)];
    const unique2 = [...new Set(onlyInList2)];

    if (sortResults) {
      unique1.sort();
      unique2.sort();
    }

    if (unique1.length === 0 && unique2.length === 0) {
      resultText = "The lists are identical.";
    } else {
      let parts = [];
      if (unique1.length > 0) {
        parts.push(
          `${formatList(unique1)} ${
            unique1.length > 1 ? "are" : "is"
          } only in List 1`
        );
      }
      if (unique2.length > 0) {
        parts.push(
          `${formatList(unique2)} ${
            unique2.length > 1 ? "are" : "is"
          } only in List 2`
        );
      }
      resultText = parts.join("; ") + ".";
    }
  }

  updateResult("result", resultText);
}

function formatList(arr) {
  if (arr.length === 1) return `"${arr[0]}"`;
  if (arr.length === 2) return `"${arr[0]}" and "${arr[1]}"`;
  return (
    arr
      .slice(0, -1)
      .map((i) => `"${i}"`)
      .join(", ") + `, and "${arr[arr.length - 1]}"`
  );
}

function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

function convertText() {
  const text = document.getElementById("textInput").value;
  const caseType = selected;
  let convertedText = "";

  if (text.length < 1) {
    updateResult("result", "Error: Please enter text to convert.", true);
    return;
  }

  if (!caseType) {
    // updateResult("result", "Error: Please select a casing option.", true);
    // Just use Title Case if no option selected
    convertedText = toTitleCase(text);
    updateResult("result", `${convertedText}`);
    document.getElementById("result").setAttribute("data-copy", convertedText);
    return;
  }

  switch (caseType) {
    case "title_case":
      convertedText = toTitleCase(text);
      break;
    case "sentence":
      convertedText =
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      break;
    case "uppercase":
      convertedText = text.toUpperCase();
      break;
    case "lowercase":
      convertedText = text.toLowerCase();
      break;
    case "alternating":
      convertedText = text
        .split("")
        .map((char, i) =>
          i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
        )
        .join("");
      break;
    case "inverse":
      convertedText = text
        .split("")
        .map((char) =>
          char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
        )
        .join("");
      break;
    case "snake":
      convertedText = text.toLowerCase().replace(/\s+/g, "_");
      break;
    case "kebab":
      convertedText = text.toLowerCase().replace(/\s+/g, "-");
      break;
    case "camel":
      convertedText = text
        .toLowerCase()
        .replace(/(?:\s+|^)(\w)/g, (match, p1, offset) =>
          offset === 0 ? p1.toLowerCase() : p1.toUpperCase()
        );
      break;
    case "pascal":
      convertedText = text
        .toLowerCase()
        .replace(/(?:\s+|^)(\w)/g, (match, p1) => p1.toUpperCase());
      break;
    case "screaming_snake":
      convertedText = text.toUpperCase().replace(/\s+/g, "_");
      break;
    case "screaming_kebab":
      convertedText = text.toUpperCase().replace(/\s+/g, "-");
      break;
    case "train":
      convertedText = text
        .toLowerCase()
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("-");
      break;
    default:
      convertedText = text;
  }

  updateResult("result", `${convertedText}`);
  document.getElementById("result").setAttribute("data-copy", convertedText);
}

function copyToClipboard(selectorId) {
  const textToCopy = document
    .getElementById(selectorId)
    .getAttribute("data-copy");
  if (textToCopy) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        showSnackbar();
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
}

function showSnackbar() {
  const snackbar = document.getElementById("snackbar");
  snackbar.classList.add("show");

  // Hide snackbar after 3 seconds
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
}

function generateAlphabeticalString(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateNumber(length) {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateString() {
  const charCount = parseInt(document.getElementById("charCount").value) || 0;
  const numCount = parseInt(document.getElementById("numCount").value) || 0;

  if (numCount === 0 && charCount === 0) {
    updateResult(
      "result",
      "Error: Please enter number of alphanumerical characters.",
      true
    );
    return;
  }

  if (charCount === 0) {
    updateResult(
      "result",
      "Error: Please enter number of alphabetical characters.",
      true
    );
    return;
  }

  if (numCount === 0) {
    updateResult(
      "result",
      "Error: Please enter number of numerical characters.",
      true
    );
    return;
  }

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  let charPart = "";
  let numPart = "";

  for (let i = 0; i < charCount; i++) {
    charPart += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (let i = 0; i < numCount; i++) {
    numPart += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  let result =
    selected === "numFirst" ? numPart + charPart : charPart + numPart;
  const outputElement = document.getElementById("result");
  updateResult("result", result);
  outputElement.setAttribute("data-copy", result);
}

function pickRandomItem() {
  let input = document.getElementById("itemInput").value;
  let items = input
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "");

  if (items.length === 0) {
    updateResult("result", "Error: Please enter some items.", true);
    return;
  }

  let result = Math.floor(Math.random() * items.length);
  updateResult("result", `${items[result]}`);
  document.getElementById("result").setAttribute("data-copy", result);
}

function expandCharSet(charSet) {
  const expanded = [];
  let i = 0;
  while (i < charSet.length) {
    if (i + 2 < charSet.length && charSet[i + 1] === "-") {
      const start = charSet.charCodeAt(i);
      const end = charSet.charCodeAt(i + 2);

      if (start <= end) {
        for (let code = start; code <= end; code++) {
          expanded.push(String.fromCharCode(code));
        }
      }
      i += 3; // Skip processed range (e.g., 'a-z')
    } else {
      expanded.push(charSet[i]);
      i++;
    }
  }
  return expanded;
}

function randomCharFromSet(charSet) {
  const chars = expandCharSet(charSet);
  return chars.length ? chars[Math.floor(Math.random() * chars.length)] : "";
}

function generateFromSimpleRegex(regex) {
  let result = "";
  const regexPattern = /\\?\[(.*?)](?:\{(\d+)})?/g;
  let match;
  let lastIndex = 0;

  while ((match = regexPattern.exec(regex)) !== null) {
    result += regex.substring(lastIndex, match.index); // Add literal text
    const charSet = match[1];
    const repeat = match[2] ? parseInt(match[2], 10) : 1;

    for (let i = 0; i < repeat; i++) {
      result += randomCharFromSet(charSet);
    }

    lastIndex = regexPattern.lastIndex;
  }

  result += regex.substring(lastIndex); // Add remaining literal text
  return result;
}

function generateStrings() {
  const regexInput = document.getElementById("regexInput").value.trim();
  // const count = parseInt(document.getElementById("countInput").value, 10) || 1;

  if (!regexInput) {
    updateResult("result", "Error: Please enter a regex pattern.", true);
    return;
  }

  try {
    // for (let i = 0; i < count; i++) {
    const generated = generateFromSimpleRegex(regexInput);
    result = `${generated}`;
    updateResult("result", `${result}`);
    document.getElementById("result").setAttribute("data-copy", result);
    // }
  } catch (error) {
    // outputDiv.textContent = "Error: Invalid regex or unsupported pattern.";
    updateResult(
      "result",
      "Error: Invalid regex or unsupported pattern.",
      true
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//! Name logic
function generateName(selectorId) {
  let maleNames = [
    "Andrew",
    "Adam",
    "Adrian",
    "Alan",
    "Allan",
    "Aaron",
    "Alex",
    "Alexander",
    "Anthony",
    "Austin",
    "Archer",
    "Arthur",
    "Aiden",
    "Abraham",
    "Alfred",
    "Alastair",
    "Alasdair",
    "Arnold",
    "Angus",
    "Ben",
    "Benjamin",
    "Barry",
    "Brandon",
    "Blair",
    "Bryce",
    "Blake",
    "Brian",
    "Bryan",
    "Bradley",
    "Bruce",
    "Billy",
    "Bob",
    "Charles",
    "Charlie",
    "Carl",
    "Connor",
    "Cory",
    "Calvin",
    "Cameron",
    "Christian",
    "Callum",
    "Clark",
    "Chandler",
    "Christopher",
    "Chris",
    "Callan",
    "Craig",
    "Daniel",
    "David",
    "Derek",
    "Donald",
    "Declan",
    "Damian",
    "Drew",
    "Danny",
    "Darren",
    "Douglas",
    "Duncan",
    "Dustin",
    "Dennis",
    "Darnell",
    "Desmond",
    "Domenic",
    "Dwight",
    "Drake",
    "Eric",
    "Ethan",
    "Elijah",
    "Ezekiel",
    "Elliot",
    "Evan",
    "Eugene",
    "Edmund",
    "Ewan",
    "Earl",
    "Emmit",
    "Erwin",
    "Edward",
    "Fraser",
    "Franic",
    "Fred",
    "Frank",
    "Fletcher",
    "Graham",
    "Gerald",
    "Gary",
    "Gabriel",
    "Gavin",
    "George",
    "Grant",
    "Garrett",
    "Gregory",
    "Gordon",
    "Geoffrey",
    "Harry",
    "Henry",
    "Hector",
    "Harvey",
    "Hugo",
    "Hank",
    "Isaac",
    "Irwin",
    "James",
    "Jamie",
    "Jerry",
    "John",
    "Jack",
    "Jacob",
    "Joseph",
    "Joshua",
    "Jordon",
    "Justin",
    "Jeremy",
    "Johnny",
    "Jake",
    "Kyle",
    "Kevin",
    "Kaiden",
    "Kane",
    "Kenneth",
    "Kieran",
    "Kian",
    "Lewis",
    "Liam",
    "Lucas",
    "Luke",
    "Lachlan",
    "Martin",
    "Michael",
    "Matthew",
    "Macolm",
    "Martin",
    "Nathan",
    "Nicholas",
    "Neil",
    "Oscar",
    "Oliver",
    "Owen",
    "Peter",
    "Paul",
    "Patrick",
    "Phillip",
    "Pierce",
    "Ross",
    "Reese",
    "Ryan",
    "Rory",
    "Richard",
    "Steven",
    "Stephen",
    "Sam",
    "Samual",
    "Spencer",
    "Shane",
    "Shawn",
    "Sean",
    "Scott",
    "Simon",
    "Trevor",
    "Thomas",
    "Taylor",
    "Tyler",
    "Timothy",
    "Troy",
    "Tony",
    "Toby",
    "Todd",
    "Victor",
    "Vincent",
    "William",
    "Warren",
    "Walter",
    "Wayne",
    "Zachary",
    "Zane",
    "Zack",
  ];

  let femaleNames = [
    "Ashley",
    "Amber",
    "Alice",
    "Alicia",
    "Alison",
    "Allison",
    "Amelia",
    "Amy",
    "Aria",
    "Abigail",
    "Addison",
    "Audrey",
    "Anne",
    "Anna",
    "Alexis",
    "Andrea",
    "Ariel",
    "Arianna",
    "Alexandra",
    "Annie",
    "Angela",
    "Arielle",
    "Astrid",
    "April",
    "Allana",
    "Abby",
    "Angelica",
    "Adrianna",
    "Andi",
    "Brooke",
    "Barbara",
    "Beverely",
    "Bailey",
    "Blake",
    "Bella",
    "Brianna",
    "Bonnie",
    "Bethany",
    "Bridget",
    "Charlotte",
    "Chloe",
    "Cora",
    "Caroline",
    "Caitlin",
    "Carly",
    "Clara",
    "Catherine",
    "Christina",
    "Chelsea",
    "Carolyn",
    "Connie",
    "Cheryl",
    "Candice",
    "Daisey",
    "Danielle",
    "Demi",
    "Deborah",
    "Emma",
    "Ellie",
    "Erica",
    "Emily",
    "Elizabeth",
    "Eva",
    "Erin",
    "Evelyn",
    "Elaine",
    "Eileen",
    "Franchesca",
    "Florance",
    "Gabriella",
    "Grace",
    "Gemma",
    "Gracie",
    "Gwen",
    "Gloria",
    "Gloria",
    "Georgia",
    "Hazel",
    "Harper",
    "Hailey",
    "Hazel",
    "Heidi",
    "Holly",
    "Helen",
    "Hannah",
    "Harriet",
    "Helena",
    "Hayley",
    "Harrietta",
    "Isobel",
    "Ivy",
    "Irene",
    "Imogene",
    "Jessica",
    "Jade",
    "Jesse",
    "June",
    "Juliette",
    "Jasmine",
    "Juliana",
    "Jane",
    "Juliet",
    "Jocelyn",
    "Jacqueline",
    "Jennifer",
    "Joy",
    "Jamie",
    "Jemma",
    "Katie",
    "Karen",
    "Kylie",
    "Kimberley",
    "Khloe",
    "Kiara",
    "Kate",
    "Keira",
    "Kayleigh",
    "Kelsey",
    "Kathryn",
    "Kathleen",
    "Kelly",
    "Lucy",
    "Lauren",
    "Lily",
    "Leah",
    "Lillian",
    "Luciana",
    "Lucille",
    "Laura",
    "Lexi",
    "Leslie",
    "Lara",
    "Linda",
    "Lorraine",
    "Lesly",
    "Lillith",
    "Mary",
    "Margaret",
    "Mia",
    "Maddison",
    "Melanie",
    "Madeline",
    "Molly",
    "Mabel",
    "Melissa",
    "Michelle",
    "Murphy",
    "Miranda",
    "Marie",
    "Megan",
    "Nancy",
    "Natalie",
    "Natalia",
    "Nicole",
    "Nicola",
    "Nadia",
    "Natasha",
    "Nadine",
    "Niomi",
    "Norma",
    "Olivia",
    "Ophelia",
    "Penelope",
    "Piper",
    "Paige",
    "Poppy",
    "Pauline",
    "Paula",
    "Patricia",
    "Riley",
    "Ruby",
    "Ruth",
    "Ryleigh",
    "Rachel",
    "Rachael",
    "Rosemary",
    "Rosie",
    "Rose",
    "Robin",
    "Robyn",
    "Rebecca",
    "Rhianna",
    "Roslyn",
    "Sophie",
    "Sophia",
    "Scarlett",
    "Sarah",
    "Sienna",
    "Sara",
    "Summer",
    "Samantha",
    "Skye",
    "Sage",
    "Sabrina",
    "Sylvia",
    "Stephanie",
    "Sasha",
    "Sam",
    "Samira",
    "Sharon",
    "Shannon",
    "Stacey",
    "Susanna",
    "Susan",
    "Stacy",
    "Sally",
    "Shirley",
    "Sheila",
    "Shae",
    "Siobhan",
    "Tyler",
    "Teagan",
    "Teresa",
    "Theresa",
    "Tara",
    "Tamara",
    "Toni",
    "Tahlia",
    "Violet",
    "Victoria",
    "Valarie",
    "Vanessa",
    "Veronica",
    "Vivian",
    "Wendy",
    "Whittney",
    "Yasmine",
    "Yvonne",
    "Zoe",
    "Zoey",
    "Zara",
    "Zahra",
  ];

  let surname = [
    "Abbett",
    "Abbott",
    "Abrahams",
    "Accord",
    "Ackerman",
    "Adams",
    "Addington",
    "Ahmed",
    "Alderson",
    "Allen",
    "Altman",
    "Anderson",
    "Archer",
    "Armstrong",
    "Ash",
    "Ashford",
    "Ashton",
    "Aspen",
    "Atkins",
    "Atkinson",
    "Austin",
    "Avery",
    "Bachelor",
    "Bailey",
    "Baker",
    "Baldwin",
    "Ball",
    "Banks",
    "Barber",
    "Barker",
    "Barnes",
    "Barnett",
    "Barr",
    "Barrett",
    "Bates",
    "Baxter",
    "Becker",
    "Bell",
    "Benjamin",
    "Benne",
    "Bennett",
    "Benson",
    "Berkeley",
    "Bernhard",
    "Berry",
    "Birch",
    "Bird",
    "Black",
    "Blackburn",
    "Blackwell",
    "Blackwood",
    "Blyth",
    "Bolton",
    "Bond",
    "Booth",
    "Boswell",
    "Bowman",
    "Boyd",
    "Boyle",
    "Bradford",
    "Bradshaw",
    "Braithwaite",
    "Brannigan",
    "Bray",
    "Brent",
    "Brett",
    "Bridges",
    "Briggs",
    "Brock",
    "Brooks",
    "Brown",
    "Browne",
    "Bruce",
    "Bryant",
    "Bryne",
    "Buchanan",
    "Buckingham",
    "Buckley",
    "Bull",
    "Burke",
    "Burney",
    "Burns",
    "Burrows",
    "Burton",
    "Butcher",
    "Butler",
    "Cain",
    "Calder",
    "Calderwood",
    "Campbell",
    "Carell",
    "Carlock",
    "Carpenter",
    "Carr",
    "Carroll",
    "Carter",
    "Cartwright",
    "Cassell",
    "Cassells",
    "Cavanagh",
    "Cavanaugh",
    "Cedar",
    "Chadwick",
    "Chambers",
    "Chang",
    "Changretta",
    "Chaplin",
    "Chapman",
    "Chase",
    "Cheney",
    "Cherry",
    "Christensan",
    "Christie",
    "Clancy",
    "Clark",
    "Clarke",
    "Clements",
    "Clifford",
    "Coates",
    "Cochran",
    "Coen",
    "Cole",
    "Coleman",
    "Collins",
    "Colman",
    "Combs",
    "Conrad",
    "Cook",
    "Cooper",
    "Coppersmith",
    "Cortez",
    "Cosgrove",
    "Coulter",
    "Cox",
    "Craig",
    "Crain",
    "Crane",
    "Crawford",
    "Cruickshank",
    "Cunningham",
    "Curtis",
    "Cutter",
    "Dale",
    "Dalgleish",
    "Daniels",
    "Davenport",
    "Davey",
    "David",
    "Davidson",
    "Davies",
    "Davison",
    "Dawson",
    "Day",
    "Dean",
    "Deans",
    "Delaney",
    "Deluca",
    "Demarco",
    "Dempsey",
    "Devine",
    "Devlin",
    "Diaz",
    "Dickson",
    "Dixon",
    "Dodd",
    "Doherty",
    "Donaldson",
    "Donnell",
    "Donnelly",
    "Douglas",
    "Doyle",
    "Ducksworth",
    "Dudley",
    "Duffy",
    "Duncan",
    "Dunlop",
    "Dunn",
    "Durst",
    "Dutton",
    "Dyer",
    "Edwards",
    "Eisenberg",
    "Eldridge",
    "Elliot",
    "Ellis",
    "Elm",
    "Evans",
    "Fairley",
    "Farmer",
    "Farnsworth",
    "Farrell",
    "Faulkner",
    "Fenton",
    "Ferguson",
    "Ferrall",
    "Field",
    "Finch",
    "Finlay",
    "Finley",
    "Finn",
    "Firth",
    "Fisher",
    "Fitz",
    "Fitzgerald",
    "Fitzpatrick",
    "Flanagan",
    "Fleetwood",
    "Fleming",
    "Flemming",
    "Fletcher",
    "Flores",
    "Flynn",
    "Foley",
    "Forbes",
    "Foreman",
    "Forrest",
    "Foster",
    "Fowler",
    "Frankson",
    "Freeman",
    "Frost",
    "Fry",
    "Fuller",
    "Fulton",
    "Galbraith",
    "Gallagher",
    "Garcia",
    "Gardiner",
    "Gardner",
    "Garrett",
    "Gately",
    "Gent",
    "Gibbons",
    "Gibson",
    "Gillett",
    "Gilmour",
    "Glassford",
    "Glover",
    "Goddard",
    "Gold",
    "Gonzales",
    "Goodfellow",
    "Goodman",
    "Goodwin",
    "Gordon",
    "Gorman",
    "Gould",
    "Graham",
    "Gray",
    "Green",
    "Greene",
    "Greenwood",
    "Gregory",
    "Grey",
    "Grierson",
    "Griffin",
    "Griggs",
    "Grimes",
    "Groves",
    "Gunn",
    "Haggerty",
    "Hahn",
    "Halford",
    "Hall",
    "Halpert",
    "Halsey",
    "Hamlin",
    "Hancock",
    "Hannah",
    "Hannon",
    "Hanson",
    "Hardie",
    "Harding",
    "Hardwick",
    "Hardy",
    "Hargreaves",
    "Harper",
    "Harris",
    "Harrison",
    "Hart",
    "Harte",
    "Hartley",
    "Harwood",
    "Hawking",
    "Hawkins",
    "Hawthorn",
    "Hay",
    "Haynes",
    "Haywood",
    "Healy",
    "Heath",
    "Helm",
    "Hemlock",
    "Henderson",
    "Hendley",
    "Hendry",
    "Henry",
    "Herd",
    "Herrmann",
    "Hicks",
    "Higgins",
    "Hill",
    "Hilton",
    "Hobbs",
    "Hodges",
    "Hoffman",
    "Hogarth",
    "Hogg",
    "Holden",
    "Holden",
    "Holland",
    "Holloway",
    "Holmes",
    "Hood",
    "Hooper",
    "Hoover",
    "Hope",
    "Hopkins",
    "Houghton",
    "Howard",
    "Howell",
    "Hughes",
    "Hume",
    "Hunt",
    "Hunter",
    "Hurst",
    "Hutchins",
    "Hutchinson",
    "Hutchison",
    "Hyde",
    "Hynd",
    "Ingram",
    "Iqbal",
    "Irvine",
    "Jackson",
    "Jacobson",
    "Jamieson",
    "Jarvis",
    "Jenkins",
    "Jenner",
    "Jennings",
    "Jenson",
    "Johnson",
    "Johnston",
    "Jones",
    "Jordan",
    "Juniper",
    "Kaur",
    "Kearney",
    "Kellogg",
    "Kellogg",
    "Kelly",
    "Kemp",
    "Kennedy",
    "Kent",
    "Kepner",
    "Kerr",
    "Ketchum",
    "Keyes",
    "Khan",
    "Kim",
    "Kimber",
    "King",
    "Kirby",
    "Kirk",
    "Kirkman",
    "Kirkpatrick",
    "Kirkwood",
    "Klein",
    "Knight",
    "Knott",
    "Knowles",
    "Koopman",
    "Kutner",
    "Lamb",
    "Lambert",
    "Lane",
    "Langley",
    "Larson",
    "Lasky",
    "Laurie",
    "Law",
    "Lawson",
    "Lazarus",
    "Lee",
    "Lees",
    "Lennon",
    "Lewin",
    "Lewis",
    "Lister",
    "Little",
    "Lloyd",
    "Locke",
    "Long",
    "Lowe",
    "Lucas",
    "Lynch",
    "Lyons",
    "MacAndrew",
    "MacDonald",
    "MacFarlane",
    "MacGregor",
    "MacInnes",
    "MacKay",
    "MacKenzie",
    "MacLachlan",
    "MacManus",
    "MacMillan",
    "MacNeil",
    "MacRoberts",
    "MacTavish",
    "Maclean",
    "Macleod",
    "Maguire",
    "Mahoney",
    "Malik",
    "Malone",
    "Mann",
    "Manning",
    "Marek",
    "Markhov",
    "Markle",
    "Marsden",
    "Marsh",
    "Marshall",
    "Marston",
    "Martell",
    "Martin",
    "Martinez",
    "Mason",
    "Matthews",
    "Maxwell",
    "May",
    "McAdams",
    "McAnulty",
    "McBride",
    "McCarthy",
    "McCay",
    "McCluskey",
    "McColl",
    "McCormack",
    "McCracken",
    "McCreary",
    "McCullough",
    "McCumisky",
    "McCusker",
    "McDermitt",
    "McDonald",
    "McDonnell",
    "McDougall",
    "McDowell",
    "McEleney",
    "McFarlane",
    "McFazdean",
    "McGill",
    "McGinty",
    "McGowan",
    "McGregor",
    "McIntosh",
    "McIntyre",
    "McKee",
    "McKendrick",
    "McKenna",
    "McKenzie",
    "McKidd",
    "McKie",
    "McKinnon",
    "McLaren",
    "McLaughlin",
    "McLean",
    "McLellan",
    "McLennan",
    "McLeod",
    "McMillan",
    "McNab",
    "McNeill",
    "McPherson",
    "McQueen",
    "McShane",
    "Mellor",
    "Mendez",
    "Metcalfe",
    "Meyer",
    "Middleton",
    "Millar",
    "Miller",
    "Mills",
    "Milne",
    "Milton",
    "Mitchell",
    "Monroe",
    "Montgomery",
    "Moore",
    "Morales",
    "Moreland",
    "Morgan",
    "Morris",
    "Morrison",
    "Morton",
    "Moss",
    "Moss",
    "Muir",
    "Muirhead",
    "Munro",
    "Murdock",
    "Murphy",
    "Murray",
    "Nash",
    "Nelson",
    "Newman",
    "Newton",
    "Nicholls",
    "Nightingale",
    "Nixon",
    "Noble",
    "Norman",
    "Norton",
    "Nottingham",
    "Novak",
    "O'Brien",
    "O'Connoll",
    "O'Connor",
    "O'Donnell",
    "O'Leary",
    "O'Malley",
    "O'Neill",
    "O'Sullivan",
    "Oak",
    "Ormiston",
    "Orr",
    "Osborne",
    "Osbourne",
    "Owens",
    "Page",
    "Palmer",
    "Park",
    "Parker",
    "Parkes",
    "Parkinson",
    "Parks",
    "Parsons",
    "Patel",
    "Patel",
    "Patterson",
    "Payne",
    "Payton",
    "Peacock",
    "Pearce",
    "Pearson",
    "Peck",
    "Peletier",
    "Penn",
    "Pepper",
    "Peters",
    "Pettigrew",
    "Phelps",
    "Phillips",
    "Pickering",
    "Pine",
    "Pollard",
    "Pollock",
    "Polson",
    "Poole",
    "Porter",
    "Posner",
    "Potter",
    "Potts",
    "Poulson",
    "Powell",
    "Prescott",
    "Preston",
    "Price",
    "Prince",
    "Pringle",
    "Purdie",
    "Quin",
    "Quinn",
    "Rafferty",
    "Rahmam",
    "Ralston",
    "Ramirez",
    "Ramos",
    "Ramsay",
    "Ramsey",
    "Rayburn",
    "Reed",
    "Reeves",
    "Reid",
    "Rettie",
    "Reynolds",
    "Rhodes",
    "Rice",
    "Richards",
    "Richardson",
    "Riddell",
    "Riggs",
    "Riley",
    "Ritchie",
    "Rivers",
    "Robbins",
    "Roberts",
    "Robertson",
    "Robinovitch",
    "Robins",
    "Robinson",
    "Robson",
    "Rodriguez",
    "Rodríguez",
    "Rogers",
    "Roland",
    "Roland",
    "Rose",
    "Ross",
    "Rowan",
    "Rowe",
    "Rowland",
    "Rowley",
    "Runne",
    "Russell",
    "Rutherford",
    "Sabre",
    "Salmon",
    "Samson",
    "Sanchez",
    "Sanders",
    "Sanderson",
    "Santiago",
    "Saunders",
    "Schmidt",
    "Schmitt",
    "Schofield",
    "Schwarz",
    "Scott",
    "Sharp",
    "Sharpe",
    "Shaw",
    "Shelby",
    "Shelton",
    "Shepherd",
    "Sheppard",
    "Sherman",
    "Shore",
    "Short",
    "Siggard",
    "Silverman",
    "Simmons",
    "Simpson",
    "Sims",
    "Sinclair",
    "Singleton",
    "Skinner",
    "Slater",
    "Sloan",
    "Smalls",
    "Smart",
    "Smith",
    "Snow",
    "Solomans",
    "Somerville",
    "Spalding",
    "Sparks",
    "Specter",
    "Spencer",
    "Spring",
    "Stanley",
    "Stark",
    "Stein",
    "Stephenson",
    "Sterling",
    "Stevens",
    "Stevenson",
    "Stewart",
    "Stiles",
    "Stokes",
    "Stone",
    "Strong",
    "Sullivan",
    "Summer",
    "Sumners",
    "Sutherland",
    "Sutton",
    "Swan",
    "Sweeney",
    "Sweeny",
    "Swift",
    "Sycamore",
    "Tait",
    "Tanaka",
    "Tate",
    "Tayler",
    "Taylor",
    "Thomas",
    "Thompson",
    "Thomson",
    "Thorne",
    "Thornton",
    "Thorpe",
    "Todd",
    "Tomlinson",
    "Torres",
    "Townsend",
    "Trenton",
    "Tucker",
    "Turnbull",
    "Turner",
    "Urban",
    "Vale",
    "Valentia",
    "Vaughn",
    "Vickers",
    "Vickers",
    "Vincent",
    "Waddell",
    "Wade",
    "Walford",
    "Walker",
    "Wall",
    "Wallace",
    "Walls",
    "Walnut",
    "Walsh",
    "Walton",
    "Ward",
    "Warner",
    "Waters",
    "Watkins",
    "Watson",
    "Watts",
    "Weaver",
    "Webb",
    "Webber",
    "Webster",
    "Welch",
    "Welche",
    "Wellick",
    "Wells",
    "Wernstrom",
    "Wessing",
    "West",
    "Weston",
    "Wexler",
    "Wheaton",
    "Wheeler",
    "Whitaker",
    "White",
    "Whitebeam",
    "Whitehead",
    "Whitehouse",
    "Whitman",
    "Whitmore",
    "Whittle",
    "Whyte",
    "Wilde",
    "Wilkins",
    "Wilkinson",
    "Williams",
    "Williamson",
    "Willow",
    "Wilson",
    "Winter",
    "Witcher",
    "Wong",
    "Wood",
    "Woodcock",
    "Woods",
    "Woodward",
    "Wright",
    "Wyatt",
    "Wynn",
    "Yates",
    "Young",
    "Zane",
    "Ziegler",
  ];

  const firstName = maleNames.concat(femaleNames);
  let getFirstName = Math.floor(Math.random() * firstName.length);
  let generatedFirstName = firstName[getFirstName];
  let getSurname = Math.floor(Math.random() * surname.length);
  let generatedSurname = surname[getSurname];
  let result = generatedFirstName + " " + generatedSurname;
  document.getElementById(selectorId).innerText = result;
  document.getElementById(selectorId).setAttribute("data-copy", result);
}

//! Matter number logic
function generateMatterNumber(selectorId, nameId) {
  let name = document.getElementById(nameId).innerText;
  let splitName = name.split(" ");
  let surname = splitName[1];
  let clientNumber = getRandomInt(99);
  if (clientNumber < 10) {
    clientNumber = clientNumber.toString().padStart(2, "0");
  }
  let fileNumber = getRandomInt(99);
  if (fileNumber < 10) {
    fileNumber = fileNumber.toString().padStart(2, "0");
  }
  let part1 = surname.substring(0, 3);
  let part1Formatted = part1.toUpperCase();
  let result = part1Formatted + clientNumber + "-" + fileNumber;
  document.getElementById(selectorId).innerText = result;
  document.getElementById(selectorId).setAttribute("data-copy", result);
}

//! Address Logic
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateAddress(selectorId) {
  const streetNames = [
    "High Street",
    "Station Road",
    "Main Street",
    "Park Avenue",
    "Church Lane",
    "Victoria Road",
    "Queensway",
    "London Road",
    "King Street",
    "New Road",
  ];
  const townsAndPostcodes = [
    { town: "Manchester", postcode: "M1 1AE" },
    { town: "Birmingham", postcode: "B1 1AA" },
    { town: "Liverpool", postcode: "L1 1AF" },
    { town: "Glasgow", postcode: "G1 1AL" },
    { town: "London", postcode: "EC1A 1BB" },
    { town: "Leeds", postcode: "LS1 1UR" },
    { town: "Sheffield", postcode: "S1 2GU" },
    { town: "Bristol", postcode: "BS1 2EP" },
    { town: "Cardiff", postcode: "CF10 1DX" },
    { town: "Edinburgh", postcode: "EH1 1BP" },
  ];
  const houseNumber = Math.floor(Math.random() * 200) + 1;
  const street = getRandomItem(streetNames);
  const { town, postcode } = getRandomItem(townsAndPostcodes);

  let formattedStreet;

  if (Math.random() < 0.25) {
    const unitNumber = Math.floor(Math.random() * 5) + 1;
    formattedStreet = `${unitNumber}/${houseNumber} ${street}`;
  } else {
    formattedStreet = `${houseNumber} ${street}`;
  }

  const result = `${formattedStreet}, ${town}, ${postcode}`;
  document.getElementById(selectorId).innerText = result;
  document.getElementById(selectorId).setAttribute("data-copy", result);
}

//! Telephone number logic
function generateTelephoneNumber(selectorId) {
  const result = "01632 960 " + generateNumber(3);
  document.getElementById(selectorId).innerText = result;
  document.getElementById(selectorId).setAttribute("data-copy", result);
}

//! Mobile number logic
function generateMobileNumber(selectorId) {
  const result = "0770 090 0" + generateNumber(3);
  document.getElementById(selectorId).innerText = result;
  document.getElementById(selectorId).setAttribute("data-copy", result);
}

//! Sort code logic
function formatSortCode(str) {
  return (String(str).match(/.{1,2}/g) || []).join("-");
}

function generateSortCode(selectorId) {
  let sortcode2 = generateNumber(6);
  let result = formatSortCode(sortcode2);
  document.getElementById(selectorId).innerText = result;
  document.getElementById(selectorId).setAttribute("data-copy", result);
}

//! Account number logic
function generateAccountNumber(selectorId) {
  const accountnumber1 = generateNumber(4);
  const accountnumber2 = generateNumber(4);
  let result = accountnumber1 + " " + accountnumber2;
  document.getElementById(selectorId).innerText = result;
  document.getElementById(selectorId).setAttribute("data-copy", result);
}

//! Amount logic
function getAmount(min, max) {
  return Math.random() * (max - min) + min;
}

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function generateAmount(selectorId) {
  let number = parseFloat(getAmount(0, 250000).toFixed(2));
  let result = numberWithCommas(number);
  document.getElementById(selectorId).innerText = result;
  document.getElementById(selectorId).setAttribute("data-copy", result);
}

//! Percentage logic
function calculatePercentageOfValue() {
  const value = parseFloat(document.getElementById("value1").value);
  const percentage = parseFloat(document.getElementById("percentage1").value);
  if (isNaN(value) || isNaN(percentage)) {
    updateResult(
      "result1",
      "Error: Value or Percentage cannot be 0 or null.",
      true
    );
    return;
  }
  const result = (percentage / 100) * value;
  updateResult("result1", `${percentage}% of ${value} is ${result}.`);
}

function calculateValuePlusPercentage() {
  const value = parseFloat(document.getElementById("value2").value);
  const percentage = parseFloat(document.getElementById("percentage2").value);

  if (isNaN(value) || isNaN(percentage)) {
    updateResult(
      "result2",
      "Error: Value or Percentage cannot be 0 or null.",
      true
    );
    return;
  }
  const result = value + (percentage / 100) * value;
  updateResult("result2", `${value} plus ${percentage}% is ${result}.`);
}

function calculateValueMinusPercentage() {
  const value = parseFloat(document.getElementById("value2").value);
  const percentage = parseFloat(document.getElementById("percentage2").value);
  if (isNaN(value) || isNaN(percentage)) {
    updateResult(
      "result2",
      "Error: Value or Percentage cannot be 0 or null.",
      true
    );
    return;
  }
  const result = value - (percentage / 100) * value;

  updateResult("result2", `${value} minus ${percentage}% is ${result}.`);
}

function calculatePercentageOf() {
  let a = parseFloat(document.getElementById("valueA").value);
  let b = parseFloat(document.getElementById("valueB").value);

  if (!a || a === 0) {
    updateResult("result3", "Error: A cannot be 0 or null.", true);
    return;
  }

  if (!b || b === 0) {
    updateResult("result3", "Error: B cannot be 0 or null.", true);
    return;
  }

  const percentage = (a / b) * 100;
  const result = percentage.toFixed(2); // to 2 decimal places
  updateResult("result3", `${a} is ${result}% of ${b}`);
}

//! String replacer logic
function replaceString() {
  const stringInput = document.getElementById("stringInput");
  const findValue = document.getElementById("findValue");
  const replaceValue = document.getElementById("replaceValue");
  const replaceBtn = document.getElementById("replaceBtn");
  // const resultBox = document.getElementById("resultBox");

  replaceBtn.addEventListener("click", () => {
    const inputStr = stringInput.value;
    const find = findValue.value;
    const replace = replaceValue.value;

    if (find === "") {
      updateResult("result", "Error: Please enter a value to find.", true);
      return;
    }

    const regex = new RegExp(find, "g"); // global replace
    const replaced = inputStr.replace(regex, replace);
    updateResult("result", `${replaced}`);
    document.getElementById("result").setAttribute("data-copy", replaced);
  });
}

//! Random number logic

function generateRandomNumber() {
  // Get values from input fields
  const minInput = document.getElementById("minNum");
  const maxInput = document.getElementById("maxNum");

  // Convert to numbers and ensure they're valid
  const min = Number(minInput.value);
  const max = Number(maxInput.value);

  const isMinNull = !min || min === 0;
  const isMaxNull = !min || min === 0;

  // Validate inputs
  if (isMinNull && isMaxNull) {
    updateResult(
      "result",
      "Error: Please enter valid min and max number.",
      true
    );
    return;
  }

  if (isMinNull) {
    updateResult("result", "Error: Please enter valid min number.", true);
    return;
  }

  if (isMaxNull) {
    updateResult("result", "Error: Please enter valid max number.", true);
    return;
  }

  if (min >= max) {
    updateResult(
      "result",
      "Error: Maximum must be greater than minimum.",
      true
    );
    return;
  }

  // Generate random number between min and max (inclusive)
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  // Display the result
  // document.getElementById('result').textContent = randomNumber;
  updateResult("result", `${result}`);
  document.getElementById("result").setAttribute("data-copy", result);
}
