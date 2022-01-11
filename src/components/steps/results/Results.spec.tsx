import { getResults } from "./Results";

describe("Results", () => {
  it("getResults", () => {
    expect(
      getResults([
        {
          first: "money",
          second: "family",
          selected: "money",
        },
      ])
    ).toEqual(["money"]);
    expect(
      getResults([
        {
          first: "money",
          second: "family",
          selected: "money",
        },
        {
          first: "money",
          second: "love",
          selected: "money",
        },
        {
          first: "money",
          second: "health",
          selected: "money",
        },
        {
          first: "money",
          second: "peace",
          selected: "money",
        },

        {
          first: "family",
          second: "love",
          selected: "family",
        },
        {
          first: "family",
          second: "health",
          selected: "family",
        },
        {
          first: "family",
          second: "fun",
          selected: "family",
        },

        {
          first: "fun",
          second: "love",
          selected: "fun",
        },
        {
          first: "fun",
          second: "health",
          selected: "fun",
        },
        {
          first: "fun",
          second: "money",
          selected: "fun",
        },

        {
          first: "food",
          second: "fun",
          selected: "food",
        },
        {
          first: "food",
          second: "love",
          selected: "food",
        },

        {
          first: "love",
          second: "sport",
          selected: "love",
        },
        {
          first: "love",
          second: "fun",
          selected: "",
        },
      ])
    ).toEqual(["money", "family", "fun", "food"]);

    expect(
      getResults([
        {
          first: "money",
          second: "family",
          selected: "money",
        },
        {
          first: "money",
          second: "love",
          selected: "money",
        },
        {
          first: "money",
          second: "health",
          selected: "money",
        },

        {
          first: "family",
          second: "love",
          selected: "family",
        },
        {
          first: "family",
          second: "health",
          selected: "family",
        },

        {
          first: "love",
          second: "sport",
          selected: "love",
        },
        {
          first: "love",
          second: "fun",
          selected: "",
        },
      ])
    ).toEqual(["money", "family", "love"]);

    expect(
      getResults([
        {
          first: "money",
          second: "family",
          selected: "money",
        },
        {
          first: "money",
          second: "love",
          selected: "money",
        },
        {
          first: "money",
          second: "health",
          selected: "money",
        },

        {
          first: "family",
          second: "love",
          selected: "family",
        },
        {
          first: "family",
          second: "health",
          selected: "family",
        },

        {
          first: "love",
          second: "food",
          selected: "love",
        },
        {
          first: "love",
          second: "sport",
          selected: "love",
        },

        {
          first: "family",
          second: "sport",
          selected: "sport",
        },

        {
          first: "love",
          second: "fun",
          selected: "",
        },
      ])
    ).toEqual(["money", "family", "love", "sport"]);
  });
});
