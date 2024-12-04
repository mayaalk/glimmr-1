"use strict";

const DOMNavProfile = document.querySelector(".js-nav-profile");
const DOMNavSwipe = document.querySelector(".js-nav-swipe");

DOMNavProfile.addEventListener("click", () => {
  sessionStorage.page = "profile";
});

DOMNavSwipe.addEventListener("click", () => {
  sessionStorage.page = "swipe";
});

const DOMSearchInput = document.querySelector(".js-search-input");
const DOMSearchButton = document.querySelector(".js-search-button");

const DOMResourceList = document.querySelector(".js-resource-list");

const articles = [{
  title: "Understanding Women's Concerns About Safety",
  summary: "Learn about the challenges women face in online dating and how you can create a safer, more respectful experience for everyone.",
  text: [
    "For many women, online dating can be exciting but also fraught with safety concerns. Experiences with harassment, unsolicited messages, or fear of physical harm shape how women engage with dating apps. Recognizing and addressing these concerns can make you a more thoughtful and trustworthy partner.",
    "One of the simplest ways to show respect is to honor boundaries. If someone says they're not comfortable sharing personal information or meeting in person right away, respect their pace. Pressuring or rushing can come across as dismissive of their comfort. Instead, focus on building trust through meaningful conversation.",
    "Consider how you present yourself online. Does your profile and messaging style convey approachability? A friendly tone, genuine interest, and patience go a long way in helping someone feel safe. By prioritizing safety and respect in your interactions, you not only build trust but also contribute to a healthier, more welcoming community for everyone."
  ]
}, {
  title: "Handling Rejection with Grace",
  summary: "Rejection is part of dating&mdash;but how you respond speaks volumes about your character. Learn how to handle it respectfully and move forward.",
  text: [
    "Rejection is an inevitable part of dating, but how you respond to it can make all the difference. When someone declines your interest, it's important to remember that it's not a reflection of your worth. People have unique preferences, situations, and feelings that might not align with yours, and that's okay.",
    "A gracious response to rejection leaves a positive impression and reflects emotional maturity. Simply thanking the person for their honesty and wishing them well shows respect for their decision. Reacting with anger or trying to change their mind, on the other hand, only damages trust and can make someone feel unsafe.",
    "Use rejection as an opportunity for growth. Take a moment to reflect on what went well and where you could improve, but don't dwell on negativity. By approaching rejection with grace and understanding, you show resilience and open the door to more meaningful connections in the future."
  ]
}, {
  title: "The Art of Being a Good Conversationalist",
  summary: "Great conversations build connections. Learn tips to keep conversations engaging, respectful, and balanced.",
  text: [
    "A great conversation is the foundation of any connection. It's not about impressing someone with witty one-liners&mdash;it's about creating a space where both people feel heard and valued. A good rule of thumb is to listen as much as you talk, if not more. This shows genuine interest and allows for a natural flow of ideas.",
    "Asking open-ended questions is a fantastic way to keep the conversation going. Instead of \"Do you like traveling?\" try \"What's the best trip you've ever been on?", "This invites them to share a story and makes the interaction more engaging. Pay attention to their answers and respond thoughtfully, showing you're invested in what they have to say.",
    "Finally, be mindful of boundaries. If someone seems hesitant or disengaged, don't push the conversation. Humor and kindness can help lighten the mood, but respect and attentiveness are what truly make someone feel comfortable. Great conversations are a two-way street, built on empathy, curiosity, and care."
  ]
}, {
  title: "Consent and Boundaries: Building Trust",
  summary: "Healthy relationships start with clear, enthusiastic consent. Learn how to respect and communicate boundaries effectively.",
  text: [
    "Consent is at the heart of any healthy interaction. It's not just about asking for permission&mdash;it's about fostering mutual trust and comfort. Clear, enthusiastic consent ensures that both people feel respected and valued, whether it's for something as simple as continuing a conversation or as significant as planning a date.",
    "Respecting boundaries is just as important as seeking consent. If someone says no to a request, accept it without question. Pressuring or trying to convince them otherwise undermines trust. Instead, focus on creating an environment where they feel safe and in control. Communicating your own boundaries is equally important&mdash;healthy relationships thrive when both parties feel heard.",
    "Remember, consent is an ongoing dialogue. Circumstances and feelings can change, and it's essential to check in regularly. By prioritizing consent and boundaries, you lay the foundation for connections built on mutual respect and trust, which are the building blocks of any meaningful relationship."]
}, {
  title: "Developing Emotional Intelligence for Better Connections",
  summary: "Empathy and self-awareness are essential for building strong relationships. Explore ways to enhance your emotional intelligence.",
  text: [
    "Emotional intelligence is a crucial skill in dating and relationships. It helps you understand your own emotions, empathize with others, and navigate challenging situations with grace. Developing this skill not only improves your interactions but also deepens your self-awareness and confidence.",
    "Start with active listening. Pay close attention to what the other person is saying, without planning your response or interrupting. Reflect their feelings by saying, \"It sounds like that was really important to you,\" or \"I can see how that would be challenging.\" Small gestures like these show empathy and build trust.",
    "Managing your emotions is another key aspect of emotional intelligence. In moments of conflict or misunderstanding, take a step back and respond calmly instead of reacting impulsively. Acknowledge your feelings, but don't let them dictate your behavior. By cultivating self-awareness and empathy, you can create more meaningful, harmonious connections that benefit both you and your partner."
  ]
}, {
  title: "Creating a Profile That Stands Out (In a Good Way)",
  summary: "Your profile is your first impression&mdash;make it count! Learn how to create an authentic, engaging profile that attracts the right matches.",
  text: [
    "A great dating profile doesn't just showcase your best qualities&mdash;it also gives others a glimpse of what connecting with you might be like. Start by choosing photos that represent who you are. Use a mix of pictures that highlight your personality and interests, such as a photo of you hiking, cooking, or laughing with friends. Avoid heavily filtered or group photos that can feel misleading. A clear, friendly profile picture where you're smiling is always a winner!",
    "When writing your bio, focus on authenticity. Share what makes you unique, like your favorite hobbies, a quirky talent, or a recent accomplishment you're proud of. Humor can be a great way to break the ice, but keep it light and approachable. Avoid clichés like \"I love long walks on the beach\"&mdash;instead, say something specific, like, \"I'm the kind of person who can never pick just one item at brunch (waffles and eggs, anyone?).\"",
    "Lastly, be upfront about your values and what you're looking for in a match. If honesty, kindness, or a shared passion for travel are important to you, let that shine through. Being clear and specific not only helps you attract the right people but also sets the tone for honest, meaningful connections. Your profile should feel like an invitation&mdash;not a résumé. Keep it friendly, open, and true to who you are."
  ]
}];

