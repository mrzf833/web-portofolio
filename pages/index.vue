<template>
  <div class="container mx-auto text-gray-200 h-full overflow-hidden">
    <div class="py-6">
      <div class="flex justify-center">
        <img src="~/assets/profile.jpg" alt="" class="img1 w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover">
      </div>
      <div class="flex justify-center py-4">
        <h1 class="text1 text-4xl sm:text-5xl md:text-6xl">Zulfa Iniko Falaq</h1>
      </div>
      <div class="flex justify-center">
        <p class="text2 text-xl sm:text-2xl md:text-3xl">Backend Developer</p>
      </div>
      <div class="flex justify-center pt-6">
        <div class="block">
          <a href="https://t.me/mrzf833" class="group inline-block logo1" target="_blank"><TelegramLogo class="w-10 duration-500 ease-in-out transform group-hover:-translate-x-4"/></a>
          <a href="https://www.facebook.com/mrzf833" class="group inline-block logo2" target="_blank"><FacebookLogo class="w-10 mx-6 duration-500 ease-in-out transform group-hover:-translate-y-4"/></a>
          <a href="https://github.com/mrzf833" class="group inline-block logo3" target="_blank"><GithubLogo class="w-10 duration-500 ease-in-out transform group-hover:translate-x-4" /></a>
          <a href="https://www.linkedin.com/in/zulfa-iniko-falaq" class="group inline-block logo4" target="_blank"><LinkedInLogo class="w-10 mx-6 duration-500 ease-in-out transform group-hover:translate-y-4"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap/dist/gsap"
export default {
  mounted() {
    this.start()
  },

  methods: {
    start: ()=>{
      gsap.to('.img1', {
          duration: 1,
          y: 0,
          opacity: 1
      })

      gsap.to('.text1', {
          duration: 1,
          x: 0,
          opacity: 1
      })

      gsap.to('.text2', {
          duration: 1,
          x: 0,
          opacity: 1
      })

      gsap.to('.logo1', {
          duration: 1,
          x: 0,
          opacity: 1
      })

      gsap.to('.logo2', {
          duration: 1,
          y: 0,
          opacity: 1
      })

      gsap.to('.logo3', {
          duration: 1,
          x: 0,
          opacity: 1
      })

      gsap.to('.logo4', {
        duration: 1,
        y: 0,
        opacity: 1
      })
    }
  },
}
</script>
<style scoped>
.img1{
  transform: translateY(-60px);
  opacity: 0;
}

.text1{
  transform: translateX(-100px);
  opacity: 0;
}

.text2{
  transform: translateX(100px);
  opacity: 0;
}

.logo1{
  transform: translateX(-1rem);
  opacity: 0;
}

.logo2{
  transform: translateY(-1rem);
  opacity: 0;
}

.logo3{
  transform: translateX(1rem);
  opacity: 0;
}

.logo4{
  transform: translateY(1rem);
  opacity: 0;
}

</style>
