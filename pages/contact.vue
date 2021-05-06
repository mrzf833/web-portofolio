<template>
    <div class="container mx-auto pt-12 overflow-hidden">
        <h1 class="text-4xl text-center text-white">
            <p class="inline-block text1">Hello, if you want</p> 
            <p class="inline-block text-green-400 text2">contact me,</p> 
            <p class="inline-block text3">you can contact via the link below</p>
        </h1>
        <div>
            <div class="pt-12">
                <div class="mb-8">
                    <div class="inline-block logo"><FacebookLogo class="w-12 inline-block"/></div>
                    <a href="https://www.facebook.com/mrzf833" class="logo-link inline-block ml-3 text-blue-500 text-xl hover:text-blue-700" target="_blank">https://www.facebook.com/mrzf833</a>
                </div>
                <div class="mb-8">
                    <div class="inline-block logo"><TelegramLogo class="w-12 inline-block"/></div>
                    <a href="https://t.me/MRzfi" class="logo-link inline-block ml-3 text-blue-500 text-xl hover:text-blue-700" target="_blank">https://t.me/MRzfi</a>
                </div>
                <div class="mb-8">
                    <div class="inline-block logo"><WhatsappLogo class="w-12 inline-block"/></div>
                    <a href="https://wa.me/6282278329458" class="logo-link inline-block ml-3 text-blue-500 text-xl hover:text-blue-700" target="_blank">https://wa.me/6282278329458</a>
                </div>
                <div class="mb-8">
                    <div class="inline-block logo"><GithubLogo class="w-12 inline-block"/></div>
                    <a href="https://github.com/mrzf833" class="logo-link inline-block ml-3 text-blue-500 text-xl hover:text-blue-700" target="_blank">https://github.com/mrzf833</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap/dist/gsap"
export default {
    mounted() {
        this.startAnimaion()
    },
    methods: {
        startAnimaion: function(){
            gsap.to('.text1', {
                duration: 0.5,
                x: 0,
                opacity: 1
            })

            gsap.to('.text2', {
                duration: 0.5,
                y: 0,
                opacity: 1
            })

            gsap.to('.text3', {
                duration: 0.5,
                x: 0,
                opacity: 1
            })

            gsap.to('.logo', {
                duration: 0.5,
                x: 0,
                opacity: 1
            })

            gsap.to('.logo-link', {
                duration: 0.5,
                x: 0,
                opacity: 1
            })
        }
    },
}
</script>

<style scoped>
    .text1{
        transform: translateX(-60px);
        opacity: 0;
    }

    .text2{
        transform: translateY(-60px);
        opacity: 0;
    }

    .text3{
        transform: translateX(60px);
        opacity: 0;
    }

    .logo{
        transform: translateX(-60px);
        opacity: 0;
    }

    .logo-link{
        transform: translateX(60px);
        opacity: 0;
    }
</style>