const list_html = articles.map(({ title, summary }, i, arr) => `
  <a class="c-resources__link c-link js-resource-link ${i < arr.length - 1 ? "has-sibling" : ""}" href="article.html">
    <div>
      <dt class="c-link__head js-resource-head">${title}</dt>
      <dd class="c-link__body js-resource-body">${summary}</dd>
    </div>
    <img alt="Link" src="icons/google-fonts-link.svg" />
  </a>
`).join("\n");

DOMResourceList.innerHTML = `${list_html}${DOMResourceList.innerHTML}`;

const DOMResourceLinkAll = document.querySelectorAll(".js-resource-link");
const DOMResourceHeadAll = document.querySelectorAll(".js-resource-head");
const DOMResourceBodyAll = document.querySelectorAll(".js-resource-body");

const DOMResourceNone = document.querySelector(".js-resource-none");

DOMSearchButton.addEventListener("click", (event) => {
  event.preventDefault();

  const List = [];

  DOMResourceLinkAll.forEach((Link, i) => {
    const Head = DOMResourceHeadAll[i];
    const Body = DOMResourceBodyAll[i];

    const show = [Head, Body]
      .filter((Item) => Item.textContent.toLowerCase().includes(DOMSearchInput.value.toLowerCase()))
      .length > 0;

    Link.classList.toggle("is-hidden", !show);

    if (show) {
      List.push(Link);
    }
  });

  List.forEach((Link, i, arr) => {
    Link.classList.toggle("has-sibling", i < arr.length - 1);
  });

  DOMResourceNone.classList.toggle("is-hidden", List.length);
});

DOMResourceLinkAll.forEach((Link, i) => {
  Link.addEventListener("click", () => {
    sessionStorage.article = JSON.stringify(articles[i]);
  });
});
