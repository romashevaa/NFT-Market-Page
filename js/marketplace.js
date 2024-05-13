document.addEventListener("DOMContentLoaded", function () {
  const numberOfItems = 12;

  const images = [
    {
      image: "1.webp",
      name: "Magic Mushroom 0325",
      artist: "Shroomie",
      artistpic: "shroomie",
    },
    {
      image: "2.webp",
      name: "Happy Robot 032",
      artist: "BeKind2Robors",
      artistpic: "bekind2",
    },
    {
      image: "3.webp",
      name: "Happy Robot 024",
      artist: "BeKind2Robors",
      artistpic: "bekind2",
    },
    {
      image: "4.webp",
      name: "Designer Bear",
      artist: "Mr Fox",
      artistpic: "mrfox",
    },
    {
      image: "5.webp",
      name: "Colorful Dog 0356",
      artist: "Keepitreal",
      artistpic: "keepitreal",
    },
    {
      image: "6.webp",
      name: "Dancing Robot 0312",
      artist: "Robotica",
      artistpic: "robotica",
    },
    {
      image: "7.webp",
      name: "Cherry Blossom Girl 035",
      artist: "MoonDancer",
      artistpic: "moondancer",
    },
    {
      image: "8.webp",
      name: "Space Travel",
      artist: "NebulaKid",
      artistpic: "nebulakid",
    },
    {
      image: "9.webp",
      name: "Sunset Dimension",
      artist: "Animakid",
      artistpic: "animakid",
    },
    {
      image: "10.webp",
      name: "Desert Walk",
      artist: "Catch 22",
      artistpic: "catch22",
    },
    {
      image: "11.webp",
      name: "IceCream Ape 0324",
      artist: "Ice Ape Club",
      artistpic: "iceape",
    },
    {
      image: "12.webp",
      name: "Colorful Dog 0344",
      artist: "PuppyPower",
      artistpic: "puppy",
    },
  ];

  const container = document.querySelector(".marketplace_cardrow");

  for (let i = 0; i < numberOfItems; i++) {
    const divItem = document.createElement("div");
    divItem.classList.add("more_cardrow_item");

    if (i >= 5 && i <= 7) {
      divItem.classList.add("secondrow");
    }
    if (i >= 8) {
      divItem.classList.add("thirdrow");
    }
    // i > 2 && i < 6 ? divItem.classList.add("secondrow") : none;
    // i >= 6 ? divItem.classList.add("thirdrow") : none;

    const pos = Math.floor(Math.random() * images.length);
    const {
      image: img,
      name: naming,
      artist: artistName,
      artistpic: artistAvatar,
    } = images[pos];
    images.splice(pos, 1);

    divItem.innerHTML = `
      <div class="atropos my-atropos-${i}">
      <div class="atropos-scale">
        <div class="atropos-rotate">
          <div class="atropos-inner">
            <a href="nftpage.html" id="more_card">
              <img
                class="cardrow_img"
                src="images/marketplace/mark-pic${img}"
              />
              <div class="marketplace_card_placeholder">
                <h5 data-atropos-offset="5" class="marketplace_cardname sans">
                  ${naming}
                </h5>
                <div data-atropos-offset="5" class="more_card_artistcard">
                  <img
                    src="images/marketplace/${artistAvatar}.webp"
                    alt=""
                  />
                  <p class="marketplace_cardartist base-sans">
                    ${artistName}
                  </p>
                </div>
                <div data-atropos-offset="5" class="more_addinfo">
                  <div class="more_addinfo_price">
                    <p style="color: #858584" class="caption-mono">Price</p>
                    <p style="color: #fff" class="base-mono">1.63 ETH</p>
                  </div>
                  <div class="more_addinfo_bid">
                    <p style="color: #858584" class="caption-mono grey">
                      Highest Bid
                    </p>
                    <p style="color: #fff" class="base-mono">0.33 wETH</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
              `;
    container.appendChild(divItem);
    atroposFunc(i);
  }
});
