<template>
  <div class="footer">
    <div class="section-1">
      <div>
        <div class="link-title">Hosting</div>
        <ul>
          <li class="nav-link" v-for="(item, i) in hosting" :key="i">
            <a href="javascript:void()">{{ item }} Hosting</a>
          </li>
        </ul>
      </div>

      <div>
        <div class="link-title">features</div>
        <ul>
          <li class="nav-link" v-for="(item, i) in features" :key="i">
            <a href="javascript:void()">{{ item }}</a>
          </li>
        </ul>
      </div>

      <div>
        <div class="link-title">support</div>
        <ul>
          <li class="nav-link" v-for="(item, i) in support" :key="i">
            <a href="javascript:void()">{{ item }}</a>
          </li>
        </ul>
      </div>

      <div class="flex-grow"></div>

      <div>
        <div class="link-title">we accept</div>
        <div class="accept">
          <img
            :src="`/images/${item}`"
            v-for="(item, i) in images"
            class="w-14 lg:w-20"
            :key="i"
          />
        </div>
      </div>
    </div>

    <div class="section-2 responsive-flex">
      <div>
        <img src="/images/logo.png" alt="" />
        <div>
          St. Patrick Ave., 10233 <br />
          USA
        </div>
      </div>
      <div class="flex-grow"></div>
      <div>
        <div>
          <div class="social-media">
            <img
              :src="`/images/${item}`"
              class="social-icon"
              v-for="(item, i) in socialMedia"
              :key="i"
            />
          </div>
          <span>
            <a href="javascript:void()" class="nav-link">Terms of Service</a> |
            <a href="javascript:void()" class="nav-link">Privacy Policy</a>
          </span>
        </div>
      </div>
    </div>

    <div class="section-2-mobile">
      <div>
        <img src="/images/logo.png" alt="" />
        <div>
          St. Patrick Ave., 10233 <br />
          USA
        </div>
      </div>
      <div class="my-1">
        <a href="javascript:void()" class="nav-link">Terms of Service</a> |
        <a href="javascript:void()" class="nav-link">Privacy Policy</a>
      </div>
      <div class="social-media-mobile">
        <img
          :src="`/images/${item}`"
          class="social-icon"
          v-for="(item, i) in socialMedia"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hosting: ["Shared", "VPS", "Cloud", "Wordpress"],
      features: [
        "Beginner Guide",
        "Move to Servion",
        "Website Builder",
        "Tools and Resources",
      ],
      support: ["Help Center", "Submit a Ticket", "Contact Us", "Blog"],
      images: ["visa.png", "master-card.png", "union.png", "group.png"],
      socialMedia: [
        "instagram.png",
        "twitter.png",
        "youtube.png",
        "facebook.png",
      ],
    };
  },
};
</script>

<style scoped lang="postcss">
.footer {
  background-image: url("/images/footer-bg.png");
  min-height: 500px;
  @apply bg-cover bg-no-repeat bg-center px-10 lg:px-20 pt-36 pb-10 text-white flex flex-col lg:justify-end;
}

.section-1 {
  @apply flex flex-col xl:flex-row xl:space-x-32 space-y-10 xl:space-y-0;
}

.section-2 {
  @apply mt-20 space-x-32;
}

.section-2-mobile {
  @apply mt-16 block lg:hidden;
}

.link-title {
  @apply text-xl mb-3 uppercase font-bold;
}

.nav-link {
  @apply hover:text-secondary transition duration-500;
}

.accept {
  @apply flex space-x-3;
}

.social-media {
  @apply flex space-x-3 my-3 justify-end;
}

.social-media-mobile {
  @apply flex space-x-5 mt-10 justify-start;
}

.social-icon {
  @apply cursor-pointer;
}
</style>