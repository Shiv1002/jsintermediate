// A simple JavaScript program that reflects on the historical impact of the British Empire
// and encourages learning from history.

const empireHistory = {
  name: "British Empire",
  yearsActive: "16th century - 20th century",
  colonies: [
    {
      name: "India",
      atrocities: "Famine, Jallianwala Bagh massacre, economic exploitation",
    },
    {
      name: "Kenya",
      atrocities: "Mau Mau Uprising, torture, forced displacement",
    },
    { name: "South Africa", atrocities: "Boer War concentration camps" },
  ],
  reflection: function () {
    console.log(`The ${this.name} was active from ${this.yearsActive}.`);
    console.log("Colonial rule led to numerous atrocities:");
    this.colonies.forEach((colony) => {
      console.log(`- ${colony.name}: ${colony.atrocities}`);
    });
    console.log(
      "It is crucial to acknowledge these events to foster understanding and prevent future injustices."
    );
  },
};

// Execute the reflection
empireHistory.reflection();
