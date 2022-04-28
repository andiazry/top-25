<template>
  <body class="text-neutral-800 bg-offWhite m-4 md:m-12">
    <main class="grid lg:grid-cols-2">
      <section class="mb-24 lg:mb-0">
        <img
          src="../img/azry-profile.jpg"
          class="w-5/12 object-contain mb-6 rounded-2xl"
        />
        <div>
          <h1 class="text-6xl pb-2">Andi Azry 👌</h1>
          <h2 class="text-xl pb-12">Designer &mdash; NYC, NY</h2>
          <h3 class="font-neueMontrealBold text-xl pb-2">
            In their own words:
          </h3>
          <p class="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            vel veritatis ea obcaecati! In sequi porro quibusdam exercitationem.
            Magnam culpa eaque quaerat laboriosam modi adipisci reprehenderit
            natus odio explicabo perferendis!
          </p>
        </div>
      </section>
      <section class="lg:pl-8 lg:h-screen lg:inline-block lg:overflow-y-auto">
        <iframe
          class=""
          src="https://open.spotify.com/embed/playlist/1cdwNTnM4qLBV9wScLPi4n?utm_source=generator&theme=0"
          width="65%"
          height="80"
          frameborder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <div>
          <ul class="list-none font-editorial">
            <li
              v-for="song in userdata"
              :key="song.id"
              class="flex flex-row border-b border-black py-6 justify-between items-center"
            >
              <div class="flex flex-row items-center">
                <img class="mr-4 w-24 h-24" :src="song.img" />
                <div>
                  <p class="text-2xl font-semibold">
                    {{ song.id }}. {{ song.title }}
                  </p>
                  <p class="font-neueMontrealRegular text-lg">
                    {{ song.artist }} —
                    <span class="italic">{{ song.album }}</span>
                  </p>
                </div>
              </div>
              <div
                v-if="song.isTop"
                class="bg-amber-400 text-black rounded-full p-2 px-4 w-fit rotate-6 font-neueMontrealRegular text-lg"
              >
                You're a winner!
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
import userdata from "../andi-data.json";
export default {
  name: "SongTemplate",
  data() {
    return { userdata };
  },
};
</script>
