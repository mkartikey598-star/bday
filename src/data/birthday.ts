
export const config = {
  herName: "Siddhi",
  yourName: "Kartikey",
  intro: { hello: "Hey", sub: "Someone has a little surprise for you.", hint: "Tap the gift ✨" },
  hero: {
    headline: "Happy Birthday",
    subtitle: "Today is all about celebrating the wonderful person you are.",
    photo: "pic6.jpeg",
    photoAlt: "Happy bday twin",
  },
  // Add / remove / reorder freely. Missing files show a cute placeholder.
  // chapter = small story title shown on the page. tilt = degrees.
  photos: [
    { src: "pic2.jpeg", alt: "nih biting nail", chapter: "sitting nih", caption: "look at ts nih", tilt: -4 },
    { src: "pic3.jpeg", alt: "nih screenshotting", chapter: "Snap using nih", caption: "dog filter init", tilt: 3 },
    { src: "pic4.jpeg", alt: "nih cryin", chapter: "lil ahh", caption: "lwk cute tho", tilt: -2 },
    { src: "pic5.jpeg", alt: "OMG MARIO", chapter: "bro is not mario", caption: "nih aint mario ong", tilt: 5 },
  ],
  cake: { button: "Make a wish", message: "I hope this year brings you all the happiness you deserve." },
  letterTitle: "A little something for you",
  letter: `Happy Birthday, SIDDHI!

I hope your day is filled with happiness, laughter, and all the little things that make you smile. You deserve so many beautiful things in life, and I hope this new year brings you countless reasons to be happy.

Never forget how special you are. Keep smiling, keep being yourself, and keep making the world a little brighter just by being in it.

Wishing you the happiest birthday and an amazing year ahead! 💗`,
  cards: [
    { title: "A little reminder 💌", message: "Youre lwk goated gng" },
    { title: "Something you should know ✨", message: "You might be one of the best people I know online" },
    { title: "A wish for your new year 🌷", message: "I hope you have a great year ahead and make sure to have shit ton of fun!!" },
    { title: "Open when you need a smile ☁️", message: "You're amazing and I'm grateful to know you!" },
    { title: "One last little surprise 🎀", message: "You're loved more than you know!" },
  ],
  wishMachine: { title: "Your birthday wish machine", prompt: "Tap the button to draw a wish…", button: "Draw a wish ✨" },
  wishes: [
    "May you always find reasons to smile, even on ordinary days.",
    "May this year surprise you in the best possible ways.",
    "May all the little things you've been hoping for find their way to you.",
    "Here's to more laughter, beautiful memories, and exciting adventures.",
  ],
  notesTitle: "A few little things to make you smile",
  notes: [
    "You deserve good things. Never forget that.",
    "Your smile is worth protecting.",
    "You're doing better than you think.",
    "You're short af ngl",
  ],
  easterEgg: "You found the secret star! [HIDDEN MESSAGE] 🌟",
  // musicFile: put an mp3 in public/audio/ and write its name, e.g. "music.mp3". Sound is always off until she taps the toggle.
  sound: { musicFile: "" },
  finale: {
    button: "One last thing...",
    message: `Happy Birthday once again, SIDDHI. 💗

Idk what to say except that you are one of the best people Ive met online youre goated af and have humour that might be comparable to mine but all jokes aside have a great day/year ahead and make sure to live life to its fullest without any regrets or anything and also make sure to drink complan cause you short af(jk).

Have the most wonderful birthday. You deserve it.`,
    signoff: "With lots of birthday wishes,",
    overlay: "You are so appreciated. 💗",
  },
};
export const fill = (s: string) => s.replaceAll("SIDDHI", config.herName).replaceAll("KARTIKEY", config.yourName);
