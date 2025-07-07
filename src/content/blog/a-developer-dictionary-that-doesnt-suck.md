---
title: 'WTF Is Everyone Talking About? A developer dictionary that doesn’t suck'
summary: Cheat sheet for dev terms that actually makes sense! Psst… nobody actually knows all these terms at first
date: '2025-04-08'
cover: '@/assets/img/developer-dictionary-cheat-sheet.jpg'
tags: ['tips']
---

**Hey folks!** 👋

Back when I first started coding, I felt like everyone was speaking _a secret language_. Meetings were full of words like _"Agile," "SEO," "Tech Debt,"_ and I’d just nod like 😃 _"Yep, totally get it…"_ (Spoiler: I didn’t.)

So here’s **my no-bs cheat sheet** for dev vocabulary that nobody bothered to explain to me. Bookmark this if you’re new—or just pretend you’ve known these all along (we’ve all been there).

---

### **🤹 "We Work in Agile"**

_(Translation: "We pretend to be organized, but chaos reigns.")_

- **Agile** = A way to manage projects by breaking them into tiny chunks (called _sprints_), so you can panic every 2 weeks instead of all at once.
- **Scrum** = A subtype of Agile where you stand in daily meetings (_stand-ups_) and say what you did yesterday (aka "I Googled errors for 4 hours").
- **Kanban** = Fancy word for a to-do list with columns like _"Doing," "Done,"_ and _"Why Is This Still Here?"_

_(Fun fact: My first sprint felt like running a marathon… backwards.)_

---

### **🔍 "The SEO Needs Work"**

_(Translation: "Google hates our website.")_

- **SEO (Search Engine Optimization)** = The dark art of making your site show up on Google. Involves witchcraft (_meta tags_, _keywords_, and _backlinks_).
- **Semantic HTML** = Using `<article>` instead of `<div id="thingy">` so screen readers and Google don’t get confused.

_(Pro tip: If your site looks like a 1999 GeoCities page, SEO won’t save you.)_

---

### **💸 "Let’s Avoid Tech Debt"**

_(Translation: "We cut corners, and now we’re paying for it.")_

- **Tech Debt** = When you write janky code to hit a deadline, and future-you _hates_ past-you for it. Like taking a loan… but the interest is _bugs_.
- **Refactoring** = Rewriting code so it doesn’t look like a toddler’s finger-painting.
- **Legacy Code** = Ancient code nobody understands, but it somehow _still runs_. (_"Don’t touch it—it might explode."_)

---

### **🎨 "The Design System is Broken"**

_(Translation: "The CSS is a war zone.")_

- **Design System** = A set of reusable UI components (_buttons, cards, etc._) so your app doesn’t look like 5 different devs styled it.
- **BEM** = A CSS naming convention like `.block__element--modifier`. Sounds weird, but it keeps your sanity intact.

---

### **❤️ "We Use Open Source"**

_(Translation: "We didn’t build this, but thanks, strangers on GitHub!")_

- **Open Source** = Code that’s free to use/modify. Like React, VS Code, or that random npm package you _definitely_ checked for malware.
- **npm/yarn** = Tool to install JavaScript packages. Also where `node_modules` goes to eat your hard drive.
- **MIT License** = "Do whatever, just don’t sue us."

---

### **🚨 "It’s a P0 Bug!"**

_(Translation: "Drop your coffee—the site’s on fire.")_

- **P0/P1/P2 Bugs** = Priority levels. P0 means _"fix this or we all lose our jobs."_ P2 means _"maybe next year… or never."_
- **Hotfix** =
- **Regression** = When you fix a bug but accidentally resurrect an older bug like a _zombie apocalypse_.

---

### **🐳 "We Need to Dockerize This"**

_(Translation: "Let’s wrap our app in a digital burrito so it runs anywhere.")_

- **Docker** = Tool to package apps with all their dependencies (so they work the same on your laptop _and_ a server).
- **Kubernetes (k8s)** = Docker’s overachieving cousin—manages _containers_ at scale. (Also, a great way to make your resume sound fancy.)
- **Microservices** = When you break an app into tiny, independent pieces so _one crash doesn’t doom everything_. (In theory.)

---

### **💀 "The API Is Down"**

_(Translation: "Our app is now a brick.")_

- **API** = A way for apps to talk to each other. Like a waiter taking orders between the kitchen (server) and your table (frontend).
- **REST** = A common API design style. you ask for stuff via URLs, and the server delivers, plain and simple.
- **GraphQL** = REST’s hipster cousin. Only wants the data it needs, with zero extra calories.
- **Endpoint** = A URL where an API "listens" (e.g., `https://api.cats.com/v1/meow`).
- **Rate Limiting** = When an API says _"slow down, buddy"_ after you spam it too much.

- **DDoS** = When so many requests hit your server that it collapses. Sometimes intentional. Always bad

- **Websockets** = Real-time communication between browser and server. Used for chat apps, games...

---

### **🔬 "Let’s A/B Test This"**

_(Translation: "We’ll guilt-trip users into clicking the red button.")_

