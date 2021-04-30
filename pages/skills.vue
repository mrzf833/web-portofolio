<template>
    <div class="container mx-auto pt-12">
        <h1 class=" text-4xl text-white text-center"><p class="text1 inline-block">This Is</p> <p class="text2 inline-block text-green-400">My Experience</p></h1>
        <div class="pt-12 flex relative">
            <div class="">
                <h3 class="text-4xl text-white border-b-4 border-green-400 pb-2 skills">Skills</h3>
            </div>
            <div class="flex flex-row flex-wrap ml-32 mt-10">
                <div v-for="card in cards" :key="card" :class="'w-full sm:w-1/2 md:w-1/3 mb-16 card-skills card-skill' + card ">
                    <div class="flex justify-center">
                        <div class="">
                            <div class="flex justify-center w-full"><PhpLogo class="w-32"/></div>
                            <h4 class="text-xl text-center mt-5"><p class="text-yellow-300 inline-block">3 Years</p> <p class="text-white inline-block">Of Experience</p></h4>
                        </div>
                        <div class="">
                            <div class="w-full h-full flex justify-center items-center">
                                <h4 class="text-yellow-300 text-2xl head-logo flex justify-center">
                                PHP
                            </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import gsap from "gsap/dist/gsap"
import scrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(scrollTrigger);
export default {
    data() {
        return {
            cards: [1,2,3,4,5,6,7,8]
        }
    },
    mounted() {
        this.startGsap()
    },
    methods: {
        startGsap: function(){
            gsap.to('.text1',{
                duration: 0.5,
                x: 0,
                opacity: 1
            })

            gsap.to('.text2',{
                duration: 0.5,
                x: 0,
                opacity: 1
            })

            gsap.to('.skills',{
                duration: 1,
                opacity: 1
            })

            for (let i = 1;  i <= this.cards.length; i++) {
                gsap.to('.card-skill' + i,{
                    scrollTrigger: {
                        trigger: '.card-skill' + i,
                        start: "top bottom",
                        end:"bottom 10%",
                        toggleActions: "restart reverse restart reverse",
                    },
                    
                    duration: 0.5,
                    x: 0,
                    opacity: 1
                })
            }
        },
    },
}
</script>
<style scoped>
    .skills{
        top: 50%;
        transform: translateY(-50%);
        position: fixed;
        transform: rotate(270deg);
        opacity: 0;
    }

    .text1{
        transform: translateX(-60px);
        opacity: 0;
    }

    .text2{
        transform: translateX(60px);
        opacity: 0;
    }

    .head-logo{
        transform: rotate(270deg);
    }

    .card-skills{
    transform: translatex(60px);
    opacity: 0;
}
</style>