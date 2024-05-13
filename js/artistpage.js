document.addEventListener("DOMContentLoaded", function () {
  const numberOfItems = 9;

  const images = [
    { image: "1.webp", name: "Distant Galaxy" },
    { image: "2.webp", name: "Life On Edena" },
    { image: "3.webp", name: "AstroFiction" },
    { image: "4.webp", name: "CryptoCity" },
    { image: "5.webp", name: "ColorfulDog 0524" },
    { image: "6.webp", name: "Space Tales" },
    { image: "7.webp", name: "Cherry Blossom Girl 037" },
    { image: "8.webp", name: "Dancing Robots 0987" },
    { image: "9.webp", name: "IceCream Ape" },
  ];

  const container = document.querySelector(".artist_cardrow");

  for (let i = 0; i < numberOfItems; i++) {
    const divItem = document.createElement("div");
    divItem.classList.add("more_cardrow_item");

    i > 2 && i < 6 ? divItem.classList.add("secondrow") : "none";
    i >= 6 ? divItem.classList.add("thirdrow") : "none";

    const pos = Math.floor(Math.random() * images.length);
    const { image: randomImage, name: randomName } = images[pos];
    images.splice(pos, 1);

    divItem.innerHTML = `
      <div class="atropos my-atropos-${i}">
          <div class="atropos-scale">
            <div class="atropos-rotate">
              <div class="atropos-inner">
                <a href="marketplace.html" class="more_card">
                  <img src="images/artistpage/artist-pic${randomImage}" />
                  <div class="marketplace_card_placeholder">
                    <h5 data-atropos-offset="5" class="sans">${randomName}</h5>
                    <div data-atropos-offset="5" class="more_card_artistcard">
                      <img src="images/nftartistcard.png" alt="" />
                      <p class="base-sans">Animakid</p>
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
              `;
    container.appendChild(divItem);
    atroposFunc(i);
  }
});