- **A/B Testing** = Showing 50% of users Version A and 50% Version B to see which one _doesn’t_ flop.
- **CTA (Call to Action)** = The button you _really_ want users to click (_"Sign Up!"_, _"Buy Now!"_, _"Please, just click something!"_).
- **Bounce Rate** = When users visit your site and leave faster than a bad date.

---

### **🐢 "Our CDN Is Slow"**

_(Translation: "The internet is buffering like it’s 2005.")_

- **CDN (Content Delivery Network)** = Servers around the world that cache your site’s files so Australians don’t wait 10 seconds for your CSS.
- **Cache** = Temporary storage (like your browser remembering a site so it loads faster next time).
- **Cache Invalidation** = The art of _clearing_ cached stuff when it’s outdated. (Often done by smashing keyboards.)

---

### **🦄 "Just Polyfill It"**

_(Translation: "Make this work in IE, even if it kills us.")_

- **Polyfill** = Code that _fakes_ modern features for older browsers. Like giving IE11 a fake mustache to sneak into the club.
- **Transpiler** = Converts modern code (ES6) into older JS so _grandpa browsers_ understand it. **Babel** is the OG here.
- **Ponyfill** = A polyfill that _doesn’t_ pollute global scope. (Yes, this is a real term.)

---

### **🔫 "That’s a Footgun"**

_(Translation: "This code lets you shoot yourself in the foot… easily.")_

- **Footgun** = A feature/tool that’s _dangerously easy to misuse_. (Example: JavaScript’s `==` vs `===`.)
- **Yak Shaving** = Doing 10 pointless tasks to fix _one tiny thing_. _(Example: Updating npm to fix a bug… but now Webpack won’t compile… and suddenly it’s 3 AM.)_
- **Bikeshedding** = Arguing endlessly about trivial stuff (_"Should the button be #FF0000 or #CC0033?"_) while ignoring big problems.

---

### **🚀 "We’re Going Headless"**

_(Translation: "We’re fancy now.")_

- **Headless CMS** = A backend for content (like blog posts) that _doesn’t care_ how the frontend looks. Popular ones: Sanity, Contentful.
- **Headless Browser** = A browser without a UI (used for testing/scraping). **Puppeteer** is the celeb here.
- **JAMstack** = Building sites with **J**avaScript, **A**PIs, and **M**arkup. (Basically, _"let’s make static sites dynamic."_)

---

### **🍝 "It’s Just Spaghetti Code"**

_(Translation: "The previous dev was a chaos gremlin.")_

- **Spaghetti Code** = A tangled mess where changing _one line_ breaks 12 unrelated things.
- **Lasagna Code** = Over-engineered layers of abstraction (the opposite problem).
- **Rubber Duck Debugging** = Explaining your code to a rubber duck (or a patient coworker) to find the bug yourself. _(Works scarily well.)_
- **DRY** = (Don’t Repeat Yourself) A coding mantra to avoid writing the same thing twice.

- **Tree-Shaking** = The build process shakes out unused code.

---

### **☁️ "The Cloud Isn’t Magic" (DevOps & Infrastructure)"**

_(Translation: "It’s just someone else’s computer.")_

- **AWS/GCP/Azure** = Cloud providers that rent you servers (and charge you $5,000 if you forget to turn them off).

- **Serverless** = A lie—there are still servers, but you don’t manage them. Like AWS Lambda ("run code without crying over Linux updates").

- **Load Balancer** = Traffic cop for your servers, so one doesn’t get crushed while others nap.

---

### **🧮 "Big O, Big Problems" (Algorithms & Performance)**

_(Translation: "Your code is slow. Here’s why.")_

- **Big O Notation** = Measures how slow your algorithm gets as data grows.

  - **O(1)** = Lightning fast (_"lookup by key in a dictionary"_).
  - **O(n)** = _"Eh, not terrible"_ (looping through an array once).
  - **O(n²)** = _"Why is my laptop smoking?"_ (nested loops).
  - **O(n!)** = _"Burn it with fire"_ (traveling salesman brute force).

- **Optimization** = The art of making _O(n²)_ into _O(n log n)_ so your app doesn’t crash.
- **Premature Optimization** = Obsessing over speed _before_ your code even works. (Don’t be this person.)

---

### **🤖 Bonus: Acronyms That Sound Like Sci-Fi**

- **CRUD** = Create, Read, Update, Delete (basic app functions). Pronounced "krud"
- **CORS** = Browser security rule that _loves_ to ruin your day. Pronounced "kors"
- **SSR** = Server-Side Rendering (HTML built on the server). **CSR** = Client-Side Rendering (HTML built in the browser). Pronounced "S-S-R" / "C-S-R"
- **TTFB** = Time To First Byte (how long your site takes to _start_ loading). Pronounced "T-T-F-B"
- **WYSIWYG** = "What You See Is What You Get" (like WordPress’s editor). Pronounced "wizzy-wig"

---

**Want me to add even _more_ obscure terms?** Like **"CI/CD"** or **"WebAssembly"**? DM me on (@saida_codes) and let me know! 😄

_Want this as a PDF cheat sheet?_ <a href="/dev-vocabulary-cheat-sheet.pdf" target="_blink">Download</a> _900+ devs already stole it ;)_
